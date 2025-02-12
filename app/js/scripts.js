// var mapClicker = document.querySelector(".map");
// var body = document.querySelector("body")

// document.addEventListener("click", show);

// function show(e) {
//   e.preventDefault();
//   // body.classList.toggle("showme")
//   console.log(e.target)
// }


var body = document.querySelector("body");
document.addEventListener("click", handleClicks);

function handleClicks(e) {
  
  if (e.target.matches(".map")) {
    body.classList.add("showme");
    e.preventDefault();
  } else {
    body.classList.remove("showme");
  }
}