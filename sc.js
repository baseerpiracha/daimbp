// ===============================
// Daim's Gallery Script
// ===============================

// General body styling
document.body.style.cssText = `
  margin: 0;
  font-family: 'Segoe UI', sans-serif;
  background: #f9f9f9;
  color: #222;
`;

// Header styling
const header = document.querySelector('header');
if (header) {
  header.style.cssText = `
    background: #1e88e5;
    padding: 30px 10px;
    text-align: center;
    box-shadow: 0 2px 10px rgba(0,0,0,0.1);
  `;
}

const title = document.querySelector('h1');
if (title) {
  title.style.cssText = `
    color: white;
    font-size: 2.5rem;
    margin: 0;
  `;
}

// Footer styling
const footer = document.querySelector('footer');
if (footer) {
  footer.style.cssText = `
    text-align: center;
    padding: 15px;
    font-size: 14px;
    background: #f1f1f1;
    color: #666;
  `;
}

// Gallery layout
const gallery = document.getElementById('gallery');

gallery.style.cssText = `
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 25px;
  padding: 40px;
  box-sizing: border-box;
`;

// ===================================
// Change this if using GitHub Pages:
// const basePath = "https://baseerpiracha.github.io/daimbp/images/";
// ===================================

const basePath = "images/";

// All Images
const images = [
  // Original gallery
  "photo1.jpg",
  "photo2.jpg",
  "photo3.jpg",
  "photo4.jpg",
  "photo5.jpg",
  "photo6.jpg",
  "photo7.jpg",
  "photo8.jpg",
  "photo9.jpg",
  "photo10.jpg",
  "photo11.jpg",
  "photo12.jpg",
  "photo13.jpg",
  "photo14.jpg",
  "photo15.jpg",
  "photo16.jpg",
  "photo17.jpg",
  "photo18.jpg",
  "photo19.jpg",
  "photo20.jpg",
  "photo21.jpg",
  "photo22.jpg",
  "photo23.jpg",
  "photo24.jpg",
  "photo25.jpg",
  "photo26.jpg",
  "photo27.jpg",
  "photo28.jpg",
  "photo29.jpg",
  "photo30.jpg",
  "photo31.jpg",

  // Newly added images
  "IMG_0001.JPG",
  "IMG_0003.JPG",
  "IMG_0005.JPG",
  "IMG_0043.JPG",
  "IMG_0109.JPG",
  "IMG_0118.JPG",
  "IMG_0120.JPG",
  "IMG_0125.JPG",
  "IMG_0144.JPG",
  "IMG_0249.JPG",
  "IMG_0268.JPG",
  "IMG_0270.JPG",
  "IMG_0312.JPG",
  "IMG_0411.JPG",
  "IMG_0415.JPG",
  "IMG_0474.JPG",
  "IMG_0479.JPG",
  "IMG_0508.JPG",
  "IMG_0528.JPG",
  "IMG_0529.JPG",
  "IMG_0532.JPG",
  "IMG_0537.JPG",
  "IMG_9888.JPG",
  "IMG_9920.JPG",
  "IMG_9941.JPG",
  "IMG_9967.JPG",
  "IMG_9983.JPG",
  "IMG_9994.JPG"
];

// Shuffle images so gallery order is different every refresh
images.sort(() => Math.random() - 0.5);

// Create Gallery
images.forEach(file => {

  const card = document.createElement("div");

  card.style.cssText = `
    background: white;
    border-radius: 14px;
    overflow: hidden;
    box-shadow: 0 8px 20px rgba(0,0,0,.08);
    transition: all .3s ease;
    cursor: pointer;
  `;

  card.onmouseenter = () => {
    card.style.transform = "translateY(-8px) scale(1.02)";
    card.style.boxShadow = "0 16px 35px rgba(0,0,0,.18)";
  };

  card.onmouseleave = () => {
    card.style.transform = "translateY(0)";
    card.style.boxShadow = "0 8px 20px rgba(0,0,0,.08)";
  };

  const img = document.createElement("img");

  img.src = basePath + file;
  img.alt = file;

  img.loading = "lazy";

  img.style.cssText = `
    width:100%;
    height:450px;
    object-fit:cover;
    display:block;
    transition:transform .4s ease;
  `;

  img.onmouseenter = () => {
    img.style.transform = "scale(1.05)";
  };

  img.onmouseleave = () => {
    img.style.transform = "scale(1)";
  };

  card.appendChild(img);
  gallery.appendChild(card);

});
