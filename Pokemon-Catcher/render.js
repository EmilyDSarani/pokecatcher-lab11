import { getRandomPokemon } from '../main-data/poke-randomizer-utils.js';
import { encounterPoke } from '../main-data/local-storage-utils.js';

export function render(pokemon){
    const container = document.createElement ('div');
    const pokecatch = document.getElementById ('poke-catch');
    const label = document.createElement('label');
    const img = document.createElement('img');
    const radioInput = document.createElement('input');
    const button = document.querySelector('#catchpoke');
    

    radioInput.setAttribute('type', 'radio');
    radioInput.setAttribute('name', 'pokemon');
    label.classList.add('pokemon');
    
  

    img.classList.add('pokemon-url_image');
    container.classList.add('poke-catch');

   
    img.src = pokemon.url_image;
    
    container.append(
        label,
        img,
        radioInput
    );
    pokecatch.append(
        container
    );

    button.addEventListener('click', () => {
        getRandomPokemon();
        encounterPoke(pokemon.id);
    });
}