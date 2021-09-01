import { getRandomPokemon } from '../main-data/poke-randomizer-utils.js';

export function render(pokemans){
    const container = document.createElement ('div');
    const pokecatch = document.getElementById ('poke-catch');
    const label = document.createElement('label');
    const h = document.createElement('h');
    const p = document.createElement('p');
    const img = document.createElement('img');
    const radioInput = document.createElement('input');
    const button = document.querySelector('#catch');
    

    radioInput.setAttribute('type', 'radio');
    radioInput.setAttribute('name', 'pokemans');
    label.classList.add('pokemon');
    h.classList.add('pokemon-pokemon');
    p.classList.add('pokemon-type_1');
    img.classList.add('pokemon-url_image');
    container.classList.add('poke-catch');

    h.textContent = pokemans.pokemon;
    p.textContent = pokemans.type_1;
    img.src = pokemans.url_image;
    
    container.append(
        label,
        h,
        p,
        img,
        radioInput
    );
    pokecatch.append(
        container
    );
    
    button.addEventListener('click', () => {
        getRandomPokemon();
        radioInput.querySelector('input:checked');
        
    });

}