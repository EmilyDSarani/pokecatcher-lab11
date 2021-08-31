import pokemon from '../main-data/data.js';
import { render } from './render.js';

const ul = document.getElementById('pokemon');

for (let poke of pokemon){
    const li = render(poke);
    ul.append(li);
}