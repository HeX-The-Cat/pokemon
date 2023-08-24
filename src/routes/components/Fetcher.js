
export async function Fetcher( pokemonName, pokeData) {
    

    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName.toLowerCase()}`)
    const data = await res.json()
    console.log(data)
    pokeData.push(data)

    for (let i = 0; i < (data.abilities).length; i++) {
        const resAbi = await fetch(data.abilities[i].ability.url)
        const dataAbit = await resAbi.json()

        console.log(dataAbit)
        pokeData.push(dataAbit)
    }

    console.log(pokeData)
    return pokeData
}