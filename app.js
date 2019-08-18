let slider = document.getElementById("tipRange");
let output = document.getElementById("demo");
output.innerHTML = slider.value;

//update current slider value each time it is dragged
slider.oninput = function () {
  output.innerHTML = this.value;
}