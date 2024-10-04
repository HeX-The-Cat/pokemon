<script>
  export let pokeData;
  export let selectedForm;
</script>

{#if pokeData.length > 1}
  <div class=" flex justify-evenly py-6">
    {#each pokeData as form, index}
      <button
        on:click={() => {
          selectedForm = index;
        }}
      >
        {form.basic.name}
      </button>
    {/each}
  </div>
{/if}
