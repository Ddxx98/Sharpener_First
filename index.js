// Write your code below:
const header = document.getElementById("header");
header.style.backgroundColor = "green";
header.style.borderBottom = "solid orange"
// header.style.color = "orange"

// const h = document.getElementById("main-heading")
// h.textContent = "Fruits World"

const basket = document.getElementById("basket-heading")
basket.style.color = "green"

const newParagraph = document.createElement('p');
newParagraph.textContent = "Please visit us again";
const thank = document.getElementById("thanks")
thank.appendChild(newParagraph); 