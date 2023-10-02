<script>

    import { PBIcon } from "../lib/index.js";
    import Abilities from "./components/Abilities.svelte";
    import ApiFail from "./components/ApiFail.svelte";
    import Main from "./components/Main.svelte";
    import { NameCheck } from "./components/NameCheck.js";
    import Stats from "./components/Stats.svelte";
    import Types from "./components/Types.svelte";

    let pokemonName = "Pikachu";
    let searchingPokemon = getPokemon();

    async function getPokemon() {
        if(pokemonName != ""){

            var pokeData = []

            let poke = pokemonName;
            poke = NameCheck(poke);

            const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${poke.toLowerCase()}`)
            const data = await res.json()
            //console.log(data)
            pokeData.push(data)

            for (let i = 0; i < (data.abilities).length; i++) {
                const resAbi = await fetch(data.abilities[i].ability.url)
                const dataAbit = await resAbi.json()

                //console.log(dataAbit)
                pokeData.push(dataAbit)
            }

            //console.log(pokeData)
            return pokeData
        }
    }
</script>

<div class=" mainWidth">
    <div>
        <form class="flex justify-around">
            <input type="search" name="pokeData" bind:value={pokemonName} placeholder="Search for a pokemon" class=" w-[74%] border border-green-500 text-center rounded-md">
            <button on:click={() => searchingPokemon = getPokemon()} class=" w-[24%] border border-cyan-500 rounded-md"> Search </button>
        </form>
    </div>
    
    <section>
        {#await searchingPokemon}
            <img src={PBIcon} class="loader" alt="pokeball loader"/>
    
        {:then pokeData}
    
            <Main pokeData={pokeData} />
    
            <Types pokeData={pokeData} />
    
            <Abilities pokeData={pokeData} />
    
            <Stats pokeData={pokeData} />
    
        {:catch error}
            
            <ApiFail />
    
        {/await}
    </section>
</div>
