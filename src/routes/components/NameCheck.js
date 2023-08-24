
export function NameCheck(pokemonName) {
    
    pokemonName = pokemonName.replace(/\s+/g, '-').toLowerCase();

    return pokemonName;

}