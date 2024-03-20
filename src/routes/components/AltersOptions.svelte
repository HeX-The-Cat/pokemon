<script>
    export let pokeData

</script>


{#if pokeData[0].name == "oricorio-baile" || pokeData[0].name == "oricorio-sensu" || pokeData[0].name == "oricorio-pom-pom" || pokeData[0].name == "oricorio-pau"}
    <div class=" flex justify-evenly py-6">
        <button class=" btn-accent px-2">Baile Style</button>
        <button class=" btn-accent px-2">Sensu Style</button>
        <button class=" btn-accent px-2">Pom-Pom Style</button>
        <button class=" btn-accent px-2">Pa'u Style</button>
    </div>
{/if}
