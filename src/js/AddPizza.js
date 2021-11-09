import {
  btnAdd,
  inputURL,
  inputNamePizza,
  inputPricePizza,
} from "../modules/variables.js";

import showPizza from '../modules/showPizza.js';
import deletePizza from '../modules/deletePizza.js';
import getPizzaLocalStorage from '../modules/getPizzaLocalStorage.js';


// localStorage
let catalogPizza;
let pizzaAll;
if (localStorage.getItem("catalogPizza")) {
  catalogPizza = JSON.parse(localStorage.getItem("catalogPizza"));
  pizzaAll = catalogPizza;
  getPizzaLocalStorage(pizzaAll);
} else {
  pizzaAll = {};
  localStorage.setItem("catalogPizza", pizzaAll);
}



btnAdd.addEventListener("click", () => {
  let pizzaType = {
    name: inputNamePizza.value,
    price: inputPricePizza.value,
    image: inputURL.value,
  };

  let namePizza = inputNamePizza.value;
  pizzaAll[namePizza] = pizzaType;
  let a = JSON.stringify(pizzaAll);
  localStorage.setItem("catalogPizza", a);
  showPizza(pizzaType);
});

deletePizza(catalogPizza, getPizzaLocalStorage);