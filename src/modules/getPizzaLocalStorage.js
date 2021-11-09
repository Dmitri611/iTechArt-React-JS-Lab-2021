import showPizza from "./showPizza.js";

export default function getPizzaLocalStorage(pizzas) {
    let pizzaType = Object.values(pizzas);
  
    while (pizzaType.length) {
      let pizza = pizzaType.shift();
      showPizza(pizza);
    }
  }