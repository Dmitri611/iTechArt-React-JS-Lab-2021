const btnAdd = document.getElementById('btnAdd');
const inputURL = document.getElementById('inputURL');
const inputNamePizza = document.getElementById('inputNamePizza');
const inputPricePizza = document.getElementById('inputPricePizza');
const containerNewPizza = document.querySelector('.content__items');

// localStorage
let catalogPizza;
let pizzaAll;
if(localStorage.getItem('catalogPizza')) {
  catalogPizza = JSON.parse(localStorage.getItem('catalogPizza'));
  pizzaAll = catalogPizza;
  getPizzaLocalStorage(pizzaAll);
} else {
  pizzaAll = {};
  localStorage.setItem('catalogPizza', pizzaAll)
}

function getPizzaLocalStorage(pizzas){
  let pizzaType = Object.values(pizzas);
  
  while(pizzaType.length){
    let pizza = pizzaType.shift();
    showPizza(pizza);
  }
}

function showPizza(pizza){
  let div = document.createElement('div');
  div.className = `${pizza.name}`
  containerNewPizza.prepend(div);
  div.innerHTML = `
    <div class="pizza__block">
    <div class="pizza__block_image">
      <div class="btn_del_pizza">
        <div class = "pizza_delete" id ="${pizza.name}" >
          <div class="leftright"></div>
          <div class="rightleft"></div>
          <span class="close-btn">удалить</span>
        </div>
      </div>
      <img src= "${pizza.image}" alt="Pizza"/>
    </div>
    <div class="pizza__block_heading">
      <h4 class="pizza__block_heading_font">${pizza.name}</h4>
    </div>
    <div class="pizza__block__content">
      <ul class="pizza__block_list">
        <li class=" pizza__block_list_item pizza__block_list_item_font pizza__block_list_item_active">
          тонкое
        </li>
        <li class="pizza__block_list_item pizza__block_list_item_font">
          традиционное
        </li>
      </ul>
      <ul class="pizza__block_list2">
        <li class="pizza__block_list_item pizza__block_list_item_font pizza__block_list_item_active">
          26
        </li>
        <li
          class="pizza__block_list_item pizza__block_list_item_font">
          30
        </li>
        <li class="pizza__block_list_item pizza__block_list_item_font">
          36
        </li>
      </ul>
    </div>
    <div class="pizza__block__bottom">
      <div class="pizza__block_price">
        <span class="block__price_font"> от ${pizza.price}р </span>
      </div>
      <div class="pizza__block__bottom_btn">
        <div class="button__add">
          <div class="button__add_plus"></div>
          <div class="button__add_span">
            <span class="button__add_span_font">Добавить</span>
          </div>
          <div class="button__add_i">
            <i class="button__add_i_font">2</i>
          </div>
        </div>
      </div>
    </div>
  </div>
`
}

btnAdd.addEventListener('click', () => {
  let pizzaType = {
    'name':inputNamePizza.value,
    'price': inputPricePizza.value,
    'image': inputURL.value,
  }

  let namePizza = inputNamePizza.value;
  pizzaAll[namePizza] = pizzaType;
  let a = JSON.stringify(pizzaAll);
  localStorage.setItem('catalogPizza', a);
  showPizza(pizzaType);
});

//delete pizza
const thisPizza = document.querySelectorAll('.pizza_delete');
thisPizza.forEach((el) => {
  el.addEventListener('click', (e) => {
    let remove = e.target.id;
    for (let key in catalogPizza) {

      if(key === remove){
        let deletePizza = document.querySelector(`.${key}`);
        delete catalogPizza[key]

        localStorage.setItem('catalogPizza', JSON.stringify(catalogPizza));
        catalogPizza = JSON.parse(localStorage.getItem('catalogPizza'));
        getPizzaLocalStorage(catalogPizza);
        console.log(remove)
        console.log(deletePizza)
        deletePizza.remove();
      }
    }
  });
  
});






