<script>
  import { fixer } from "./utils/NameFixer";
  export let pokeData;
  export let selectedForm;

  const NameFixer = fixer;
</script>

<div class=" text-center pt-5">
  {#if NameFixer[pokeData[selectedForm].basic.name]}
    <h2>{NameFixer[pokeData[selectedForm].basic.name]}</h2>
    <img src={pokeData[selectedForm].basic.sprites.other["official-artwork"].front_default} alt="sprite" class="sprite" />
  {:else if pokeData[selectedForm].basic.name.includes("mega")}
    <h2>{pokeData[selectedForm].basic.name.replace(/-/g, " ").toUpperCase()}</h2>
    <img src={pokeData[selectedForm].basic.sprites.other["official-artwork"].front_default} alt="sprite" class="sprite" />
  {:else}
    <h2>{pokeData[selectedForm].basic.name.split("-")[0].replace(/-/g, " ").toUpperCase()}</h2>
    <img src={pokeData[selectedForm].basic.sprites.other["official-artwork"].front_default} alt="sprite" class="sprite" />
  {/if}
</div>
