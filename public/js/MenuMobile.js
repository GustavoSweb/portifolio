var menu = document.querySelector("#Menu");
var hamburgerMenu = document.getElementById("hamburgerMenu");
var line = document.querySelectorAll(".line");
var count = 1;
function OpenMenuMobile() {
  menu.style.display == "flex"
    ? ((menu.style.animation = "MenuMobileClose 1s forwards"),
      setTimeout(() => {
        menu.style.display = "none";
      }, 1000),
      (hamburgerMenu.style.transform = "rotate(0deg)"),
      (line[1].style.opacity = "100%"),
      (line[0].style.transform =
        "rotate(0deg) translateY(0px) translateX(0px)"),
      (line[2].style.transform =
        "rotate(0deg) translateY(0px) translateX(0px)"))
    : ((menu.style.display = "flex"),
      (menu.style.animation = "MenuMobile 1s forwards"),
      (hamburgerMenu.style.transform = "rotate(360deg)"),
      (line[1].style.opacity = "0%"),
      (line[0].style.transform =
        "rotate(45deg) translateY(9px) translateX(10px)"),
      (line[2].style.transform =
        "rotate(-45deg) translateY(-8px) translateX(8px)"));
}

window.addEventListener("resize", () => {
  if (window.innerWidth < 700) return (count = 0);
  else if (count == 0) window.location.reload();
});
console.log("teste");
