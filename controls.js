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

urlToClip = async () => {
  const url = window.location.href;
  try {
    await navigator.clipboard.writeText(url);
    console.log("Url copied to clipboard");
  } catch (err) {
    console.error("Failed to copy: ", err);
  }
};
