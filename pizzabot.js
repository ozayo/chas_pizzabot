const vegetarian = "Vegetarian Pizza";
const hawaiian = "Hawaiian Pizza";
const pepperoni = "Pepperoni Pizza";

const pizzaPrice = 80;

//Put your Javscript code here:

// welcome alert
alert(
  "Hey! Happy to serve your pizza.On our menu we have:\n" +
    vegetarian +
    ", " +
    hawaiian +
    ", " +
    "and " +
    pepperoni +
    ". "
);

// order prompt
let orderName = prompt(
  "Enter the pizza name you want to order\n" +
    vegetarian +
    "\n" +
    hawaiian +
    "\n" +
    pepperoni
);

// Function to check if the pizza is on the menu
function checkOrderName(orderName) {
  return (
    orderName === vegetarian ||
    orderName === hawaiian ||
    orderName === pepperoni
  );
}
// Function to calculate the total cost
function totalCost(orderQuantity) {
  return Number(orderQuantity) * pizzaPrice;
}
// Function to calculate cooking time
function cookingTime(orderQuantity) {
  if (orderQuantity <= 2) {
    return 10;
  } else if (orderQuantity <= 5) {
    return 15;
  } else {
    return 20;
  }
}

if (checkOrderName(orderName)) {
  const orderQuantity = prompt("How many of " + orderName + " do you want?");

  if (!isNaN(orderQuantity) && orderQuantity > 0) {
    const orderTotal = totalCost(orderQuantity);
    const orderCookingTime = cookingTime(orderQuantity);

    alert(
      "Great, I'll get started on your " +
        orderName +
        " right away, it will cost " +
        orderTotal +
        " kr. The pizzas will take " +
        orderCookingTime +
        " minutes."
    );
  } else {
    alert("Error: Order quantity must a number.");
  }
} else {
  alert("Sorry, we don't have that pizza on our menu.");
}

// let orderQuantity = prompt(
//   "You select " +
//     orderName +
//     " perfect.\n" +
//     "How many of " +
//     orderName +
//     " do you want?"
// );

// let orderTotal = pizzaPrice * Number(orderQuantity);

// let orderResult = alert(
//   "Great, I'll get started on your " +
//     orderName +
//     " right away\n, it will cost" +
//     orderTotal +
//     "kr"
// );

console.log(orderName);
// console.log(orderQuantity);
// console.log(orderTotal);
