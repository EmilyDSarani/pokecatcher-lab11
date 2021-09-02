
import { getPokedex } from '../main-data/local-storage-utils.js';


const ctx = document.getElementById('myChart');

const pokedex = getPokedex();

let arrayOfCaptures = pokedex.map(({ captured }) => captured);

let arrayOfEncounters = pokedex.map(({ encountered }) => encountered);

let arrayOfNames = pokedex.map(({ name }) => name);

console.log(pokedex);
console.log(arrayOfNames);
console.log(arrayOfEncounters);
console.log(arrayOfCaptures);

const myChart = new Chart(ctx, { // eslint-disable-line
    type: 'bar',
    data: {
        labels: arrayOfNames,

        datasets: [
            {
                labels: 'encountered',
                data: arrayOfEncounters,
                backgroundColor: [
                    'red',
                ],
    
                borderWidth: 1
            },
            {
                labels: 'captured',
                data: arrayOfCaptures,
                backgroundColor: [
                    'blue',
                    
                ],

                borderWidth: 1
            }
        ]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});