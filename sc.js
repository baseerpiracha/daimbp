// General body styling
document.body.style.cssText = `
  margin: 0;
  font-family: 'Segoe UI', sans-serif;
  background: #f9f9f9;
  color: #222;
`;

// Header styling
const header = document.querySelector('header');
header.style.cssText = `
  background: #1e88e5;
  padding: 30px 10px;
  text-align: center;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
`;

const title = document.querySelector('h1');
title.style.cssText = `
  color: white;
  font-size: 2.5rem;
  margin: 0;
`;

// Footer
const footer = document.querySelector('footer');
footer.style.cssText = `
  text-align: center;
  padding: 15px;
  font-size: 14px;
  background: #f1f1f1;
  color: #666;
`;

// Gallery layout
const gallery = document.getElementById('gallery');
gallery.style.cssText = `
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 20px;
  padding: 40px;
  box-sizing: border-box;
`;

// Image paths (replace with your actual file names in /images/)
const images = [
  'images/photo1.jpg',
  'images/photo2.jpg',
  'images/photo3.jpg',
  'images/photo4.jpg',
  'images/photo5.jpg',
  'images/photo6.jpg',
  'images/photo7.jpg',
  'images/photo8.jpg',
  'images/photo9.jpg',
  'images/photo10.jpg',
  'images/photo11.jpg',
  'images/photo12.jpg',
  'images/photo13.jpg',
  'images/photo14.jpg',
  'images/photo15.jpg',
  'images/photo16.jpg',
  'images/photo17.jpg',
  'images/photo18.jpg',
  'images/photo19.jpg',
  'images/photo20.jpg',
  'images/photo21.jpg',
  'images/photo22.jpg',
  'images/photo23.jpg',
  'images/photo24.jpg',
  'images/photo25.jpg',
  'images/photo26.jpg',
  'images/photo27.jpg',
  'images/photo28.jpg',
  'images/photo29.jpg',
  'images/photo30.jpg',
  'images/photo31.jpg',
];

// Create image cards
images.forEach(src => {
  const card = document.createElement('div');
  card.style.cssText = `
    background: white;
    border-radius: 12px;
    overflow: hidden;
    box-shadow: 0 8px 20px rgba(0,0,0,0.08);
    transition: transform 0.3s ease, box-shadow 0.3s ease;
  `;
  card.addEventListener('mouseover', () => {
    card.style.transform = 'translateY(-5px)';
    card.style.boxShadow = '0 12px 25px rgba(0,0,0,0.15)';
  });
  card.addEventListener('mouseout', () => {
    card.style.transform = 'translateY(0)';
    card.style.boxShadow = '0 8px 20px rgba(0,0,0,0.08)';
  });

  const img = document.createElement('img');
  img.src = src;
  img.alt = "Daim's Photo";
  img.style.cssText = `
    width: 100%;
    height: 450px; /* Increased height */
    object-fit: cover;
    display: block;
  `;

  card.appendChild(img);
  gallery.appendChild(card);
});
