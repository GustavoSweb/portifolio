const icons = document.querySelectorAll(".linkMenu");
const sessoes = document.querySelectorAll(".sessao");
const boll = document.getElementById("boll");
const header = document.getElementsByTagName("header");
var formerScrollPosition = 0;

document.addEventListener("scroll", () => {
  if (window.innerWidth > 900) {
    if (formerScrollPosition > window.scrollY) {
      header[0].style = "top: 0px";
    } else {
      header[0].style = "top: -73px";
    }
    formerScrollPosition = window.scrollY;
  }
});

function SelectPath(icon, color) {
  if (!icon || !color) return;
  let paths = icon.children;
  for (let index = 0; index < paths.length; index++) {
    paths[index].setAttribute("stroke", color);
  }
}

function ScrollLinks() {
  let select;
  document.addEventListener("scroll", () => {
    const pageY = window.scrollY;

    for (let index = 0; index < sessoes.length; index++) {
      var disSessao = sessoes[index].offsetTop;
      var faixaInferior = disSessao - 100;
      var faixaSuperior = disSessao + 300;

      if (
        (pageY >= faixaInferior && pageY <= faixaSuperior) ||
        pageY + 100 > sessoes[sessoes.length - 1].offsetTop
      ) {
        var icon = icons[index];
        SelectPath(select, "#ACACAC");
        SelectPath(icon, "black");
        select = icon;
      }
    }
  });
}
ScrollLinks();
console.log("teste");
