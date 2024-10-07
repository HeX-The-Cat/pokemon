<script>
  export let pokeData;
  export let selectedForm;
  let uniqueAbilities = [];

  const getAbilityDescription = (ability) => {
    //try find short entry
    const shortEntry = ability.effect_entries.find((entry) => entry.language.name === "en");
    if (shortEntry && shortEntry.short_effect) {
      return shortEntry.short_effect;
    }

    //try find flavor entry
    const flavorEntry = ability.flavor_text_entries.find((entry) => entry.language.name === "en");
    if (flavorEntry) {
      return flavorEntry.flavor_text;
    }

    //if no entry found
    return "No effect entry found for the ability";
  };

  //filter dublicate abilities from the array because new gen API stuff dumb
  function filterUniqueAbilities(abilities) {
    const uniqueAbilities = [];
    const abilityNames = new Set();

    abilities.forEach((ability) => {
      if (!abilityNames.has(ability.name)) {
        abilityNames.add(ability.name);
        uniqueAbilities.push(ability);
      }
    });

    return uniqueAbilities;
  }

  //refresh abilities list when changing forms
  $: uniqueAbilities = filterUniqueAbilities(pokeData[selectedForm].abilities);
</script>

<div class=" mt-2 lg:mt-0">
  <h3 class=" pl-4">Abilities:</h3>

  {#each uniqueAbilities as ability, index}
    <div tabindex="-1" class="collapse collapse-arrow">
      <input type="checkbox" />

      <div class="collapse-title text-xl font-medium">
        <p>{ability.name.replace(/-/g, " ").toUpperCase()}</p>
        {#if pokeData[selectedForm].basic.abilities[index].is_hidden}
          <p class="badge badge-outline py-[10px]">Hidden Ability</p>
        {/if}
      </div>

      <div class="collapse-content">
        <p>{getAbilityDescription(ability)}</p>
      </div>
    </div>
  {/each}
</div>
