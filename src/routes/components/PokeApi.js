import inputCheck from "./InputCheck";
import { fixer } from "./SearchFixer";

const SearchFixer = fixer;

export async function getPokemon(pokemonName) {
  let pokeData = [];

  const poke = inputCheck(pokemonName); // Parse name for API

  if (SearchFixer[poke]) {
    // Multiple forms fetch
    const formPromises = SearchFixer[poke].map(async (form) => {
      const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${form}`);
      const data = await res.json();

      const abilitiesDetails = await Promise.all(
        data.abilities.map(async (ability) => {
          const resAbi = await fetch(ability.ability.url);
          return await resAbi.json(); // Return the entire ability data
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
      console.error("Error fetching special forms:", error);
      throw new Error("Error fetching special forms for " + poke);
    }
  } else {
    // Regular fetch
    try {
      const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${poke}`);
      const data = await res.json();

      // Fetch all ability details in parallel
      const abilitiesDetails = await Promise.all(
        data.abilities.map(async (ability) => {
          const resAbi = await fetch(ability.ability.url);
          return await resAbi.json(); // Return the entire ability data
        })
      );

      // Push the entire data into basic and abilities
      pokeData.push({
        basic: data, // Store the entire basic data
        abilities: abilitiesDetails, // Store the entire ability data
      });
    } catch (error) {
      console.error("Error fetching Pokémon data:", error);
      throw new Error("No data available with the given name.");
    }
  }

  //console.log(pokeData);
  return pokeData;
}
