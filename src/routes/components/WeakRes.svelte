<script>
  export let pokeData;
  export let selectedForm;

  let resWeak = {
    Bug: 1,
    Dark: 1,
    Dragon: 1,
    Electric: 1,
    Fairy: 1,
    Fighting: 1,
    Fire: 1,
    Flying: 1,
    Ghost: 1,
    Grass: 1,
    Ground: 1,
    Ice: 1,
    Normal: 1,
    Poison: 1,
    Psychic: 1,
    Rock: 1,
    Steel: 1,
    Water: 1,
  };

  let weakToData = [];
  let resistantToData = [];
  let immuneToData = [];
  let normalDamageData = [];

  $: {
    for (let key in resWeak) {
      resWeak[key] = 1;
    }

    for (let i = 0; i < pokeData[selectedForm].basic.types.length; i++) {
      if (pokeData[selectedForm].basic.types[i].type.name == "bug") {
        // resistances
        resWeak.Grass = resWeak.Grass * 0.5;
        resWeak.Fighting = resWeak.Fighting * 0.5;
        resWeak.Ground = resWeak.Ground * 0.5;

        // weaknesses
        resWeak.Fire = resWeak.Fire * 2;
        resWeak.Flying = resWeak.Flying * 2;
        resWeak.Rock = resWeak.Rock * 2;
      }

      if (pokeData[selectedForm].basic.types[i].type.name == "dark") {
        resWeak.Psychic = resWeak.Psychic * 0;
        resWeak.Ghost = resWeak.Ghost * 0.5;
        resWeak.Dark = resWeak.Dark * 0.5;

        resWeak.Fighting = resWeak.Fighting * 2;
        resWeak.Bug = resWeak.Bug * 2;
        resWeak.Fairy = resWeak.Fairy * 2;
      }

      if (pokeData[selectedForm].basic.types[i].type.name == "dragon") {
        resWeak.Fire = resWeak.Fire * 0.5;
        resWeak.Water = resWeak.Water * 0.5;
        resWeak.Grass = resWeak.Grass * 0.5;
        resWeak.Electric = resWeak.Electric * 0.5;

        resWeak.Ice = resWeak.Ice * 2;
        resWeak.Dragon = resWeak.Dragon * 2;
        resWeak.Fairy = resWeak.Fairy * 2;
      }

      if (pokeData[selectedForm].basic.types[i].type.name == "electric") {
        resWeak.Electric = resWeak.Electric * 0.5;
        resWeak.Flying = resWeak.Flying * 0.5;
        resWeak.Steel = resWeak.Steel * 0.5;

        resWeak.Ground = resWeak.Ground * 2;
      }

      if (pokeData[selectedForm].basic.types[i].type.name == "fairy") {
        resWeak.Fighting = resWeak.Fighting * 0.5;
        resWeak.Bug = resWeak.Bug * 0.5;
        resWeak.Dragon = resWeak.Dragon * 0;
        resWeak.Dark = resWeak.Dark * 0.5;

        resWeak.Poison = resWeak.Poison * 2;
        resWeak.Steel = resWeak.Steel * 2;
      }

      if (pokeData[selectedForm].basic.types[i].type.name == "fighting") {
        resWeak.Bug = resWeak.Bug * 0.5;
        resWeak.Rock = resWeak.Rock * 0.5;
        resWeak.Dark = resWeak.Dark * 0.5;

        resWeak.Flying = resWeak.Flying * 2;
        resWeak.Psychic = resWeak.Psychic * 2;
        resWeak.Fairy = resWeak.Fairy * 2;
      }

      if (pokeData[selectedForm].basic.types[i].type.name == "fire") {
        resWeak.Fire = resWeak.Fire * 0.5;
        resWeak.Grass = resWeak.Grass * 0.5;
        resWeak.Ice = resWeak.Ice * 0.5;
        resWeak.Bug = resWeak.Bug * 0.5;
        resWeak.Steel = resWeak.Steel * 0.5;
        resWeak.Fairy = resWeak.Fairy * 0.5;

        resWeak.Water = resWeak.Water * 2;
        resWeak.Ground = resWeak.Ground * 2;
        resWeak.Rock = resWeak.Rock * 2;
      }

      if (pokeData[selectedForm].basic.types[i].type.name == "flying") {
        resWeak.Grass = resWeak.Grass * 0.5;
        resWeak.Fighting = resWeak.Fighting * 0.5;
        resWeak.Ground = resWeak.Ground * 0;
        resWeak.Bug = resWeak.Bug * 0.5;

        resWeak.Electric = resWeak.Electric * 2;
        resWeak.Ice = resWeak.Ice * 2;
        resWeak.Rock = resWeak.Rock * 2;
      }

      if (pokeData[selectedForm].basic.types[i].type.name == "ghost") {
        resWeak.Normal = resWeak.Normal * 0;
        resWeak.Fighting = resWeak.Fighting * 0;
        resWeak.Poison = resWeak.Poison * 0.5;
        resWeak.Bug = resWeak.Bug * 0.5;

        resWeak.Ghost = resWeak.Ghost * 2;
        resWeak.Dark = resWeak.Dark * 2;
      }

      if (pokeData[selectedForm].basic.types[i].type.name == "grass") {
        resWeak.Water = resWeak.Water * 0.5;
        resWeak.Electric = resWeak.Electric * 0.5;
        resWeak.Grass = resWeak.Grass * 0.5;
        resWeak.Ground = resWeak.Ground * 0.5;

        resWeak.Fire = resWeak.Fire * 2;
        resWeak.Ice = resWeak.Ice * 2;
        resWeak.Poison = resWeak.Poison * 2;
        resWeak.Flying = resWeak.Flying * 2;
        resWeak.Bug = resWeak.Bug * 2;
      }

      if (pokeData[selectedForm].basic.types[i].type.name == "ground") {
        resWeak.Poison = resWeak.Poison * 0.5;
        resWeak.Rock = resWeak.Rock * 0.5;
        resWeak.Electric = resWeak.Electric * 0;

        resWeak.Water = resWeak.Water * 2;
        resWeak.Grass = resWeak.Grass * 2;
        resWeak.Ice = resWeak.Ice * 2;
      }

      if (pokeData[selectedForm].basic.types[i].type.name == "ice") {
        resWeak.Ice = resWeak.Ice * 0.5;

        resWeak.Fire = resWeak.Fire * 2;
        resWeak.Fighting = resWeak.Fighting * 2;
        resWeak.Rock = resWeak.Rock * 2;
        resWeak.Steel = resWeak.Steel * 2;
      }

      if (pokeData[selectedForm].basic.types[i].type.name == "normal") {
        resWeak.Ghost = resWeak.Ghost * 0;

        resWeak.Fighting = resWeak.Fighting * 2;
      }

      if (pokeData[selectedForm].basic.types[i].type.name == "poison") {
        resWeak.Grass = resWeak.Grass * 0.5;
        resWeak.Fighting = resWeak.Fighting * 0.5;
        resWeak.Poison = resWeak.Poison * 0.5;
        resWeak.Bug = resWeak.Bug * 0.5;
        resWeak.Fairy = resWeak.Fairy * 0.5;

        resWeak.Ground = resWeak.Ground * 2;
        resWeak.Psychic = resWeak.Psychic * 2;
      }

      if (pokeData[selectedForm].basic.types[i].type.name == "psychic") {
        resWeak.Fighting = resWeak.Fighting * 0.5;
        resWeak.Psychic = resWeak.Psychic * 0.5;

        resWeak.Bug = resWeak.Bug * 2;
        resWeak.Ghost = resWeak.Ghost * 2;
        resWeak.Dark = resWeak.Dark * 2;
      }

      if (pokeData[selectedForm].basic.types[i].type.name == "rock") {
        resWeak.Normal = resWeak.Normal * 0.5;
        resWeak.Fire = resWeak.Fire * 0.5;
        resWeak.Poison = resWeak.Poison * 0.5;
        resWeak.Flying = resWeak.Flying * 0.5;

        resWeak.Water = resWeak.Water * 2;
        resWeak.Grass = resWeak.Grass * 2;
        resWeak.Fighting = resWeak.Fighting * 2;
        resWeak.Ground = resWeak.Ground * 2;
        resWeak.Steel = resWeak.Steel * 2;
      }

      if (pokeData[selectedForm].basic.types[i].type.name == "steel") {
        resWeak.Normal = resWeak.Normal * 0.5;
        resWeak.Grass = resWeak.Grass * 0.5;
        resWeak.Ice = resWeak.Ice * 0.5;
        resWeak.Poison = resWeak.Poison * 0;
        resWeak.Flying = resWeak.Flying * 0.5;
        resWeak.Psychic = resWeak.Psychic * 0.5;
        resWeak.Bug = resWeak.Bug * 0.5;
        resWeak.Rock = resWeak.Rock * 0.5;
        resWeak.Dragon = resWeak.Dragon * 0.5;
        resWeak.Steel = resWeak.Steel * 0.5;
        resWeak.Fairy = resWeak.Fairy * 0.5;

        resWeak.Fire = resWeak.Fire * 2;
        resWeak.Fighting = resWeak.Fighting * 2;
        resWeak.Ground = resWeak.Ground * 2;
      }

      if (pokeData[selectedForm].basic.types[i].type.name == "water") {
        resWeak.Fire = resWeak.Fire * 0.5;
        resWeak.Water = resWeak.Water * 0.5;
        resWeak.Ice = resWeak.Ice * 0.5;
        resWeak.Steel = resWeak.Steel * 0.5;

        resWeak.Electric = resWeak.Electric * 2;
        resWeak.Grass = resWeak.Grass * 2;
      }
    }

    const { weakTo, resistantTo, immuneTo, normalDamage } = categorizeTypes();

    weakToData = weakTo;
    resistantToData = resistantTo;
    immuneToData = immuneTo;
    normalDamageData = normalDamage;
  }

  function categorizeTypes() {
    const weakTo = [];
    const resistantTo = [];
    const immuneTo = [];
    const normalDamage = [];

    for (const type in resWeak) {
      if (resWeak[type] === 2 || resWeak[type] === 4) {
        weakTo.push({ type, value: `${type} ${resWeak[type]}x` });
      } else if (resWeak[type] === 0.5 || resWeak[type] === 0.25) {
        resistantTo.push({ type, value: `${type} ${resWeak[type]}x` });
      } else if (resWeak[type] === 0) {
        immuneTo.push({ type, value: type });
      } else {
        normalDamage.push({ type, value: type });
      }
    }

    return {
      weakTo,
      resistantTo,
      immuneTo,
      normalDamage,
    };
  }

  function getBackgroundColor(type) {
    switch (type) {
      case "Bug":
        return "background-color: #A6B91A;";
      case "Dark":
        return "background-color: #705746;";
      case "Dragon":
        return "background-color: #6F35FC;";
      case "Electric":
        return "background-color: #F7D02C;";
      case "Fairy":
        return "background-color: #D685AD;";
      case "Fighting":
        return "background-color: #C22E28;";
      case "Fire":
        return "background-color: #EE8130;";
      case "Flying":
        return "background-color: #A98FF3;";
      case "Ghost":
        return "background-color: #735797;";
      case "Grass":
        return "background-color: #7AC74C;";
      case "Ground":
        return "background-color: #E2BF65;";
      case "Ice":
        return "background-color: #96D9D6;";
      case "Normal":
        return "background-color: #A8A77A;";
      case "Poison":
        return "background-color: #A33EA1;";
      case "Psychic":
        return "background-color: #F95587;";
      case "Rock":
        return "background-color: #B6A136;";
      case "Steel":
        return "background-color: #B7B7CE;";
      case "Water":
        return "background-color: #6390F0;";
    }
  }

  //console.log(resWeak)
</script>

<div class=" pt-2">
  <div>
    <h3 class=" pl-4">Weak to:</h3>
    <div class="flex flex-wrap justify-center text-center">
      {#each weakToData as { type, value }}
        <p style={getBackgroundColor(type)} class=" p-1 m-1 resWeakText w-28 rounded-md">{value}</p>
      {/each}
    </div>
  </div>

  <div>
    <h3 class=" pl-4">Resistant to:</h3>
    <div class="flex flex-wrap justify-center text-center">
      {#if resistantToData.length > 0}
        {#each resistantToData as { type, value }}
          <p style={getBackgroundColor(type)} class=" p-1 m-1 resWeakText w-28 rounded-md">{value}</p>
        {/each}
      {:else}
        <p class=" p-1 m-1 resWeakText w-28 rounded-md bg-stone-400">None</p>
      {/if}
    </div>
  </div>

  <div>
    <h3 class=" pl-4">Immune to:</h3>
    <div class="flex justify-center text-center">
      {#if immuneToData.length > 0}
        {#each immuneToData as { type, value }}
          <p style={getBackgroundColor(type)} class=" p-1 m-1 resWeakText w-28 rounded-md">{value}</p>
        {/each}
      {:else}
        <p class=" p-1 m-1 resWeakText w-28 rounded-md bg-stone-400">None</p>
      {/if}
    </div>
  </div>

  <div>
    <h3 class=" pl-4">Damaged normally by:</h3>
    <div class="flex flex-wrap justify-center text-center">
      {#each normalDamageData as { type, value }}
        <p style={getBackgroundColor(type)} class=" p-1 m-1 resWeakText w-28 rounded-md">{value}</p>
      {/each}
    </div>
  </div>
</div>
