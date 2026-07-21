// ===============================
// Daim's Gallery Script
// ===============================

// -------------------------------
// Page Styling
// -------------------------------
document.body.style.cssText = `
    margin:0;
    font-family:'Segoe UI',sans-serif;
    background:#f7f7f7;
    color:#222;
`;

// Header
const header = document.querySelector("header");
if (header) {
    header.style.cssText = `
        background:#1e88e5;
        padding:30px 10px;
        text-align:center;
        box-shadow:0 3px 10px rgba(0,0,0,.15);
    `;
}

const title = document.querySelector("h1");
if (title) {
    title.style.cssText = `
        color:white;
        margin:0;
        font-size:2.5rem;
    `;
}

// Footer
const footer = document.querySelector("footer");
if (footer) {
    footer.style.cssText = `
        text-align:center;
        padding:20px;
        background:#eee;
        color:#666;
        margin-top:30px;
    `;
}

// Gallery
const gallery = document.getElementById("gallery");

gallery.style.cssText = `
    display:grid;
    grid-template-columns:repeat(auto-fill,minmax(300px,1fr));
    gap:25px;
    padding:40px;
    box-sizing:border-box;
`;

// --------------------------------------------------
// Change this if using GitHub Pages
// --------------------------------------------------
// const basePath = "https://baseerpiracha.github.io/daimbp/images/";
const basePath = "images/";

// Images
const images = [

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

// Randomize order
images.sort(() => Math.random() - 0.5);

// ===============================
// Lightbox
// ===============================

const lightbox = document.createElement("div");

lightbox.style.cssText = `
position:fixed;
left:0;
top:0;
width:100%;
height:100%;
background:rgba(0,0,0,.92);
display:none;
justify-content:center;
align-items:center;
z-index:9999;
opacity:0;
transition:opacity .3s;
padding:30px;
box-sizing:border-box;
`;

const lightboxImg = document.createElement("img");

lightboxImg.style.cssText = `
max-width:95%;
max-height:95%;
border-radius:10px;
box-shadow:0 0 35px rgba(255,255,255,.25);
transform:scale(.9);
transition:.3s;
`;

const closeBtn = document.createElement("span");

closeBtn.innerHTML = "&times;";

closeBtn.style.cssText = `
position:absolute;
top:15px;
right:30px;
font-size:55px;
color:white;
cursor:pointer;
font-weight:bold;
user-select:none;
`;

lightbox.appendChild(closeBtn);
lightbox.appendChild(lightboxImg);
document.body.appendChild(lightbox);

// Open Lightbox
function openLightbox(src){

    lightboxImg.src = src;

    lightbox.style.display = "flex";

    requestAnimationFrame(()=>{
        lightbox.style.opacity = "1";
        lightboxImg.style.transform = "scale(1)";
    });

}

// Close Lightbox
function closeLightbox(){

    lightbox.style.opacity = "0";
    lightboxImg.style.transform = "scale(.9)";

    setTimeout(()=>{
        lightbox.style.display="none";
    },250);

}

closeBtn.onclick = closeLightbox;

lightbox.onclick = closeLightbox;

lightboxImg.onclick = function(e){
    e.stopPropagation();
};

document.addEventListener("keydown",function(e){

    if(e.key==="Escape")
        closeLightbox();

});

// ===============================
// Create Gallery
// ===============================

images.forEach(file=>{

    const card=document.createElement("div");

    card.style.cssText=`
        background:white;
        overflow:hidden;
        border-radius:14px;
        box-shadow:0 8px 20px rgba(0,0,0,.08);
        transition:.3s;
        cursor:pointer;
    `;

    card.onmouseenter=()=>{
        card.style.transform="translateY(-8px)";
        card.style.boxShadow="0 18px 35px rgba(0,0,0,.18)";
    };

    card.onmouseleave=()=>{
        card.style.transform="translateY(0)";
        card.style.boxShadow="0 8px 20px rgba(0,0,0,.08)";
    };

    const img=document.createElement("img");

    img.src=basePath+file;

    img.alt=file;

    img.loading="lazy";

    img.style.cssText=`
        width:100%;
        height:450px;
        object-fit:cover;
        display:block;
        transition:transform .35s;
    `;

    img.onmouseenter=()=>{
        img.style.transform="scale(1.05)";
    };

    img.onmouseleave=()=>{
        img.style.transform="scale(1)";
    };

    img.onclick=()=>{
        openLightbox(img.src);
    };

    card.appendChild(img);

    gallery.appendChild(card);

});
