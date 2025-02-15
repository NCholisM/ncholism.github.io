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

 // Function to check if the element is in the viewport
function isInViewport(el) {
  const rect = el.getBoundingClientRect();
  return rect.top >= 0 && rect.left >= 0 && rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) && rect.right <= (window.innerWidth || document.documentElement.clientWidth);
}

// Function to animate or reset the progress bars based on scroll position
function animateProgressBars() {
  const progressBars = document.querySelectorAll('.progress');

  progressBars.forEach(progressBar => {
    if (isInViewport(progressBar)) {
      const progressValue = progressBar.getAttribute('data-progress');
      progressBar.style.width = progressValue + '%';
    } else {
      progressBar.style.width = '0%'; // Reset to 0% when not in viewport
    }
  });
}

// Listen to the scroll event to trigger progress bar animations
window.addEventListener('scroll', animateProgressBars);

// Trigger once on page load in case some progress bars are already in the viewport
window.addEventListener('load', animateProgressBars);

document.addEventListener("DOMContentLoaded", () => {
  const menuLinks = document.querySelectorAll(".menu-items li a");
  const sections = document.querySelectorAll("section");

  const activateLink = (id) => {
    menuLinks.forEach((link) => {
      link.classList.remove("active");
      if (link.dataset.section === id) {
        link.classList.add("active");
      }
    });
  };

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          activateLink(entry.target.id);
        }
      });
    },
    { threshold: 0.5 } // Section dianggap aktif jika 50% terlihat
  );

  sections.forEach((section) => {
    observer.observe(section);
  });
});

document.addEventListener('DOMContentLoaded', () => {
  const buttons = document.querySelectorAll('.show-more-btn');

  buttons.forEach(button => {
    button.addEventListener('click', () => {
      const customList = button.nextElementSibling;
      const showMoreText = button.getAttribute('data-show-more') || 'Show More';
      const showLessText = button.getAttribute('data-show-less') || 'Show Less';

      if (customList.style.display === 'none' || customList.style.display === '') {
        customList.style.display = 'block';
        button.textContent = showLessText; // Teks berubah menjadi "ahg"
      } else {
        customList.style.display = 'none';
        button.textContent = showMoreText; // Teks berubah menjadi "asd"
      }
    });
  });
});

// Loading screen akan tampil selama 2 detik (2000 ms)
document.addEventListener("DOMContentLoaded", function () {
  setTimeout(function () {
    document.body.classList.add("loaded");
  }, 3000); 
});

// Hilangkan loading screen setelah semua resource selesai dimuat
// document.addEventListener("DOMContentLoaded", function () {
//   window.addEventListener("load", function () {
//     document.body.classList.add("loaded"); 
//   });
// });
