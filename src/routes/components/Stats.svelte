<script>
    export let pokeData;

    //console.log(pokeData)
</script>


<div class="w-[100%]">

    <h3 class=" pl-4">Base Stats:</h3>

    <div class="flex text-center font-semibold px-4">
        <div class=" p-1 hp text-gray-950 flex-auto ">
            <p>HP</p>
            <p>{pokeData[0].stats[0].base_stat}</p>
        </div>
    
        <div class=" p-1 atk text-gray-950 flex-auto ">
            <p>Atk</p>
            <p>{pokeData[0].stats[1].base_stat}</p>
        </div>
    
        <div class=" p-1 def text-gray-950 flex-auto ">
            <p>Def</p>
            <p>{pokeData[0].stats[2].base_stat}</p>
        </div>
    
        <div class=" p-1 spa text-gray-950 flex-auto ">
            <p>SpA</p>
            <p>{pokeData[0].stats[3].base_stat}</p>
        </div>
    
        <div class=" p-1 spd text-gray-950 flex-auto ">
            <p>SpD</p>
            <p>{pokeData[0].stats[4].base_stat}</p>
        </div>
    
        <div class=" p-1 spe text-gray-950 flex-auto ">
            <p>Spe</p>
            <p>{pokeData[0].stats[5].base_stat}</p>
        </div>
    </div>
    
</div>