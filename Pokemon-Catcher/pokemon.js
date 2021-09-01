import { render } from './render.js';
import { getRandomPokemon } from '../main-data/poke-randomizer-utils.js';

const pokemon = getRandomPokemon();

for (let poke of pokemon){
    render(poke);
}
