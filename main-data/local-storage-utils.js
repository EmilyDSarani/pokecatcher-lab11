import { findById } from './utils.js';
import pokenames from './data.js';

//please note that local storage only knows strings. That is why we have to go through this procress to turn an array into a string the back. 
const POKEDEX = 'POKEDEX';


export function getPokedex(){
    const stringyPokedex = localStorage.getItem(POKEDEX);
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

export function encounterPoke(id){
    const pokedex = getPokedex();
    const seenPokemon = findById(pokedex, id);
    if (seenPokemon){
        // pokedex.forEach(item => {
        //     if (seenPokemon.id === item.id) item.encountered++;
        // });
        seenPokemon.encountered++;
    } else { 
        pokedex.push({
            id,
            encountered: 1,
            captured: 0,
            names: pokenames.pokemon
        });
    }     
    setPokedex(pokedex);

}

export function catchPoke(id){
    const pokedex = getPokedex();
    const caughtPokemon = findById(pokedex, id);
    // pokedex.forEach(item => {
    //     if (caughtPokemon.id === item.id) item.captured++;
    // });
    caughtPokemon.captured++;
    setPokedex(pokedex);

}