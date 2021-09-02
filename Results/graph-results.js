
import { getPokedex } from '../main-data/local-storage-utils.js';

const ctx = document.getElementById('myChart');

const pokedex = getPokedex();

const arrayOfCaptures = pokedex.map(({ captured }) => captured);

const arrayOfEncounters = pokedex.map(({ encountered }) => encountered);


const myChart = new Chart(ctx, { // eslint-disable-line
    type: 'line',
    data: {
        labels: arrayOfEncounters,
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