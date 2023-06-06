// function hover(x){
//     x.document.style.backgroundColor = "rgba(0, 0, 0, 0.6)";
// }

document.getElementById("tshirt").onmouseover = function() {mouseOver()};
document.getElementById("tshirt").onmouseout = function() {mouseOut()};

function mouseOver() {
  document.getElementById("tshirt").style.color = "rgba(0, 0, 0, 0.6)";
}

function mouseOut() {
  document.getElementById("tshirt").style.color = "";
}

// const tshirt = document.getElementById("tshirt");
// function onmouseover()
// tshirt.