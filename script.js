// let hexagoni = document.getElementsByClassName("hexagon");

// for (let i = 0; i < hexagoni.length; i++) {
//   hexagoni[i].addEventListener("mouseenter", () => {
//     hexagoni[i].classList.add("light");
//     setTimeout(function () {
//       hexagoni[i].classList.remove("light");
//     }, 800);
//   });
// }
let hexagon = document.getElementsByClassName("hexagon");

for (let i = 0; i < hexagon.length; i++){
  hexagon[i].addEventListener("mouseenter", () => {
    hexagon[i].classList.add("light");
    setTimeout(function() {
      hexagon[i].classList.remove("light");
    }, 800);
  });
}