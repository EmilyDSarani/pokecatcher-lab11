
export function render(pokemans){
    const li = document.createElement('li');
    const h3 = document.createElement('h3');
    const h4 = document.createElement('h4');
    const img = document.createElement('img');



    li.classList.add('pokemon');
    h3.classList.add('pokemon-pokemon');
    h4.classList.add('pokemon-type_1');
    img.classList.add('pokemon-url_image');

    h3.textContent = pokemans.pokemon;
    h4.textContent = pokemans.type_1;
    img.src = pokemans.url_image;


    li.append(
        h3,
        h4,
        img,
    );
    return li; 
}
