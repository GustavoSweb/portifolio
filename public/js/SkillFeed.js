console.log("teste");
setTimeout(() => {
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
    var { top, left } = calcTopLeft(
      { left: tagLeft, top: tagLeft },
      cardIcon[2]
    );

    cardIcon[2].classList.add(
      `top-[calc(-370px+${top}px)]`,
      `right-[calc(-200px-${left}px)]`,
      "w-[80px]",
      "h-[80px]"
    );
    lastTag = { tag: cardIcon[2], top, left };
  }
  function EventClick(tag) {
    if (lastTag.tag == tag) return;
    var { top, left } = calcTopLeft({ left: tagLeft, top: tagLeft }, this);
    this.classList.add(
      `top-[calc(-370px+${top}px)]`,
      `right-[calc(-200px-${left}px)]`,
      "w-[80px]",
      "h-[80px]"
    );
    if (lastTag.tag) {
      lastTag.tag.classList.remove(
        `top-[calc(-370px+${lastTag.top}px)]`,
        `right-[calc(-200px-${lastTag.left}px)]`,
        "w-[80px]",
        "h-[80px]"
      );
    }
    lastTag = { tag: this, top: top, left: left };
  }
  function ClickIconCard() {
    cardIcon.forEach((tag) => {
      tag.addEventListener("click", EventClick);
    });
  }
  function RemoveEvents() {
    cardIcon.forEach((tag) => {
      tag.removeEventListener("click", EventClick);
    });
  }

  if (window.screen.width > 800) {
    defaultCardIcon();
    ClickIconCard();
  }
  window.addEventListener("resize", function (event) {
    if (window.screen.width >= 1392) {
      ClickIconCard();
    } else {
      RemoveEvents();
      if (lastTag.tag) {
        lastTag.tag.classList.remove(
          `top-[calc(-370px+${lastTag.top}px)]`,
          `right-[calc(-200px-${lastTag.left}px)]`,
          "w-[80px]",
          "h-[80px]"
        );
      }
    }
  });
}, 1000);
