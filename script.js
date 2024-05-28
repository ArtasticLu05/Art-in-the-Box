document.querySelector('.prev').addEventListener('click', function() {
  document.querySelector('.carousel-inner').style.transform += 'translateX(-100%)';
});

document.querySelector('.next').addEventListener('click', function() {
  document.querySelector('.carousel-inner').style.transform += 'translateX(100%)';
});

// Variables
let cosplayItem = "Epic Armor"; // String variable
let cosplayPrice = 50; // Numeric variable

// Mathematical Operation
let discount = 10; // Numeric variable
let totalPrice = cosplayPrice - discount; // Mathematical operation
// Output to console
console.log("Item:", cosplayItem);
console.log("Price before discount:", cosplayPrice);
console.log("Total price after discount:", totalPrice);

// Output to HTML
let outputDiv = document.createElement("div");
outputDiv.innerHTML = `
  <p>Item: ${cosplayItem}</p>
  <p>Price before discount: $${cosplayPrice}</p>
  <p>Total price after discount: $${totalPrice}</p>
`;
document.body.appendChild(outputDiv);

// Decision Making
if (totalPrice > 30) {
  console.log("You are eligible for free shipping!");
  outputDiv.innerHTML += "<p>You are eligible for free shipping!</p>";
} else {
  console.log("Shipping fee: $5");
  outputDiv.innerHTML += "<p>Shipping fee: $5</p>";
}

// Logical Operators
let hasDiscount = true;
let isHighValue = totalPrice > 50;

if (hasDiscount && isHighValue) {
  console.log("You got a discount on a high-value item!");
  outputDiv.innerHTML += "<p>You got a discount on a high-value item!</p>";
} else {
  console.log("No additional discount available.");
  outputDiv.innerHTML += "<p>No additional discount available.</p>";
}


//&& and, || or, ! not 