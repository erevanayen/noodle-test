const menuEl = document.getElementById("menu");
const btnShow = document.getElementById("button-show");

function toggleMenu(state) {
  if (state) {
    menuEl.classList.remove("menu-hidden");
    btnShow.classList.add("button-hidden");
  } else {
    menuEl.classList.add("menu-hidden");
    btnShow.classList.remove("button-hidden");
  }
}
