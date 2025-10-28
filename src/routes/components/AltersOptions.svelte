<script>
  import { MegaEvol } from "../../lib";
  import { fixer } from "./utils/FormFixer";
  import { lightMode } from "./LightDarkSwitch.svelte";

  const FormFixer = fixer;

  export let pokeData;
  export let selectedForm;
</script>

{#if pokeData.length > 1}
  <div class=" flex flex-wrap justify-evenly py-6 min-h-[103px] ">
    {#each pokeData as form, index}
      <div class=" m-2">
        {#if form.basic.name.includes("mega")}
          <button
            class=" formsButton {selectedForm == index ? ' formsButtonSelected ' : ' formsButtonDeselected '}{$lightMode ? 'bg-[#ffffff]' : 'bg-[#1d232a]'}"
            on:click={() => {
              selectedForm = index;
            }}
          >
            <img src={MegaEvol} alt="megaevol" class=" max-h-5 fill-[rainbow-fill] pr-1" />
            {#if form.basic.name.includes("mega-x")}
              <p>Mega X</p>
            {:else if form.basic.name.includes("mega-y")}
              <p>Mega Y</p>
            {:else}
              <p>Mega</p>
            {/if}
          </button>
        {:else if FormFixer[form.basic.name]}
          <button
            class=" formsButton {selectedForm == index ? ' formsButtonSelected ' : ' formsButtonDeselected '}{$lightMode ? 'bg-[#ffffff]' : 'bg-[#1d232a]'}"
            on:click={() => {
              selectedForm = index;
            }}
          >
            {FormFixer[form.basic.name]}
          </button>
        {:else if form.basic.name.includes("alola") || form.basic.name.includes("galar") || form.basic.name.includes("hisui") || form.basic.name.includes("paldea")}
          <button
            class=" formsButton {selectedForm == index ? ' formsButtonSelected ' : ' formsButtonDeselected '}{$lightMode ? 'bg-[#ffffff]' : 'bg-[#1d232a]'}"
            on:click={() => {
              selectedForm = index;
            }}
          >
            {#if form.basic.name.includes("alola")}
              Alolan Form
            {:else if form.basic.name.includes("galar")}
              Galarian Form
            {:else if form.basic.name.includes("hisui")}
              Hisuian Form
            {:else}
              Paldean Form
            {/if}
          </button>
        {:else}
          <button
            class=" formsButton {selectedForm == index ? ' formsButtonSelected ' : ' formsButtonDeselected '}{$lightMode ? 'bg-[#ffffff]' : 'bg-[#1d232a]'}"
            on:click={() => {
              selectedForm = index;
            }}
          >
            {form.basic.name[0].toUpperCase() + form.basic.name.substring(1).replace(/-/g, " ")}
          </button>
        {/if}
      </div>
    {/each}
  </div>
{/if}
