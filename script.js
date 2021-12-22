const menuBtn = document.querySelector("#hamburger");
const nav = document.querySelector("nav");

menuBtn.addEventListener("click", () => {
  nav.classList.toggle("show");
});
