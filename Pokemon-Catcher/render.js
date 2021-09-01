import { getRandomPokemon } from '../main-data/poke-randomizer-utils.js';
import { encounterPoke } from '../main-data/local-storage-utils.js';

export function render(pokemon){
    const container = document.createElement ('div');
    const pokecatch = document.getElementById ('poke-catch');
    const label = document.createElement('label');
    const img = document.createElement('img');
    const radioInput = document.createElement('input');
    const buttonEl = document.querySelector('#catchpoke');
    
    img.classList.add('pokemon-url_image');
    radioInput.setAttribute('type', 'radio');
    radioInput.setAttribute('name', 'pokemon');

    
    
    img.src = pokemon.url_image;
    label.classList.add('pokemon');
    
  
    container.classList.add('poke-catch');

    
    container.append(
        label,
        img,
        radioInput
    );
    pokecatch.append(
        container,
    );

    buttonEl.addEventListener('click', () => {
        //getRandomPokemon();
        //encounterPoke(pokemon.id);
        alert('Go pokeball!');
    });
}