import { getRandomPokemon } from '../main-data/poke-randomizer-utils.js';

export function render(pokemans){
    const container = document.createElement ('div');
    const pokecatch = document.getElementById ('poke-catch');
    const label = document.createElement('label');
    const h3 = document.createElement('h3');
    const h4 = document.createElement('h4');
    const img = document.createElement('img');
    const radioInput = document.createElement('input');
    //const button = document.querySelector('#catch');
    

    radioInput.setAttribute('type', 'radio');
    radioInput.setAttribute('name', 'pokemans');
    label.classList.add('pokemon');
    h3.classList.add('pokemon-pokemon');
    h4.classList.add('pokemon-type_1');
    img.classList.add('pokemon-url_image');
    container.classList.add('poke-catch');

    h3.textContent = pokemans.pokemon;
    h4.textContent = pokemans.type_1;
    img.src = pokemans.url_image;
    
    container.append(
        label,
        h3,
        h4,
        img,
        radioInput
    );
    pokecatch.append(
        container
    )
}

 