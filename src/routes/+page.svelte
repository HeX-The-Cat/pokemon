<script>
  import { PBIcon } from "../lib/index.js";
  import Abilities from "./components/Abilities.svelte";
  import AltersOptions from "./components/AltersOptions.svelte";
  import Landing from "./components/Landing.svelte";
  import Main from "./components/Main.svelte";
  import Stats from "./components/Stats.svelte";
  import Types from "./components/Types.svelte";
  import WeakRes from "./components/WeakRes.svelte";
  import SearchBar from "./components/SearchBar.svelte";

  let loadingState = "menu";
  let pokeData = [];
  let message = "Search above for pokemons by their name.";
  let selectedForm = 0;
</script>

<div class=" max-w-[500px] lg:max-w-[1000px]">
  <SearchBar bind:pokeData bind:selectedForm bind:loadingState bind:message />

  <section class=" w-full">
    {#if loadingState === "loading"}
      <div class=" flex justify-center pt-52">
        <img src={PBIcon} class="loader" alt="" />
      </div>
    {:else if loadingState === "show"}
      <div>
        <AltersOptions {pokeData} bind:selectedForm />
      </div>

      <div class=" lg:flex">
        <div class=" lg:w-1/2">
          <Main {pokeData} {selectedForm} />

          <Types {pokeData} {selectedForm} />
        </div>
        <div class=" lg:w-1/2 lg:pt-4">
          <Abilities {pokeData} {selectedForm} />

          <Stats {pokeData} {selectedForm} />

          <WeakRes {pokeData} {selectedForm} />
        </div>
      </div>
    {:else}
      <Landing {message} />
    {/if}
  </section>
</div>
