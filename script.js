function openModal() {
  var modal = document.getElementById('loginModal');
  modal.style.display = 'block';
}

function closeModal() {
  var modal = document.getElementById('loginModal');
  modal.style.display = 'none';
}

// Закрийте модальне вікно, якщо користувач клікнув за межами модального вікна
window.onclick = function(event) {
  var modal = document.getElementById('loginModal');
  if (event.target === modal) {
    modal.style.display = 'none';
  }
}
function scrollToTop() {
  var scrollDuration = 300; // тривалість анімації в мілісекундах
  var scrollStep = -window.scrollY / (scrollDuration / 15);
  var scrollInterval = setInterval(function() {
    if (window.scrollY !== 0) {
      window.scrollBy(0, scrollStep);
    } else {
      clearInterval(scrollInterval);
    }
  }, 15);
}

// Показати/приховати кнопку "Вгору" при прокручуванні сторінки
window.onscroll = function() {
  var scrollButton = document.getElementById("scroll-to-top");
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    scrollButton.parentElement.classList.add("show");
  } else {
    scrollButton.parentElement.classList.remove("show");
  }
};


// script.js

document.addEventListener('DOMContentLoaded', function () {
    const body = document.body;
    const toggleButton = document.getElementById('dark-mode-toggle');

    // Check for user's preference in local storage
    const darkModeEnabled = localStorage.getItem('darkModeEnabled') === 'true';
    setTheme(darkModeEnabled);

    // Toggle dark mode on button click
    toggleButton.addEventListener('click', function () {
        const newDarkMode = !body.classList.contains('dark-mode');
        setTheme(newDarkMode);
        localStorage.setItem('darkModeEnabled', newDarkMode);
    });

    // Function to set the theme based on the darkMode parameter
    function setTheme(darkMode) {
        body.classList.toggle('dark-mode', darkMode);
    }
});


