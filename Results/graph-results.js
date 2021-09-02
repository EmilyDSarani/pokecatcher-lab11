
import { getPokedex } from '../main-data/local-storage-utils.js';

const ctx = document.getElementById('myChart');

const pokedex = getPokedex();

const arrayOfCaptures = pokedex.map(({ captured }) => captured);

const arrayOfEncounters = pokedex.map(({ encountered }) => encountered);

const arrayOfNames = pokedex.map(({ item }) => item);


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
                    'yellow',
                    'pink',
                    
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