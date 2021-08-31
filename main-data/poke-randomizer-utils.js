import pokemon from '../data.js';

function getRandomIndex() {
    return Math.floor(Math.random() * pokemon.length);
}

export function getRandomPokemon() {
    let dexter1 = getRandomIndex();
    let dexter2 = getRandomIndex();
    let dexter3 = getRandomIndex();

    while (
        dexter1 === dexter2 
        || dexter2 === dexter3 
        || dexter1 === dexter3) {
        dexter1 = getRandomIndex();
        dexter2 = getRandomIndex();
        dexter3 = getRandomIndex();
    }

    return [
        pokemon[dexter1], 
        pokemon[dexter2], 
        pokemon[dexter3]
    ];
}
