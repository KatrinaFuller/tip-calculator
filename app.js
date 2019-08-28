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
numberOfPeopleElement.textContent = "Number of People: " + peopleElement.value;
// update slider for people when it is dragged
function peopleRange() {
  numberOfPeopleElement.textContent = "Number of People: " + peopleElement.value;
}


// reset
function reset() {
  if (confirm("Are you sure you want to reset?")) {
    document.getElementById("tipRange").value = 20;
    tipPercent();
    document.getElementById("peopleRange").value = 1;
    peopleRange();
    document.getElementById("total-bill").value = 0;

    let newBillPerPersoneElement = document.getElementById("bill-per-person");
    newBillPerPersoneElement.textContent = "$ 0";
    let tipAmountPerPersonElement = document.getElementById("tip-per-person");
    tipAmountPerPersonElement.textContent = "$ 0";
  }
}




function calculate() {
  // Tip = bill x tip%
  // Total = bill + tip

  let totalBillElement = parseFloat(document.querySelector("#total-bill").value);
  let tipPercentElement = parseFloat(document.querySelector("#tipRange").value);
  let peepsElement = parseFloat(document.querySelector("#peopleRange").value);

  // finding the tip amount
  let tip = totalBillElement * tipPercentElement / 100;

  // finding the total amount
  let total = totalBillElement + tip;

  // tip per person = tip / num of people
  let tipPerPerson = tip / peepsElement

  // new bill per person = total / num of people
  let billPerPerson = total / peepsElement

  let newBillPerPersonElement = document.querySelector("#bill-per-person");
  newBillPerPersonElement.textContent = "$ " + billPerPerson.toFixed(2).toString();

  let tipAmountPerPersonElement = document.querySelector("#tip-per-person");
  tipAmountPerPersonElement.textContent = "$ " + tipPerPerson.toFixed(2).toString();
}
