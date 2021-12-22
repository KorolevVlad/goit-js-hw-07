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

function onClickImg(e) {
  e.preventDefault();
  const imgOnClick = e.target.classList.contains("gallery__image");

  if (!imgOnClick) {
    return;
  }

  //   console.log(data - source);
  instance.show();
  console.log("click");
}

// import * as basicLightbox from "basiclightbox";
// let fff = galleryItems.map(({ original }) => {
//   return original;
// });
// console.log("fff", fff);
// const defaultImg = document.querySelectorAll(".gallery__image");
// console.log("defaultImg", defaultImg);
const instance = basicLightbox.create(
  // console.log("fff", fff)
  createImageOfGalleryEl(galleryItems)
  //   `
  //     // <img src='' >
  //     // width="800" height="600">
  // `
);

const ggggg = document.querySelector("dataset");
console.log("ggggg", ggggg);

// instance.show();
// const paletteContainer = document.querySelector('.js-palette');
// const cardsMarkup = createColorCardsMarkup(colors);

// paletteContainer.insertAdjacentHTML('beforeend', cardsMarkup);

// paletteContainer.addEventListener('click', onPaletteContainerClick);

// function createColorCardsMarkup(colors) {
//   return colors
//     .map(({ hex, rgb }) => {
//       return `
//     <div class="color-card">
//      <div><div><div> <div
//      class="color-swatch"
//      data-hex="${hex}"
//      data-rgb="${rgb}"
//      style="background-color: ${hex}"
//    ></div></div></div></div>
//       <div class="color-meta">
//         <p>HEX: ${hex}</p>
//         <p>RGB: ${rgb}</p>
//       </div>
//     </div>
//     `;
//     })
//     .join('');
// }

// <div class="gallery__item">
//   <a class="gallery__link" href="large-image.jpg">
//     <img
//       class="gallery__image"
//       src="small-image.jpg"
//       data-source="large-image.jpg"
//       alt="Image description"
//     />
//   </a>
// </div>
