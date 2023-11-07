function orderPizza() {
  const pizzaType = document.querySelector('input[name="pizzaType"]:checked');
  const pizzaQuantity = parseInt(
    document.getElementById("pizzaQuantity").value
  );

  if (pizzaType && checkOrderName(pizzaType.value)) {
    if (!isNaN(pizzaQuantity) && pizzaQuantity > 0) {
      const orderTotal = totalCost(pizzaQuantity);
      const orderCookingTime = cookingTime(pizzaQuantity);
      const response =
        "Great, I'll get started on your " +
        "<b>" +
        pizzaType.value +
        "</b>" +
        " right away." +
        "<br>" +
        "It will cost " +
        "<b>" +
        orderTotal +
        "</b>" +
        " kr." +
        "<br>" +
        "The pizzas will take " +
        "<b>" +
        orderCookingTime +
        "</b>" +
        " minutes.";
      document.getElementById("response").innerHTML = response;
    } else {
      document.getElementById("response").innerHTML =
        "<span style=color:red>Invalid quantity. Please enter a quantity.</span>";
    }
  } else {
    document.getElementById("response").innerHTML =
      "<span style=color:red>Please select a valid pizza from the menu.</span>";
  }
}

function checkOrderName(orderName) {
  return (
    orderName === "Vegetarian Pizza" ||
    orderName === "Hawaiian Pizza" ||
    orderName === "Pepperoni Pizza"
  );
}

function totalCost(orderQuantity) {
  const pizzaPrice = 80;
  return orderQuantity * pizzaPrice;
}

function cookingTime(orderQuantity) {
  if (orderQuantity <= 2) {
    return 10;
  } else if (orderQuantity <= 5) {
    return 15;
  } else {
    return 20;
  }
}
