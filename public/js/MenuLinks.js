const icons = document.querySelectorAll(".linkMenu");
const sessoes = document.querySelectorAll(".sessao");
const boll = document.getElementById('boll')
function SelectPath(icon, 
  color) {
  if (!icon || !color) return;
  let paths = icon.children;
  for (let index = 0; index < paths.length; index++) {
    paths[index].setAttribute("stroke", color);
  }
  
}

function ScrollLinks() {
  let select;
  boll.style = `left:${icons[0].getBoundingClientRect().left-238}px`
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
        var icon = icons[index]
        SelectPath(select, "#ACACAC");
        SelectPath(icon, "black");
        boll.style = `left:${icon.getBoundingClientRect().left-238}px`
        select = icon;
      }
    }
  });
}
ScrollLinks();
