var sideA = document.querySelector("#side-a");
var sideB = document.querySelector("#side-b");
var sideC = document.querySelector("#side-c");
var aTab = document.querySelector("#area");
var pTab = document.querySelector("#perimeter");
var dTab = document.querySelector("#diagonal");
var aContainer = document.querySelector("#area-container");
var pContainer = document.querySelector("#perimeter-container");
var dContainer = document.querySelector("#diagonal-container");
var fixBg = document.querySelector("#fixedbg");
var menu = document.querySelector("#menu-btn");
var sidebar = document.querySelector(".sidebar-container");

aTab.addEventListener("click", function () {
  pContainer.classList.add("notactive");
  dContainer.classList.add("notactive");
  aContainer.classList.remove("notactive");
  this.classList.add("active");
  pTab.classList.remove("active");
  dTab.classList.remove("active");
  tuckIn();
});
pTab.addEventListener("click", function () {
  aContainer.classList.add("notactive");
  dContainer.classList.add("notactive");
  pContainer.classList.remove("notactive");
  this.classList.add("active");
  aTab.classList.remove("active");
  dTab.classList.remove("active");
  tuckIn();
});
dTab.addEventListener("click", function () {
  aContainer.classList.add("notactive");
  pContainer.classList.add("notactive");
  dContainer.classList.remove("notactive");
  this.classList.add("active");
  aTab.classList.remove("active");
  pTab.classList.remove("active");
  tuckIn();
});
sideA.addEventListener("input", solveArea);
sideB.addEventListener("input", solvePerimeter);
sideC.addEventListener("input", solveDiagonal);
function solveArea() {
  let s = sideA.value;
  let header = document.querySelector(".active-head-a").textContent;
  let x = header.indexOf("Area")
  if (x !== -1) {
    document.getElementById("a-answer").textContent = s**2;
  }
}
function solvePerimeter() {
  let s = sideB.value;
  let header = document.querySelector(".active-head-p").textContent;
  let x = header.indexOf("Perimeter")
  if (x !== -1) {
    document.getElementById("p-answer").textContent = s * 4;
  }
}
function solveDiagonal() {
  let s = sideC.value;
  let header = document.querySelector(".active-head-d").textContent;
  let x = header.indexOf("Diagonal")
  if (x !== -1) {
    document.getElementById("d-answer").textContent = Math.round(Math.sqrt((s**2)*2)*100)/100;
  }
}
aContainer.addEventListener("click", tuckIn);
pContainer.addEventListener("click", tuckIn);
dContainer.addEventListener("click", tuckIn);
fixBg.addEventListener("click", tuckIn);
menu.addEventListener("focus", tuckOut);
function tuckOut() {
  sidebar.classList.add("tuckout");
  sidebar.classList.remove("tuckin");
}
function tuckIn() {
  sidebar.classList.add("tuckin");
  sidebar.classList.remove("tuckout");
}
document.body.addEventListener("keyup", function (e) {
  if (e.keyCode == 9) {
    tuckOut();
  }
});
tuckIn();