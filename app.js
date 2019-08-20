// tip
let sliderElement = document.querySelector("#tipRange");
let tipAmountElement = document.querySelector("#tipAmount");
tipAmountElement.textContent = "Tip % : " + sliderElement.value.toString();
//update current slider value each time it is dragged
function tipPercent() {
  tipAmountElement.textContent = "Tip % : " + sliderElement.value.toString();
};


// people
let peopleElement = document.querySelector("#peopleRange");
let numberOfPeopleElement = document.querySelector("#peopleAmount");
numberOfPeopleElement.textContent = "Number of People: " + peopleElement.value.toString();
// update slider for people when it is dragged
function peopleRange() {
  numberOfPeopleElement.textContent = "Number of People: " + peopleElement.value.toString();
}


// reset
function reset() {
  if (confirm("Are you sure you want to reset?")) {
    document.getElementById("tipRange").value = 20;
    tipPercent();
    document.getElementById("peopleRange").value = 4;
    peopleRange();
  }
}
