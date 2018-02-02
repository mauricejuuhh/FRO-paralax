var image = document.getElementsByClassName('image');
var leftCenterText = document.getElementById('left-center-text');
var rightCenterText = document.getElementById('right-center-text');
window.addEventListener("scroll", myScript);

for (var i = 0; i < image.length; i++) {
  image[i].style.backgroundPositionY = image[i].offsetTop + "px";
}

function myScript() {
//
// for (var i = 0; i < image.length; i++) {
//   image[i].style.backgroundPosition = "center " + (1066 - window.pageYOffset * 2) + "px";
// }


for (var i = 0; i < image.length; i++) {
  var snelheid = 1196 / window.innerHeight;
  let a = window.pageYOffset * snelheid;
  image[i].style.backgroundPositionY = (image[i].offsetTop - a) + "px";
}

  var triggerSpeed = (100 / (window.innerHeight / 1.3 ));
  var som = (triggerSpeed * (leftCenterText.offsetTop - window.scrollY));
  var lol = som - 75;

if (lol > 0 && lol < 101) {
  leftCenterText.style.marginRight = lol + "%";
  rightCenterText.style.marginLeft = lol + "%";
}
if (lol > 100) {
  leftCenterText.style.marginRight = "100%";
  rightCenterText.style.marginLeft = "100%";
}
if (lol < 0) {
  leftCenterText.style.marginRight = "0%";
  rightCenterText.style.marginLeft = "0%";
}

// console.log(triggerSpeed);
// console.log(window.innerHeight);
// console.log(leftCenterText.offsetTop);
console.log(lol);






}
