<script>
  import { MegaEvol } from "../../lib";
  import { fixer } from "./NameFixer";

  const NameFixer = fixer;

  export let pokeData;
  export let selectedForm;
</script>

{#if pokeData.length > 1}
  <div class=" flex flex-wrap justify-evenly py-6 min-h-[103px]">
    {#each pokeData as form, index}
      {#if form.basic.name.includes("mega-x")}
        <div class=" my-2">
          <button
            class=" formsButton {selectedForm == index ? ' formsButtonSelected ' : ' formsButtonDeselected '}"
            on:click={() => {
              selectedForm = index;
            }}
          >
            <img src={MegaEvol} alt="megaevol" class=" max-h-5 fill-[rainbow-fill] pr-1" />
            <p>Mega X</p>
          </button>
        </div>
      {:else if form.basic.name.includes("mega-y")}
        <div class=" my-2">
          <button
            class=" formsButton {selectedForm == index ? ' formsButtonSelected ' : ' formsButtonDeselected '}"
            on:click={() => {
              selectedForm = index;
            }}
          >
            <img src={MegaEvol} alt="megaevol" class=" max-h-5 fill-[rainbow-fill] pr-1" />
            <p>Mega Y</p>
          </button>
        </div>
      {:else if form.basic.name.includes("mega")}
        <div class=" my-2">
          <button
            class=" formsButton {selectedForm == index ? ' formsButtonSelected ' : ' formsButtonDeselected '}"
            on:click={() => {
              selectedForm = index;
            }}
          >
            <img src={MegaEvol} alt="megaevol" class=" max-h-5 fill-[rainbow-fill] pr-1" />
            <p>Mega</p>
          </button>
        </div>
      {:else if NameFixer[form.basic.name]}
        <div class=" my-2">
          <button
            class=" formsButton {selectedForm == index ? ' formsButtonSelected ' : ' formsButtonDeselected '}"
            on:click={() => {
              selectedForm = index;
            }}
          >
            {NameFixer[form.basic.name]}
          </button>
        </div>
      {:else if form.basic.name.includes("alola")}
        <div class=" my-2">
          <button
            class=" formsButton {selectedForm == index ? ' formsButtonSelected ' : ' formsButtonDeselected '}"
            on:click={() => {
              selectedForm = index;
            }}
          >
            Alolan Form
          </button>
        </div>
      {:else if form.basic.name.includes("galar")}
        <div class=" my-2">
          <button
            class=" formsButton {selectedForm == index ? ' formsButtonSelected ' : ' formsButtonDeselected '}"
            on:click={() => {
              selectedForm = index;
            }}
          >
            Galarian Form
          </button>
        </div>
      {:else if form.basic.name.includes("hisui")}
        <div class=" my-2">
          <button
            class=" formsButton {selectedForm == index ? ' formsButtonSelected ' : ' formsButtonDeselected '}"
            on:click={() => {
              selectedForm = index;
            }}
          >
            Hisuian Form
          </button>
        </div>
      {:else if form.basic.name.includes("paldea")}
        <div class=" my-2">
          <button
            class=" formsButton {selectedForm == index ? ' formsButtonSelected ' : ' formsButtonDeselected '}"
            on:click={() => {
              selectedForm = index;
            }}
          >
            Paldean Form
          </button>
        </div>
      {:else}
        <div class=" my-2">
          <button
            class=" formsButton {selectedForm == index ? ' formsButtonSelected ' : ' formsButtonDeselected '}"
            on:click={() => {
              selectedForm = index;
            }}
          >
            {form.basic.name[0].toUpperCase() + form.basic.name.substring(1).replace(/-/g, " ")}
          </button>
        </div>
      {/if}
    {/each}
  </div>
{/if}
