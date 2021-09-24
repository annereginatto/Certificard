let perfil2 = document.getElementsByClassName(".perfil-foto2");

function hover(perfil2) {
  perfil2.setAttribute("src", "https://github.com/annereginatto.png");
}

function unhover(perfil2) {
  perfil2.setAttribute(
    "src",
    "https://media.discordapp.net/attachments/890918354225868823/890918645201530920/AvatarMaker.png"
  );
}

function darkMode() {
  document.body.classList.toggle("dark");
  let mode = document.querySelector(".tema-dark");
  if (mode.innerHTML == "🌙 Dark Mode") {
    mode.innerHTML = "☀️ Clear Mode";
  } else {
    mode.innerHTML = "🌙 Dark Mode";
  }
}