<script>
  import { version } from "$app/environment";
  export let message;
</script>

<div class=" text-center px-3">
  <br />
  <h3 class=" text-center">{message}</h3>
  <br />
  <h3 class=" text-center">Pokemon data quicksearch:</h3>
  <p>
    Small personal project for fast data search about Pokemons.<br />
    Majority of the data is related to pokemon battles. <br />
    All data is based on latest gen from
    <a class=" underline text-blue-500 hover:text-blue-300 transition-all" href="https://pokeapi.co/" target="_blank">PokéAPI</a>.
  </p>
  <br />
  <h3>Usage:</h3>
  <p>
    All pokemons and most of their (meaningful) variants can be found based on the suggestions.<br />
    This includes Regional variants and Mega Evolutions.
  </p>
  <br />
  <br />
  <p>Version {version}</p>
</div>
