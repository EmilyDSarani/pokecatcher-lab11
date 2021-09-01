import { render } from './render.js';
import { getRandomPokemon } from '../main-data/poke-randomizer-utils.js';
import { catchPoke } from '../main-data/local-storage-utils.js';

const pokemon = getRandomPokemon();

for (let poke of pokemon){
    render(poke);
}

const buttonEl = document.querySelector('#catchpoke');

buttonEl.addEventListener('click', () => {
    const selectedPoke = document.querySelector('input:checked');
    
    if (selectedPoke){



        catchPoke(selectedPoke.value);

        const pokecatch = document.getElementById ('poke-catch');

        pokecatch.textContent = '';

        const pokemon = getRandomPokemon();

        for (let poke of pokemon){
            render(poke);
        }
    } else {
        alert('You forgot to aim!');
    }

});