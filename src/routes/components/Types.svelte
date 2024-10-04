<script>
  import {
    Bug,
    Dark,
    Dragon,
    Electric,
    Fairy,
    Fighting,
    Fire,
    Flying,
    Ghost,
    Grass,
    Ground,
    Ice,
    Normal,
    Poison,
    Psychic,
    Rock,
    Steel,
    Water,
  } from "../../lib";

  export let pokeData;
  export let selectedForm;
</script>

<div class=" w-[100%]">
  <div class="flex justify-around">
    {#each pokeData[selectedForm].basic.types as type}
      <div class=" flex object-center">
        {#if type.type.name == "bug"}
          <img src={Bug} alt="bug" />
        {/if}

        {#if type.type.name == "dark"}
          <img src={Dark} alt="dark" />
        {/if}

        {#if type.type.name == "dragon"}
          <img src={Dragon} alt="dragon" />
        {/if}

        {#if type.type.name == "electric"}
          <img src={Electric} alt="electric" />
        {/if}

        {#if type.type.name == "fairy"}
          <img src={Fairy} alt="fairy" />
        {/if}

        {#if type.type.name == "fighting"}
          <img src={Fighting} alt="fighting" />
        {/if}

        {#if type.type.name == "fire"}
          <img src={Fire} alt="fire" />
        {/if}

        {#if type.type.name == "flying"}
          <img src={Flying} alt="flying" />
        {/if}

        {#if type.type.name == "ghost"}
          <img src={Ghost} alt="ghost" />
        {/if}

        {#if type.type.name == "grass"}
          <img src={Grass} alt="grass" />
        {/if}

        {#if type.type.name == "ground"}
          <img src={Ground} alt="ground" />
        {/if}

        {#if type.type.name == "ice"}
          <img src={Ice} alt="ice" />
        {/if}

        {#if type.type.name == "normal"}
          <img src={Normal} alt="normal" />
        {/if}

        {#if type.type.name == "poison"}
          <img src={Poison} alt="poison" class="contain" />
        {/if}

        {#if type.type.name == "psychic"}
          <img src={Psychic} alt="psychic" />
        {/if}

        {#if type.type.name == "rock"}
          <img src={Rock} alt="rock" />
        {/if}

        {#if type.type.name == "steel"}
          <img src={Steel} alt="steel" />
        {/if}

        {#if type.type.name == "water"}
          <img src={Water} alt="water" />
        {/if}
      </div>
    {/each}
  </div>
</div>
