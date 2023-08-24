<script>
    import {PBIcon} from "../lib/index.js"
  import Fetcher from "./components/Fetcher.svelte";

    

    let pokemonName = "garchomp";
    let searchingPokemon = getPokemon();
    
    function getPokemon() {
        if(pokemonName != ""){
            var pokeData = []
            Fetcher( pokemonName, pokeData );
            
        }
    }

</script>

<div>
    <input type="search" name="pokeData" bind:value={pokemonName} placeholder="Search for a pokemon">
    <button on:click={() => searchingPokemon = getPokemon()}> Search </button>
</div>

<section>
    {#await searchingPokemon}
        <img src={PBIcon} class="loader" alt="pokeball loader"/>

    {:then pokeData}

        <div>
            <p>name:</p>
            <p>{pokeData[0].name.toUpperCase()}</p>
            <img src={pokeData[0].sprites.other["official-artwork"].front_default} alt="sprite" class="sprite"/>
        </div>

        <div>
            <p>abilities:</p>
            {#each pokeData as ability, index}
                {#if index > 0}
                    <p>{ability.name}</p>
                    <p>{ability.effect_entries[1].short_effect}</p>
                {/if}
            {/each}
        </div>

        <div>
            <p>typing:</p>
            {#each pokeData[0].types as type}
                <p>{type.type.name}</p>
            {/each}
        </div>
        

        <div>
            {#each pokeData[0].stats as stat}
                <p>{stat.stat.name}:</p>
                <p>{stat.base_stat}</p>
            {/each}
        </div>
        

    {:catch error}
        <p>{error}</p>

    {/await}
</section>