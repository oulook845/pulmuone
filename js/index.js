import { getScrollData } from "./commonScroll.js";

const viewpointHeight = window.innerHeight;

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
    if(headerElem.classList.contains("active")){
      header_NavBg.style.height = "90px";
    }else return
  });
  SubMenu.addEventListener("mouseleave", function () {
    if(headerElem.classList.contains("active")){
      header_NavBg.style.height = "0px";
    }else return
  });
});

/* con2 스크립트 ################## */
const con2_imgList = con2Elem.querySelector(".img_area");
const con2_imgList_Height = con2_imgList.getBoundingClientRect().height;

/* sticky를 위해 #con2높이 = 전체 이미지 높이 */
con2Elem.style.height = `${con2_imgList_Height}px`;


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
      topButtonElem.style.opacity = 0;
    } else if (currentScrollY > 0) {
      /* 페이지 상단이 아닐 때 */
      headerFuntion(true);
      topButtonElem.style.opacity = 1;
    }

    if (currentScrollY > con1Top && currentScrollY <= con2Top) {
      /* con1 영역 시작 */
      console.log("con1 도착");
    } else if (currentScrollY > con2Top && currentScrollY <= con3Top) {
      /* con2 영역 시작 */
      console.log("con2 도착");
    } else if (currentScrollY > con3Top && currentScrollY <= con4Top) {
      /* con3 영역 시작 */
      console.log("con3 도착");
    } else if (currentScrollY > con4Top && currentScrollY <= footerTop) {
      /* con4 영역 시작 */
      console.log("con4 도착");
    }

    let bottom = currentScrollY + viewpointHeight;

    if (bottom >= footerTop) {
      // alert("도착")
      topButtonElem.classList.add("topBtn");
    } else {
      topButtonElem.classList.remove("topBtn");
    }
  });
}
currentScroll();

/* top 버튼 스크립트 ################## */
topButtonElem.addEventListener("click", function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});
