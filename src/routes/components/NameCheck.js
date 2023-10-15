
export function NameCheck(poke) {
    
    poke = poke.replace(/[&\/\\#,+()$~%.'":*?<>{}]/g, '');
    poke = poke.replace(/\s+/g, '-').toLowerCase();

    return poke;

}