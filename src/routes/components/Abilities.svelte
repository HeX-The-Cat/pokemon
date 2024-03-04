<script>
    export let pokeData;

</script>

<div>
    <h3 class=" pl-4">Abilities:</h3>
    
    {#each pokeData as ability, index}
        {#if index > 0}
            {#if ability.effect_entries.hasOwnProperty("1")}
                <div tabindex="-1" class="collapse collapse-arrow">
                    <input type="checkbox" /> 
                    
                    <div class="collapse-title text-xl font-medium">
                        <p>{ability.name.replace(/-/g, ' ').toUpperCase()}</p>
                        {#if pokeData[0].abilities[index - 1].is_hidden == true}
                            <div class="badge badge-outline">Hidden Ability</div>
                        {/if}
                    </div>

                    {#if ability.effect_entries[0].language.name == "en"}
                        <div class="collapse-content"> 
                            <p>{ability.effect_entries[0].short_effect}</p>
                        </div>
                    {:else}
                        <div class="collapse-content"> 
                            <p>{ability.effect_entries[1].short_effect}</p>
                        </div>
                    {/if}
                </div>
            {:else if ability.flavor_text_entries.hasOwnProperty("7")}
                <div tabindex="-1" class="collapse collapse-arrow">
                    <input type="checkbox" />

                    <div class="collapse-title text-xl font-medium">
                        <p>{ability.name.replace(/-/g, ' ').toUpperCase()}</p>
                        {#if pokeData[0].abilities[index - 1].is_hidden == true}
                            <div class="badge badge-outline">Hidden Ability</div>
                        {/if}
                    </div>

                    <div class="collapse-content"> 
                        <p>{ability.flavor_text_entries[7].flavor_text}</p>
                    </div>
                </div>
            {:else}
                <div tabindex="-1" class="collapse collapse-arrow">
                    <input type="checkbox" />

                    <div class="collapse-title text-xl font-medium">
                        <p>{ability.name.replace(/-/g, ' ').toUpperCase()}</p>
                        {#if pokeData[0].abilities[index - 1].is_hidden == true}
                            <div class="badge badge-outline">Hidden Ability</div>
                        {/if}
                    </div>

                    <div class="collapse-content"> 
                        <p>No effect entry found for the ability.</p>
                    </div>
                </div>
            {/if}
        {/if}
    {/each}
</div>