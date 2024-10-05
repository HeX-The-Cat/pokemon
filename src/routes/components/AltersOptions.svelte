<script>
  export let pokeData;
  export let selectedForm;
</script>

{#if pokeData.length > 1}
  <div class=" flex justify-evenly py-6">
    {#each pokeData as form, index}
      <button
        class=" border rounded-lg p-1 w-full h-max max-w-[150px] transition-all duration-300 {selectedForm == index
          ? ' border-green-500 border-b-2 pb-[6px] mt-[2px] '
          : ' border-white border-b-4 mb-[2px] '}"
        on:click={() => {
          selectedForm = index;
        }}
      >
        {form.basic.name}
      </button>
    {/each}
  </div>
{/if}
