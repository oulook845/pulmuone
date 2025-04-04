/* 링크가 없는 a태그 클릭시 동작 없음 */
let anchorElems = document.querySelectorAll("a[href='#");
anchorElems.forEach((anchorElem) => {
  anchorElem.addEventListener("click", function (e) {
    e.preventDefault();
  });
});

/* footer 스크립트 ################## */
const footerElem = document.getElementById("footer");
const familyTitle = footerElem.querySelector(".fmTitle");
const familyList = footerElem.querySelector(".familySite");
familyTitle.addEventListener("click", function () {
  familyList.classList.toggle("fmHidden");
});
