// Glider.js initialization
document.addEventListener("DOMContentLoaded", () => {
  new Glider(document.querySelector(".say"), {
    slidesToShow: 1,
    dots: ".dots",
    arrows: {
      prev: ".slider-prev",
      next: ".slider-next",
    },
  });
});

// AOS initialization
AOS.init();

// lightGallery initialization
document.addEventListener("DOMContentLoaded", function () {
  lightGallery(document.getElementById("lightgallery"), {
    download: false,
  });
});

// Function to open a URL in a new tab
function openInNewTab(url) {
  var win = window.open(url, "_blank");
  win.focus();
}

// Mobile Navigation
const mobileNav = document.querySelector(".mobile-nav");
const menuIcon = document.querySelector(".menu-icon");
const mobileMenuItems = document.querySelectorAll(".mobile-nav .menu-items li");

menuIcon.addEventListener("click", () => {
  mobileNav.classList.toggle("active");
});

mobileMenuItems.forEach((i) => {
  i.addEventListener("click", () => {
    mobileNav.classList.remove("active");
  });
});

// Desktop Navigation
const options = {
  threshold: 0.8,
};

const addActiveClass = (entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting && entry.intersectionRatio >= 0.2) {
      let currentActive = document.querySelector(".desktop-nav a.active");

      if (currentActive) {
        currentActive.classList.remove("active");
      }
      let newActive = document.querySelector(
        `.desktop-nav a[href="#${entry.target.getAttribute("id")}"]`
      );

      newActive.classList.add("active");
    }
  });
};

const observer = new IntersectionObserver(addActiveClass, options);

const sections = document.querySelectorAll("section");

sections.forEach((section) => {
  observer.observe(section);
});

 // Tanggal lahir Muchamat Nur Cholis Ma'ruf
 const birthDate = new Date('2000-01-22');

 // Fungsi untuk menghitung umur
 function calculateAge(birthDate) {
   const today = new Date();
   let age = today.getFullYear() - birthDate.getFullYear();
   const month = today.getMonth();
   if (month < birthDate.getMonth() || (month === birthDate.getMonth() && today.getDate() < birthDate.getDate())) {
     age--;
   }
   return age;
 }

 // Menampilkan umur
 document.getElementById('age').textContent = calculateAge(birthDate);