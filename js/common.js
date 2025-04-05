import { getScrollData } from "./commonScroll.js";

const html = document.querySelector("html");

/* 링크가 없는 a태그 클릭시 동작 없음 */
let anchorElems = document.querySelectorAll("a[href='#");
anchorElems.forEach((anchorElem) => {
  anchorElem.addEventListener("click", function (e) {
    e.preventDefault();
  });
});

/* top 버튼 스크립트 ################## */
const topButtonElem = document.getElementById("ScrollTopBtn");
topButtonElem.addEventListener("click", function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

/* header 스크립트 ################## */
const headerElem = document.getElementById("header"),
  header_allMenu = document.getElementById("allMenu"),
  header_allMenu_area = headerElem.querySelector(".allMenu_area"),
  header_allMenu_closeBtn = headerElem.querySelector(".closeBtn");

header_allMenu.addEventListener("click",function(){
  header_allMenu_area.style.display = "block";
  html.style.overflow = "hidden";
})
header_allMenu_closeBtn.addEventListener("click",function(){
  header_allMenu_area.style.display = "none";
  html.style.overflow = "auto";
})

/* footer 스크립트 ################## */
const footerElem = document.getElementById("footer"),
  footerTop = footerElem.offsetTop,
  familyTitle = footerElem.querySelector(".fmTitle"),
  familyList = footerElem.querySelector(".familySite");

familyTitle.addEventListener("click", function () {
  familyList.classList.toggle("fmHidden");
});

/* dom 스크롤 이벤트 */
window.addEventListener("scroll", function () {
  const { currentScrollY } = getScrollData();
  if (currentScrollY <= 0) {
    /* 페이지 맨 상단 */
    topButtonElem.style.opacity = 0;
  } else if (currentScrollY > 0) {
    /* 페이지 상단이 아닐 때 */
    topButtonElem.style.opacity = 1;
  }
  const viewpointHeight = window.innerHeight;
  let bottom = currentScrollY + viewpointHeight;
  if (bottom >= footerTop) {
    topButtonElem.classList.add("topBtn");
  } else {
    topButtonElem.classList.remove("topBtn");
  }
});
