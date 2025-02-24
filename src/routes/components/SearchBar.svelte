<script>
  import { onMount, onDestroy } from "svelte";
  import { browser } from "$app/environment";
  import { SuggestionList } from "./utils/SuggestionList.js";
  import { getPokemon } from "./utils/PokeApi.js";
  import { lightMode } from "./LightDarkSwitch.svelte";

  export let pokeData;
  export let selectedForm;
  export let loadingState;
  export let message;

  let pokemonName = "";
  let filteredSuggestions = [];
  let activeSuggestionIndex = -1; // To manage the active suggestion for keyboard navigation
  let showSuggestions = false;
  let searchArea;

  // filtering function for suggestions
  const filterSuggestions = () => {
    if (pokemonName.trim() === "") {
      filteredSuggestions = [];
      showSuggestions = false;
      return;
    }

    // Prioritize names starting with the input (case-insensitive)
    const startingMatches = SuggestionList.filter((name) => name.toLowerCase().startsWith(pokemonName.toLowerCase()));

    // Then get names containing the input, but not starting with it
    const otherMatches = SuggestionList.filter(
      (name) => name.toLowerCase().includes(pokemonName.toLowerCase()) && !name.toLowerCase().startsWith(pokemonName.toLowerCase())
    );

    // Combine both arrays and limit to 5 suggestions
    filteredSuggestions = [...startingMatches, ...otherMatches].slice(0, 8);

    activeSuggestionIndex = -1; // Reset the active suggestion
    showSuggestions = filteredSuggestions.length > 0;
  };

  // Handle up/down arrow key navigation
  const handleKeyDown = (event) => {
    if (showSuggestions) {
      if (event.key === "ArrowDown") {
        // Navigate down the suggestion list
        activeSuggestionIndex = (activeSuggestionIndex + 1) % filteredSuggestions.length;
      } else if (event.key === "ArrowUp") {
        // Navigate up the suggestion list
        activeSuggestionIndex = (activeSuggestionIndex - 1 + filteredSuggestions.length) % filteredSuggestions.length;
      } else if (event.key === "Enter") {
        // Select the active suggestion on Enter key press
        if (activeSuggestionIndex >= 0 && filteredSuggestions[activeSuggestionIndex]) {
          selectSuggestion(filteredSuggestions[activeSuggestionIndex]);
          event.preventDefault();
        }
      }
    }
  };

  // Handle suggestion selection
  const selectSuggestion = (suggestion) => {
    //console.log(suggestion);
    showSuggestions = false;
    pokemonName = suggestion;
    filteredSuggestions = [];
    fetchPokemon();
  };

  // Show suggestions on input focus
  const handleFocus = () => {
    showSuggestions = filteredSuggestions.length > 0;
  };

  // Hide suggestions on input blur, but not when navigating with keys
  const handleBlur = () => {
    setTimeout(() => {
      showSuggestions = false; // Hide the suggestion box when clicking outside
    }, 100); // Timeout to allow click events to register
  };

  // Only run this code in the browser environment
  const handleClickOutside = (event) => {
    if (browser && searchArea) {
      // Ensure searchArea is defined
      if (!searchArea.contains(event.target)) {
        showSuggestions = false;
      }
    }
  };

  // Add event listener for clicks outside (only in browser)
  if (browser) {
    onMount(() => {
      document.addEventListener("mousedown", handleClickOutside);
    });

    onDestroy(() => {
      document.removeEventListener("mousedown", handleClickOutside);
    });
  }

  // Fetch data from the API
  const fetchPokemon = async () => {
    showSuggestions = false;
    selectedForm = 0;
    if (pokemonName != "") {
      loadingState = "loading";
      try {
        pokeData = await getPokemon(pokemonName);
        loadingState = "show";
      } catch (error) {
        message = error.message;
        loadingState = "menu";
      }
    } else {
      message = "Search above for Pokémon by their name.";
      loadingState = "menu";
    }
  };
</script>

<div class=" flex w-full justify-center px-4">
  <div class=" w-full max-w-[490px] relative" bind:this={searchArea}>
    <form class="flex justify-around pt-5 w-full max-w-[490px]" on:submit|preventDefault>
      <input
        type="search"
        name="pokeData"
        bind:value={pokemonName}
        on:input={filterSuggestions}
        on:focus={handleFocus}
        on:blur={handleBlur}
        on:keydown={handleKeyDown}
        placeholder="Search for a pokemon"
        autocomplete="off"
        class=" w-[80%] border border-green-500 text-center rounded-md h-10 text-xl mr-2"
      />
      <button on:click={() => fetchPokemon()} class=" w-[19%] border border-cyan-500 rounded-md"> Search </button>
    </form>
    {#if showSuggestions}
      <ul class=" border border-gray-300 rounded-md mt-1 w-full max-w-[490px] absolute {$lightMode ? 'bg-[#cccccc]' : 'bg-[#1d232a]'} z-10">
        {#each filteredSuggestions as suggestion, index}
          <li
            class=" dark:focus:text-black dark:hover:bg-gray-200 dark:hover:text-black px-3 py-[4px] cursor-pointer {index === activeSuggestionIndex
              ? 'bg-gray-400 text-black'
              : ''}"
            on:click={() => selectSuggestion(suggestion)}
            on:keydown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                selectSuggestion(suggestion);
              }
            }}
          >
            {suggestion}
          </li>
        {/each}
      </ul>
    {/if}
  </div>
</div>
