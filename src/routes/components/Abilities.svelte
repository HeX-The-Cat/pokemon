<script>
    export let pokeData;
</script>

<div>
    {#each pokeData as ability, index}
        {#if index > 0}
            <div tabindex="-1" class="collapse collapse-arrow">

                <div class="collapse-title text-xl font-medium">
                    <p>{ability.name.replace(/-/g, ' ').toUpperCase()}</p>
                    {#if pokeData[0].abilities[index - 1].is_hidden == true}
                        <div class="badge badge-outline">Hidden Ability</div>
                    {/if}
                </div>

                <div class="collapse-content"> 
                    <p>{ability.effect_entries[1].short_effect}</p>
                </div>
                
            </div>
        {/if}
    {/each}
</div>