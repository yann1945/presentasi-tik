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
 * active header when window scroll down to 100px
 */

const backToTopBtn = document.querySelector("[data-back-to-top-btn]");

const activeElemOnScroll = function () {
    console.log("Scrolling..."); // Menampilkan pesan saat menggulir
    if (window.scrollY > 100) {
        console.log("Adding active class to backToTopBtn"); // Pesan saat menambahkan kelas
        backToTopBtn.classList.add("active"); // Tambahkan kelas aktif
    } else {
        console.log("Removing active class from backToTopBtn"); // Pesan saat menghapus kelas
        backToTopBtn.classList.remove("active"); // Hapus kelas aktif
    }
}

addEventOnElem(window, "scroll", activeElemOnScroll);

// Tambahkan event listener untuk scroll ke atas saat tombol diklik
backToTopBtn.addEventListener("click", function (e) {
    e.preventDefault(); // Mencegah perilaku default
    window.scrollTo({
        top: 0,
        behavior: 'smooth' // Efek scroll halus
    });
});

addEventOnElem(window, "scroll", activeElemOnScroll);
