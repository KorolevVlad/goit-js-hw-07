import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

const galleryImageAll = document.querySelector(".gallery");
console.log("galleryImageAll", galleryImageAll);

const imageOfGallery = createImageOfGalleryEl(galleryItems);

galleryImageAll.insertAdjacentHTML("beforeend", imageOfGallery);
console.log("galleryImageAll", galleryImageAll);

// const instance = basicLightbox.create(`
//     <img src="https://cdn.pixabay.com/photo/2019/05/14/16/43/himilayan-blue-poppy-4202825__340.jpg" width="800" height="600">
// `);

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
console.log(galleryItems);

function onClickImg(e) {
  e.preventDefault();
  const imgOnClick = e.target.classList.contains("gallery__image");

  if (!imgOnClick) {
    return;
  }
  instance.show();
  console.log("click");
}

const instance = basicLightbox.create(
  // galleryItems.setAttribute("src", `${ggggggggg}`)

  `
      <img src='${
        document.querySelector(".gallery__image").dataset.source
      }' width="800" height="600">
  `
);

// const find111 = document.querySelectorAll(".gallery__image");
// console.log("~ find", find111);

document.querySelectorAll(".gallery__image").forEach((element) => {
  return (instance = basicLightbox.create(
    // galleryItems.setAttribute("src", `${ggggggggg}`)

    `
      <img src='${element.dataset.source}' width="800" height="600">
  `
  ));
  // return console.log(element.dataset.source);
});
