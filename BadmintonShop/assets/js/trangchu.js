const menuToggle = document.getElementById('menuToggle');
const dropdownMenu = document.getElementById('dropdownMenu');

menuToggle.addEventListener('click', (e) => {
    e.stopPropagation();
    dropdownMenu.classList.toggle('show');
});

/* ************************* */
const readMoreBtn = document.querySelector('.page-header-navbar__read-more');
const submenu = document.getElementById('readMoreSubmenu');
const submenuLinks = submenu.querySelectorAll('a');
const navLinks = document.querySelectorAll('.page-header-navbar__link');

// Toggle submenu với hiệu ứng trượt
readMoreBtn.addEventListener('click', (e) => {
  e.stopPropagation();

  // Ẩn tất cả các mục trong submenu trước
  submenuLinks.forEach(link => {
    link.style.display = 'none';
  });

  // Kiểm tra từng phần tử trong nav
  navLinks.forEach((navItem, index) => {
    const computed = window.getComputedStyle(navItem);
    if (computed.display === 'none') {
      const targetIndex = index - 3;
      if (submenuLinks[targetIndex]) {
        submenuLinks[targetIndex].style.display = 'block';
      }
    }
  });

  // Hiện submenu nếu có ít nhất một mục được hiển thị
  const hasVisible = Array.from(submenuLinks).some(link => link.style.display === 'block');
  if (hasVisible) {
    submenu.classList.toggle('show');
  } else {
    submenu.classList.remove('show');
  }
});

// Đóng submenu khi click ra ngoài
document.addEventListener('click', (e) => {
  if (!submenu.contains(e.target) && !readMoreBtn.contains(e.target)) {
    submenu.classList.remove('show');
  }
  if (!dropdownMenu.contains(e.target) && !menuToggle.contains(e.target)) {
    dropdownMenu.classList.remove('show');
  }
});

/* ********************** */
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