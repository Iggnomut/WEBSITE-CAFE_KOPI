const navEl = document.querySelector(".nav");
const hamburgerEl = document.querySelector(".navbar-hamburger");
const navHam = document.getElementById("nav-ham");

hamburgerEl.addEventListener("click", (event) => {
  event.stopPropagation();
  navEl.classList.toggle("nav-active");
  navHam.classList.toggle("active");
});

const menuItems = navEl.querySelectorAll("a");
menuItems.forEach((item) => {
  item.addEventListener("click", () => {
    navEl.classList.remove("nav-active");
    navHam.classList.remove("active");
  });
});

document.addEventListener("click", () => {
  navEl.classList.remove("nav-active");
  navHam.classList.remove("active");
});
