import { findById } from './utils.js';

//please note that local storage only knows strings. That is why we have to go through this procress to turn an array into a string the back. 
const POKEDEX = 'POKEDEX';


export function getPokedex(){
    const stringyPokedex = localStorage.getPokedex(POKEDEX);
    if (!stringyPokedex){
        return [];
    } 
    const finalPokedex = JSON.parse(stringyPokedex);
    return finalPokedex;
}



export function setPokedex(pokedex){
    const stringyDex = JSON.stringify(pokedex);
    localStorage.setItem(POKEDEX, stringyDex);

}

export function encounterPoke(someId){
    const pokedex = getPokedex();
    const seenPokemon = findById(pokedex, someId);
    if (seenPokemon){
        seenPokemon.encountered++;
    } else { 
        pokedex.push({
            someId,
            encountered: 1,
            captured: 0,
        });
    }     
    setPokedex(pokedex);

}

