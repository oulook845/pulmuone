import { getScrollData } from "./commonScroll.js";

/* Media Query */
const bp_tablet = 958;
const bp_mobile = 596;

/* dom 요소 */
const headerElem = document.getElementById("header"),
  header_SubMenu = headerElem.querySelectorAll("li.mainMenu"),
  header_NavBg = headerElem.querySelector(".navBg"),
  visualElem = document.getElementById("visual"),
  con1Elem = document.getElementById("con1"),
  con2Elem = document.getElementById("con2"),
  con3Elem = document.getElementById("con3"),
  con4Elem = document.getElementById("con4"),
  footerElem = document.getElementById("footer"),
  topButtonElem = document.getElementById("ScrollTopBtn");

/* header 스크립트 ################## */
function headerFuntion(active) {
  if (active != true) {
    headerElem.classList.remove("active");
  } else {
    headerElem.classList.add("active");
  }
}
// header에 active 클래스가 있을 때,
header_SubMenu.forEach((SubMenu) => {
  SubMenu.addEventListener("mouseenter", function () {
    if (headerElem.classList.contains("active")) {
      header_NavBg.style.height = "90px";
    } else return;
  });
  SubMenu.addEventListener("mouseleave", function () {
    if (headerElem.classList.contains("active")) {
      header_NavBg.style.height = "0px";
    } else return;
  });
});

/* visual 스크립트 ################## */
const visual_slide = visualElem.querySelector("ul.bgSlide"),
  visual_slideList = visual_slide.querySelectorAll("li");

const visual_slideLength = visual_slideList.length - 1;
let visual_idx = 0;
let visual_intervalId;

function m_visualAni() {
  if (visual_idx < visual_slideLength) {
    visual_idx++;
  } else {
    visual_idx = 0;
  }
  visual_slideList.forEach((list) => {
    list.style.opacity = 0;
  });
  visual_slideList[visual_idx].style.opacity = 1;
}
function m_visualSlide() {
  let currentMedia = window.outerWidth;
  if (currentMedia <= bp_tablet) {
    visual_intervalId = setInterval(() => {
      m_visualAni();
    }, 4000);
  } else {
    clearInterval(visual_intervalId);
  }
}
m_visualSlide();

/* con2 스크립트 ################## */
const con2_imgList = con2Elem.querySelector(".img_area");
let con2_imgList_Height = con2_imgList.getBoundingClientRect().height;

function con2_slideHeight() {
  con2_imgList_Height = con2_imgList.getBoundingClientRect().height;
  /* sticky를 위해 #con2높이 = 전체 이미지 높이 */
  con2Elem.style.height = `${con2_imgList_Height}px`;
}
con2_slideHeight();

/* 스크롤 이벤트시 필요한 콘텐츠별 Y축 위치 */
const visualTop = visualElem.offsetTop,
  con1Top = con1Elem.offsetTop,
  con2Top = con2Elem.offsetTop,
  con3Top = con3Elem.offsetTop,
  con4Top = con4Elem.offsetTop,
  footerTop = footerElem.offsetTop;

/* 컨텐츠별 스크롤 이벤트 */
function currentScroll() {
  window.addEventListener("scroll", function () {
    // currentScrollY = Math.floor(this.scrollY);
    const { currentScrollY } = getScrollData();

    if (currentScrollY <= 0) {
      /* 페이지 맨 상단 */
      headerFuntion(false);
    } else if (currentScrollY > 0) {
      /* 페이지 상단이 아닐 때 */
      headerFuntion(true);
    }

    if (currentScrollY > con1Top && currentScrollY <= con2Top) {
      /* con1 영역 시작 */
      // console.log("con1 도착");
    } else if (currentScrollY > con2Top && currentScrollY <= con3Top) {
      /* con2 영역 시작 */
      // console.log("con2 도착");
    } else if (currentScrollY > con3Top && currentScrollY <= con4Top) {
      /* con3 영역 시작 */
      // console.log("con3 도착");
    } else if (currentScrollY > con4Top && currentScrollY <= footerTop) {
      /* con4 영역 시작 */
      // console.log("con4 도착");
    }
  });
}
currentScroll();

/* con3 슬라이드 이벤트 */
function con3Slide(idx) {
  // 변화된 요소를 업데이트 해야 해서 함수 내부에 선언
  const con3SlideElem = con3Elem.querySelector(".slide_list");
  const con3SlideLists = con3SlideElem.querySelectorAll("li");
  const firstList = con3SlideLists[idx].cloneNode(true);
  let con3SlideWidth = con3SlideLists[idx].offsetWidth;

  con3SlideElem.append(firstList);
  con3SlideElem.style.transition = "margin-left 1s";
  con3SlideElem.style.marginLeft = `-${con3SlideWidth}px`;
  setTimeout(function () {
    con3SlideLists[idx].remove();
    con3SlideElem.style.transition = "0s";
    con3SlideElem.style.marginLeft = "0px";
  }, 1000);
}
let con3_intervalId = setInterval(con3Slide(0), 4000); //첫번째 슬라이드를 복사후 없애고 전체 슬라이드 마지막에 만들기

function con3Slide_prev(idx) {
  // 변화된 요소를 업데이트 해야 해서 함수 내부에 선언
  const con3SlideElem = con3Elem.querySelector(".slide_list");
  const con3SlideLists = con3SlideElem.querySelectorAll("li");
  const con3SlideLength = con3SlideLists.length;
  const lastList = con3SlideLists[con3SlideLength - 1];
  let con3SlideWidth = con3SlideLists[0].offsetWidth;

  con3SlideElem.prepend(lastList);
  con3SlideElem.style.transition = "0s";
  con3SlideElem.style.marginLeft = `-${con3SlideWidth}px`;
  setTimeout(function () {
    // con3SlideLists[0].remove();
    con3SlideElem.style.transition = "margin-left 1s";
    con3SlideElem.style.marginLeft = "0px";
  }, 100);
}

// con3 슬라이드 버튼 이벤트
const con3_slideBtnWrap = con3Elem.querySelector(".btnWrap"),
  con3_slideBtn = con3_slideBtnWrap.querySelectorAll(".navigation");
con3_slideBtn.forEach((btn) => {
  btn.addEventListener("click", function () {
    let clickBtn = this.getAttribute("data-btn");
    console.log(clickBtn)
    clearInterval(con3_intervalId);
    if(clickBtn == "next"){
      con3Slide(0);
    }else{
      con3Slide_prev();
    }
    con3_intervalId = setInterval(con3Slide(0), 4000);
  });
});

/* 미디어 크기 변경시 이벤트 */
window.addEventListener("resize", function () {
  /* visual */
  clearInterval(visual_intervalId);
  m_visualSlide();
  /* con2 */
  con2_slideHeight();
  /* con3 */
  clearInterval(con3_intervalId);
  con3_intervalId = setInterval(con3Slide, 4000);
});
