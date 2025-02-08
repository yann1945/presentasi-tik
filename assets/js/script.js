'use strict';



/**
 * add event on element
 */

const addEventOnElem = function (elem, type, callback) {
  if (elem.length > 1) {
    for (let i = 0; i < elem.length; i++) {
      elem[i].addEventListener(type, callback);
    }
  } else {
    elem.addEventListener(type, callback);
  }
}



/**
 * navbar toggle
 */

const navToggler = document.querySelector("[data-nav-toggler]");
const navbar = document.querySelector("[data-navbar]");
const navbarLinks = document.querySelectorAll("[data-nav-link]");

const toggleNavbar = function () {
  navbar.classList.toggle("active");
  navToggler.classList.toggle("active");
}

addEventOnElem(navToggler, "click", toggleNavbar);


const closeNavbar = function () {
  navbar.classList.remove("active");
  navToggler.classList.remove("active");
}

addEventOnElem(navbarLinks, "click", closeNavbar);

/**
 * mouse move
 */
document.addEventListener('mousemove', function(e) {
    // Membuat elemen partikel
    const particle = document.createElement('div');
    particle.classList.add('particle');
    
    // Mengatur posisi partikel di bawah kursor
    particle.style.left = `${e.pageX}px`;
    particle.style.top = `${e.pageY}px`;
    
    // Mengatur warna partikel
    particle.style.background = `linear-gradient(135deg, #4a90e2, #8e44ad)`;
    
    // Menambahkan partikel ke body
    document.body.appendChild(particle);
    
    // Menghapus partikel setelah animasi selesai
    setTimeout(() => {
        particle.style.transform = 'scale(0)'; // Mengurangi ukuran partikel
        particle.style.opacity = '0'; // Mengurangi transparansi
    }, 10);
    
    setTimeout(() => {
        particle.remove(); // Menghapus elemen partikel dari DOM
    }, 500); // Waktu yang sama dengan durasi animasi
});


/**
 * active header when window scroll down to 100px
 */

const header = document.querySelector("[data-header]");
const backTopBtn = document.querySelector("[data-back-top-btn]");

const activeElemOnScroll = function () {
  if (window.scrollY > 100) {
    header.classList.add("active");
    backTopBtn.classList.add("active");
  } else {
    header.classList.remove("active");
    backTopBtn.classList.remove("active");
  }
}

addEventOnElem(window, "scroll", activeElemOnScroll);
