// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

const galleryEl = document.querySelector('.gallery');

function createMarkup (array) {
 const markup = array.map(({ preview, original, description }) => {
     return `<a class="gallery__item" href="${original}">
     <img class="gallery__image" src="${preview}" alt="${description}" />
   </a>`;  
}).join("");
galleryEl.innerHTML = markup;
}
createMarkup(galleryItems);
console.log(galleryItems);
 new SimpleLightbox(".gallery a", 
 {
    captionsData: "alt", captionDelay: 250
 })

console.log(galleryItems);
