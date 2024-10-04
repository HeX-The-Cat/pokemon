<script>
  export let pokeData;
  export let selectedForm;
</script>

<div class=" text-center pt-5">
  <h2>{pokeData[selectedForm].basic.name.replace(/-/g, " ").toUpperCase()}</h2>
  <img src={pokeData[selectedForm].basic.sprites.other["official-artwork"].front_default} alt="sprite" class="sprite" />
</div>
