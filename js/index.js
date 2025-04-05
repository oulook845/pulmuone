import { getScrollData } from "./commonScroll.js";


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
    }
     else if (currentScrollY > con3Top && currentScrollY <= con4Top) {
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
function con3Slide(){
  // 변화된 요소를 업데이트 해야 해서 함수 내부에 선언
  const con3SlideElem = con3Elem.querySelector(".slide_list");
  const con3SlideLists = con3SlideElem.querySelectorAll("li");
  const firstList = con3SlideLists[0].cloneNode(true);
  con3SlideElem.appendChild(firstList)
  con3SlideElem.style.transition = "1s";
  con3SlideElem.style.marginLeft = "-542px";
  setTimeout(function(){
    con3SlideLists[0].remove();
    con3SlideElem.style.transition = "0s";
    con3SlideElem.style.marginLeft = "0px";
  },1000);
}
setInterval(con3Slide, 4000); //첫번째 슬라이드를 복사후 없애고 전체 슬라이드 마지막에 만들기


