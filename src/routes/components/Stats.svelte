<script>
  export let pokeData;
  export let selectedForm;

  $: totalStat =
    pokeData[selectedForm].basic.stats[0].base_stat +
    pokeData[selectedForm].basic.stats[1].base_stat +
    pokeData[selectedForm].basic.stats[2].base_stat +
    pokeData[selectedForm].basic.stats[3].base_stat +
    pokeData[selectedForm].basic.stats[4].base_stat +
    pokeData[selectedForm].basic.stats[5].base_stat;

  //update background color based on the total stat value
  $: bgColor = getBackgroundColor(totalStat);

  function getBackgroundColor(total) {
    if (total < 200) {
      return "bg-gray-400";
    } else if (total < 300) {
      return "bg-white";
    } else if (total < 400) {
      return "bg-green-400";
    } else if (total < 500) {
      return "bg-blue-400";
    } else if (total < 600) {
      return "bg-purple-400";
    } else if (total < 680) {
      return "bg-orange-400";
    } else {
      return "bg-rainbow";
    }
  }
  //console.log(pokeData)
</script>

<div class="w-[100%]">
  <h3 class=" pl-4">Base Stats:</h3>

  <div class=" w-full flex-col justify-center">
    <div class="flex text-center font-semibold px-4">
      <div class=" p-1 hp text-gray-950 flex-auto">
        <p>HP</p>
        <p>{pokeData[selectedForm].basic.stats[0].base_stat}</p>
      </div>

      <div class=" p-1 atk text-gray-950 flex-auto">
        <p>Atk</p>
        <p>{pokeData[selectedForm].basic.stats[1].base_stat}</p>
      </div>

      <div class=" p-1 def text-gray-950 flex-auto">
        <p>Def</p>
        <p>{pokeData[selectedForm].basic.stats[2].base_stat}</p>
      </div>

      <div class=" p-1 spa text-gray-950 flex-auto">
        <p>SpA</p>
        <p>{pokeData[selectedForm].basic.stats[3].base_stat}</p>
      </div>

      <div class=" p-1 spd text-gray-950 flex-auto">
        <p>SpD</p>
        <p>{pokeData[selectedForm].basic.stats[4].base_stat}</p>
      </div>

      <div class=" p-1 spe text-gray-950 flex-auto">
        <p>Spe</p>
        <p>{pokeData[selectedForm].basic.stats[5].base_stat}</p>
      </div>
    </div>
    <div class=" w-full px-4 text-gray-950 text-center font-semibold">
      <div class="max-w-[500px] {bgColor}">
        <p>Base Stat Total</p>
        <p>
          {totalStat}
        </p>
      </div>
    </div>
  </div>
</div>
