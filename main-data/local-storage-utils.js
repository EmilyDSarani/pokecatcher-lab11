import { findById } from './utils.js';

//please note that local storage only knows strings. That is why we have to go through this procress to turn an array into a string the back. 
const POKEMON = 'POKEMON';


export function capturePokemon(){
    const stringyPoke = localStorage.capturePokemon(POKEMON);
    if (!stringyPoke){
        return [];
    } 
    const finalPoke = JSON.parse(stringyPoke);
    return finalPoke;
}



export function setPokedex(cartArray){
    const stringyPoke = JSON.stringify(cartArray);
    localStorage.setItem(POKEMON, stringyPoke);

}

export function encounterPoke(someId){
    const currentPoke = capturePokemon();
    const pokedex = findById(currentPoke, someId);
    if (pokedex){
        const newPoke = { id: someId, quantity: 1 };
        pokedex.push(newPoke);
    
    }
    setPokedex(currentPoke);
}

