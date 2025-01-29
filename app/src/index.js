// Import de la feuille de style
import './assets/css/style.css';
// Import d'une image
import imgEncore from './assets/img/Encore-backstage.webp'
// Import des données json
import data from './data.json'

console.log('HELLO WORLD')
const imgTag = new Image();
imgTag.alt = 'Encore';
imgTag.src = imgEncore;

document.body.append(imgTag);

// Utilisation des données
console.log(data);

const list = document.createElement('ul');

for( let product of data.products ){
    const li = document.createElement('li');
    let content = `<h2>${product.name}</h2>`;
    content += `<p>Prix: ${product.prix}€</p>`;
    li.innerHTML = content;
    list.append(li);
}

document.body.append( list );