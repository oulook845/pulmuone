/* scroll 이벤트 : 현재 scroll 값을 넘김 */
let scrollData = { currentScrollY: 0 };
window.addEventListener("scroll", () => {
  scrollData.currentScrollY = Math.floor(window.scrollY);
});

export function getScrollData() {
  return scrollData;
}