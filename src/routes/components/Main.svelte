<script>
    export let pokeData;
</script>

<div class=" text-center">
    <h2>{pokeData[0].name.replace(/-/g, ' ').toUpperCase()}</h2>
    <img src={pokeData[0].sprites.other["official-artwork"].front_default} alt="sprite" class="sprite"/>
</div>