import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

const galleryImageAll = document.querySelector(".gallery");

const imageOfGallery = createImageOfGalleryEl(galleryItems);

galleryImageAll.insertAdjacentHTML("beforeend", imageOfGallery);

function createImageOfGalleryEl(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `
      
 <li> <a class="gallery__item" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      title="${description}"
    />
  </a></li>
`;
    })
    .join("");
}

let gallery = new SimpleLightbox(".gallery a");
gallery.on("show.simplelightbox", () => {
  captionsData: "title";
  captionDelay: 250;
});
