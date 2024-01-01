const cardIcon = document.querySelectorAll(".cardIcon");
var tagLeft = cardIcon[13].offsetLeft;
var tagTop = cardIcon[13].offsetTop;
var lastTag = { tag: false, top: false, left: false };

function calcTopLeft(defultBase, value) {
  return {
    top: (tagTop - value.offsetTop).toString(),
    left: (tagLeft - value.offsetLeft).toString(),
  };
}

function defaultCardIcon() {
  var { top, left } = calcTopLeft({ left: tagLeft, top: tagLeft }, cardIcon[2]);

  cardIcon[2].classList.add(
    `top-[calc(-370px+${top}px)]`,
    `right-[calc(-188px-${left}px)]`,
    "w-[80px]",
    "h-[80px]"
  );
  lastTag = {tag:cardIcon[2], top, left}
}

function ClickIconCard() {


  cardIcon.forEach((tag) => {
    tag.addEventListener("click", () => {
      if (lastTag.tag == tag) return;
      var { top, left } = calcTopLeft({ left: tagLeft, top: tagLeft }, tag);
      tag.classList.add(
        `top-[calc(-370px+${top}px)]`,
        `right-[calc(-188px-${left}px)]`,
        "w-[80px]",
        "h-[80px]"
      );
      if (lastTag.tag) {
        lastTag.tag.classList.remove(
          `top-[calc(-370px+${lastTag.top}px)]`,
          `right-[calc(-188px-${lastTag.left}px)]`,
          "w-[80px]",
          "h-[80px]"
        );
      }
      lastTag = { tag: tag, top: top, left: left };
    });
  });
}
defaultCardIcon();
ClickIconCard();
