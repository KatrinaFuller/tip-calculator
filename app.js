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

function peopleRange() {
  numberOfPeopleElement.textContent = "Number of People: " + peopleElement.value.toString();
}
