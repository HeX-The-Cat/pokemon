<script>

    import { PBIcon } from "../lib/index.js";
    import Abilities from "./components/Abilities.svelte";
    import ApiFail from "./components/ApiFail.svelte";
    import Main from "./components/Main.svelte";
    import { NameCheck } from "./components/NameCheck.js";
    import Stats from "./components/Stats.svelte";
    import Types from "./components/Types.svelte";
    import WeakRes from "./components/WeakRes.svelte";

    let pokemonName = "";
    let searchingPokemon = getPokemon();

    async function getPokemon() {

        var pokeData = []

        let poke = pokemonName;
        poke = NameCheck(poke);

        if(pokemonName != ""){

            try {
                const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${poke}`)
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
            } catch (error) {
                throw new Error(`No data available with given name. Please check the name for typos and excessive spaces.`)
            }
            
        }
        else{
            throw new Error("Search above for pokemons by their name.");
        }
    }
</script>

<div class=" max-w-[500px] lg:max-w-[1000px]">
    <div class=" flex justify-center">
        <form class="flex justify-around pt-5 w-full max-w-[490px]">
            <input type="search" name="pokeData" bind:value={pokemonName} placeholder="Search for a pokemon" class=" w-[80%] border border-green-500 text-center rounded-md h-10 text-xl">
            <button on:click={() => searchingPokemon = getPokemon()} class=" w-[19%] border border-cyan-500 rounded-md"> Search </button>
        </form>
    </div>
    
    <section class=" w-full">
        {#await searchingPokemon}

            <div class=" flex justify-center pt-52">
                <img src={PBIcon} class="loader" alt=""/>
            </div>
    
        {:then pokeData}
    
        <div class=" lg:flex">
            <div class=" lg:w-1/2">
                <Main pokeData={pokeData} />
    
                <Types pokeData={pokeData} />
            </div>
            <div class=" lg:w-1/2 lg:pt-4">
                <Abilities pokeData={pokeData} />

                <Stats pokeData={pokeData} />

                <WeakRes pokeData={pokeData} />
            </div>
        </div>
    
        {:catch error}
            <ApiFail error={error} />
        {/await}
    </section>
</div>
