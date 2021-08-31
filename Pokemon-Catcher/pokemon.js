import pokemon from '../main-data/data.js';
import { render } from './render.js';

const body = document.getElementById('pokemon');

for (let poke of pokemon){
    const label = render(poke);
    body.append(label);
}