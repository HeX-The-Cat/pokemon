import inputCheck from "./InputCheck";
import { fixer } from "./SearchFixer";

const SearchFixer = fixer;

export const getPokemon = async (pokemonName) => {
  let pokeData = [];

  const poke = inputCheck(pokemonName);

  if (SearchFixer[poke]) {
    // Multiple forms fetch
    const formPromises = SearchFixer[poke].map(async (form) => {
      const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${form}`);
      const data = await res.json();

      const abilitiesDetails = await Promise.all(
        data.abilities.map(async (ability) => {
          const resAbi = await fetch(ability.ability.url);
          return await resAbi.json();
        })
      );

      return {
        basic: data,
        abilities: abilitiesDetails,
      };
    });
    try {
      const formsData = await Promise.all(formPromises);
      pokeData = formsData;
    } catch (error) {
      console.error("Error fetching Pokémon data:", error);
      throw new Error("Error fetching all forms for " + poke);
    }
  } else {
    // Regular fetch
    try {
      const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${poke}`);
      const data = await res.json();
      //console.log(data);

      const abilitiesDetails = await Promise.all(
        data.abilities.map(async (ability) => {
          const resAbi = await fetch(ability.ability.url);
          return await resAbi.json();
        })
      );

      pokeData.push({
        basic: data,
        abilities: abilitiesDetails,
      });
    } catch (error) {
      console.error("Error fetching Pokémon data:", error);
      throw new Error("No data available with the given input.");
    }
  }

  //console.log(pokeData);
  return pokeData;
};
