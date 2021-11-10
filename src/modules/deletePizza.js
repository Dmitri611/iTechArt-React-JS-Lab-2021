export default function delPizza(catalogPizza, getPizzaLocalStorage, thisPizza) {
  thisPizza = document.querySelectorAll(".pizza_delete");
  thisPizza.forEach((el) => {
    el.addEventListener("click", (e) => {
      let remove = e.target.id;
      for (let key in catalogPizza) {
        if (key === remove) {
          let deletePizza = document.querySelector(`.${key}`);
          delete catalogPizza[key];
          localStorage.setItem("catalogPizza", JSON.stringify(catalogPizza));
          catalogPizza = JSON.parse(localStorage.getItem("catalogPizza"));
          // getPizzaLocalStorage(catalogPizza);
          deletePizza.remove();

        }
      }
    });
  });
}
