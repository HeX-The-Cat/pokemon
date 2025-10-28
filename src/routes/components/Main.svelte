<script>
  import { PBIcon } from "../../lib";
  import { fixer } from "./utils/NameFixer";
  export let pokeData;
  export let selectedForm;

  const NameFixer = fixer;
</script>

<div class=" text-center pt-5">
  {#if NameFixer[pokeData[selectedForm].basic.name]}
    <h2>{NameFixer[pokeData[selectedForm].basic.name]}</h2>
  {:else if pokeData[selectedForm].basic.name.includes("mega")}
    <h2>{pokeData[selectedForm].basic.name.replace(/-/g, " ").toUpperCase()}</h2>
  {:else}
    <h2>{pokeData[selectedForm].basic.name.split("-")[0].replace(/-/g, " ").toUpperCase()}</h2>
  {/if}
  {#if pokeData[selectedForm].basic.sprites.other["official-artwork"].front_default}
    <img src={pokeData[selectedForm].basic.sprites.other["official-artwork"].front_default} alt="sprite" class="sprite" />
  {:else}
    <div class=" flex justify-center pt-20 pb-10">
     <img src={PBIcon} class="loader" alt="" />
    </div>
    <p class=" pb-10 text-2xl">No image available</p>
  {/if}
</div>
