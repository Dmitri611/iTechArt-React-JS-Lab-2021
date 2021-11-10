import getPizzaLocalStorage from '../modules/getPizzaLocalStorage.js';
import showPizza from '../modules/showPizza.js'

let catalogPizza = JSON.parse(localStorage.getItem("catalogPizza"));

getPizzaLocalStorage(catalogPizza);
