const slides = document.querySelectorAll('.slide');
const dots = document.querySelectorAll('.dot');
const prevBtn = document.querySelector('.page-main__slider--prev');
const nextBtn = document.querySelector('.page-main__slider--next');

let current = 0;
let timer = setInterval(nextSlide, 4000);

function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.classList.toggle('active', i === index);
        dots[i].classList.toggle('active', i === index);
    });
}

function nextSlide() {
    current = (current + 1) % slides.length;
    showSlide(current);
}

function prevSlide() {
    current = (current - 1 + slides.length) % slides.length;
    showSlide(current);
}

nextBtn.addEventListener('click', () => {
    nextSlide();
    resetTimer();
});

prevBtn.addEventListener('click', () => {
    prevSlide();
    resetTimer();
});

dots.forEach((dot, i) => {
    dot.addEventListener('click', () => {
        current = i;
        showSlide(current);
        resetTimer();
    });
});

function resetTimer() {
    clearInterval(timer);
    timer = setInterval(nextSlide, 4000);
}

// import { sanpham } from './sanpham.js';

// const wrapper = document.querySelector('.product-wrapper');
// const categories = document.querySelectorAll('.category');
// const indicator = document.querySelector('.category-indicator');

// function renderProducts(category = 'tatca') {
//   wrapper.innerHTML = '';
//   const filtered = category === 'tatca' ? sanpham : sanpham.filter(p => p.type === category);
//   const displayItems = filtered.slice(0, 6);

//   displayItems.forEach(p => {
//     const card = document.createElement('div');
//     card.classList.add('product-card');
//     card.innerHTML = `<img src="${p.img}" alt="${p.name}" width="100%"><h4>${p.name}</h4><p>${p.price}</p>`;
//     wrapper.appendChild(card);
//   });

//   if (filtered.length > 6) {
//     const moreCard = document.createElement('div');
//     moreCard.classList.add('view-more');
//     moreCard.textContent = 'Xem thêm';
//     moreCard.onclick = () => window.location.href = 'sanpham.html';
//     wrapper.appendChild(moreCard);
//   }
// }

// categories.forEach(cat => {
//   cat.onclick = () => {
//     categories.forEach(c => c.classList.remove('active'));
//     cat.classList.add('active');
//     renderProducts(cat.dataset.category);
//     indicator.style.transform = `translateX(${cat.offsetLeft}px)`;
//   };
// });

// document.querySelector('.scroll-left').onclick = () => {
//   wrapper.scrollBy({ left: -200, behavior: 'smooth' });
// };

// document.querySelector('.scroll-right').onclick = () => {
//   wrapper.scrollBy({ left: 200, behavior: 'smooth' });
// };

// renderProducts();