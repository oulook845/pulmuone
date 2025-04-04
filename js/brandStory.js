import { getScrollData } from "./CommonScroll.js";

/* dom 요소 */
const headerElem = document.getElementById("header"),
  /* main */
  visualElem = document.getElementById("visual"),
  scrollIcon = visualElem.querySelector(".scroll_icon"),
  con1Elem = document.getElementById("con1"),
  con1Bg = con1Elem.querySelector(".bg"),
  con2Elem = document.getElementById("con2"),
  con2Bg = con2Elem.querySelector(".bg"),
  con3Elem = document.getElementById("con3"),
  con3Bg = con3Elem.querySelector(".bg"),
  con4Elem = document.getElementById("con4"),
  con4Bg = con4Elem.querySelector(".bg"),
  con5Elem = document.getElementById("con5"),
  con5Bg = con5Elem.querySelector(".bg"),

  /* footer */
  footerElem = document.getElementById("footer");

/* 스키롤 이벤트 위치 */
const viewpointHeight = window.innerHeight;
const visualTop = visualElem.offsetTop,
  con1Top = con1Elem.offsetTop,
  con2Top = con2Elem.offsetTop,
  con3Top = con3Elem.offsetTop,
  con4Top = con4Elem.offsetTop,
  con5Top = con5Elem.offsetTop,
  footerTop = footerElem.offsetTop;

const conHeight = con1Elem.getBoundingClientRect().height,
  conPoint_01 = Math.floor(conHeight / 4),
  conPoint_02 = conPoint_01 * 2;

window.addEventListener("scroll", function () {
  const { currentScrollY } = getScrollData();
  let viewBottom = currentScrollY + viewpointHeight;
  // console.log(currentScrollY)

  if (currentScrollY >= 0 && currentScrollY < con1Top) {
    /* visual 영역 스크롤 이벤트 */
    if (currentScrollY <= 0 && currentScrollY < visualTop + conPoint_01) {
      visualScroll("txt01");
    } else if (currentScrollY >= visualTop + conPoint_01 && currentScrollY < visualTop + conPoint_02) {
      visualScroll("txt02");
    } else if (currentScrollY >= visualTop + conPoint_02 && viewBottom < con1Top) {
      visualScroll("txt03");
      scrollIcon.style.opacity = 1;
    } else if (viewBottom >= con1Top) {
      scrollIcon.style.opacity = 0;
    }
  }
   else if (currentScrollY >= con1Top && currentScrollY < con2Top) {
    /* con1 영역 스크롤 이벤트 */
    if ((currentScrollY >= con1Top && currentScrollY < con1Top + conPoint_01) || currentScrollY < con1Top) {
      con1Scroll("txt01");
      con1Bg.style.backgroundPosition = "center 0%";
    } else if (currentScrollY >= con1Top + conPoint_01 && currentScrollY < con1Top + conPoint_02) {
      con1Scroll("txt02");
      con1Bg.style.backgroundPosition = "center 30%";
    } else if (currentScrollY >= con1Top + conPoint_02 && viewBottom < con2Top) {
      con1Scroll("txt03");
      con1Bg.style.backgroundPosition = "center 45%";
    }
  }
   else if (currentScrollY >= con2Top && currentScrollY < con3Top) {
    /* con2 영역 스크롤 이벤트 */
    if ((currentScrollY >= con2Top && currentScrollY < con2Top + conPoint_01) || currentScrollY < con2Top) {
      con2Scroll("txt01");
      con2Bg.style.backgroundPosition = "center 100%";
    } else if (currentScrollY >= con2Top + conPoint_01 && currentScrollY < con2Top + conPoint_02) {
      con2Scroll("txt02");
      con2Bg.style.backgroundPosition = "center 70%";
    } else if (currentScrollY >= con2Top + conPoint_02 && viewBottom < con3Top) {
      con2Scroll("txt03");
      con2Bg.style.backgroundPosition = "center 26%";
    }
  }
   else if (currentScrollY >= con3Top && currentScrollY < con4Top) {
    /* con3 영역 스크롤 이벤트 */
    if ((currentScrollY >= con3Top && currentScrollY < con3Top + conPoint_01) || currentScrollY < con3Top) {
      con3Scroll("txt01");
      con3Bg.style.backgroundImage = "url(../images/brand/bg_brand_sec4_1.jpg)";
    }
     else if (currentScrollY >= con3Top + conPoint_01 && currentScrollY < con3Top + conPoint_02) {
      con3Scroll("txt02");
      con3Bg.style.backgroundImage = "url(../images/brand/bg_brand_sec4_2.jpg)";
    }
     else if (currentScrollY >= con3Top + conPoint_02 && viewBottom < con4Top) {
      con3Scroll("txt03");
      con3Bg.style.backgroundImage = "url(../images/brand/bg_brand_sec4_3.jpg)";
    }
  }
   else if (currentScrollY >= con4Top && currentScrollY < con5Top) {
    /* con4 영역 스크롤 이벤트 */
    if ((currentScrollY >= con4Top && currentScrollY < con4Top + conPoint_01) || currentScrollY < con4Top) {
      con4Scroll("txt01");
      con4Bg.style.backgroundSize = "209% auto";
      con4Bg.style.backgroundPosition = "28% 33%";
    }
     else if (currentScrollY >= con4Top + conPoint_01 && currentScrollY < con4Top + conPoint_02) {
      con4Scroll("txt02");
      con4Bg.style.backgroundSize = "172% auto";
      con4Bg.style.backgroundPosition = "25.5% 27%";
    }
     else if (currentScrollY >= con4Top + conPoint_02 && viewBottom < con5Top) {
      con4Scroll("txt03");
      con4Bg.style.backgroundSize = "137% auto";
      con4Bg.style.backgroundPosition = "54% 0%";
    }
  }
   else if (currentScrollY >= con5Top && currentScrollY < footerTop) {
    /* con5 영역 스크롤 이벤트 */
    if ((currentScrollY >= con5Top && currentScrollY < con5Top + conPoint_01) || currentScrollY < con5Top) {
      con5Scroll("txt01");
      con5Bg.style.backgroundSize = "135% auto";
      con5Bg.style.backgroundPosition = "55% 17%";
    }
     else if (currentScrollY >= con5Top + conPoint_01 && currentScrollY < con5Top + conPoint_02) {
      con5Scroll("txt02");
      con5Bg.style.backgroundSize = "119% auto";
      con5Bg.style.backgroundPosition = "51% 24%";
    }
     else if (currentScrollY >= con5Top + conPoint_02) {
      con5Scroll("txt03");
      con5Bg.style.backgroundSize = "100% auto";
      con5Bg.style.backgroundPosition = "50% 18%";
    }
  }
});

/* visual 스크롤 이벤트 */
function visualScroll(txtCont) {
  let txtBoxs = visualElem.querySelectorAll(".txtBox");
  let curTxt = visualElem.querySelector(`.${txtCont}`);
  txtBoxs.forEach((txtBox) => {
    txtBox.style.opacity = 0;
    txtBox.style.filter = "blur(20px)";
    txtBox.style.transform = "scale(0.8)";
  });
  curTxt.style.opacity = 1;
  curTxt.style.filter = "blur(0)";
  curTxt.style.transform = "scale(1)";
}

/* con1 스크롤 이벤트 */
function con1Scroll(txtCont) {
  let txtBoxs = con1Elem.querySelectorAll(".txtBox");
  let curTxt = con1Elem.querySelector(`.${txtCont}`);
  txtBoxs.forEach((txtBox) => {
    txtBox.style.opacity = 0;
    txtBox.style.filter = "blur(20px)";
    txtBox.style.transform = "scale(0.8)";
  });
  curTxt.style.opacity = 1;
  curTxt.style.filter = "blur(0)";
  curTxt.style.transform = "scale(1)";
}

/* con2 스크롤 이벤트 */
function con2Scroll(txtCont) {
  let txtBoxs = con2Elem.querySelectorAll(".txtBox");
  let curTxt = con2Elem.querySelector(`.${txtCont}`);
  txtBoxs.forEach((txtBox) => {
    txtBox.style.opacity = 0;
    txtBox.style.filter = "blur(20px)";
    txtBox.style.transform = "scale(0.8)";
  });
  curTxt.style.opacity = 1;
  curTxt.style.filter = "blur(0)";
  curTxt.style.transform = "scale(1)";
}

/* con3 스크롤 이벤트 */
function con3Scroll(txtCont) {
  let txtBoxs = con3Elem.querySelectorAll(".txtBox");
  let curTxt = con3Elem.querySelector(`.${txtCont}`);
  txtBoxs.forEach((txtBox) => {
    txtBox.style.opacity = 0;
    txtBox.style.filter = "blur(20px)";
    txtBox.style.transform = "scale(0.8)";
  });
  curTxt.style.opacity = 1;
  curTxt.style.filter = "blur(0)";
  curTxt.style.transform = "scale(1)";
}

/* con4 스크롤 이벤트 */
function con4Scroll(txtCont) {
  let txtBoxs = con4Elem.querySelectorAll(".txtBox");
  let curTxt = con4Elem.querySelector(`.${txtCont}`);
  txtBoxs.forEach((txtBox) => {
    txtBox.style.opacity = 0;
    txtBox.style.filter = "blur(20px)";
    txtBox.style.transform = "scale(0.8)";
  });
  curTxt.style.opacity = 1;
  curTxt.style.filter = "blur(0)";
  curTxt.style.transform = "scale(1)";
}

/* con5 스크롤 이벤트 */
function con5Scroll(txtCont) {
  let txtBoxs = con5Elem.querySelectorAll(".txtBox");
  let curTxt = con5Elem.querySelector(`.${txtCont}`);
  txtBoxs.forEach((txtBox) => {
    txtBox.style.opacity = 0;
    txtBox.style.filter = "blur(20px)";
    txtBox.style.transform = "scale(0.8)";
  });
  curTxt.style.opacity = 1;
  curTxt.style.filter = "blur(0)";
  curTxt.style.transform = "scale(1)";
}
