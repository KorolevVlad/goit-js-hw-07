import { galleryItems } from "./gallery-items.js";
// Change code below this line

const galleryImageAll = document.querySelector(".gallery");

const imageOfGallery = createImageOfGalleryEl(galleryItems);

galleryImageAll.insertAdjacentHTML("beforeend", imageOfGallery);

galleryImageAll.addEventListener("click", onClickImg);

function createImageOfGalleryEl(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `<div class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div>
`;
    })
    .join("");
}

function onClickImg(e) {
  window.addEventListener("keydown", closeEsc);
  e.preventDefault();
  const imgOnClick = e.target.classList.contains("gallery__image");

  if (!imgOnClick) {
    return;
  }

  const modalImage = e.target.dataset.source;
  const instance = basicLightbox.create(
    `<img src ="${modalImage}" width="800" heigth="600">`
  );

  instance.show();

  function closeEsc(e) {
    if (e.code === "Escape") {
      instance.close();
    }
  }
}
