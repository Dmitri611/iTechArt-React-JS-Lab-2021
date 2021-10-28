const btnAdd = document.getElementById('btnAdd');
const inputURL = document.getElementById('inputURL');
const inputNamePizza = document.getElementById('inputNamePizza');
const inputPricePizza = document.getElementById('inputPricePizza');
const containerNewPizza = document.querySelector('.content__items');

// localStorage
let pizza;
if(localStorage.getItem('pizza')) {
  pizza = JSON.parse(localStorage.getItem('pizza'))
} else {
  pizza = {
    'key' : [],
  }
}

function LoadPizzaLocalStorage() {
  let array = pizza.key;
  array.forEach(element => {
    let div = document.createElement('div');
    containerNewPizza.prepend(div);
    div.innerHTML = element;
  });

}

LoadPizzaLocalStorage()

btnAdd.addEventListener('click', () => {
  let div = document.createElement('div');
  containerNewPizza.prepend(div);
  div.innerHTML = `
    <div class="pizza__block">
    <div class="pizza__block_image">
      <img src= "${inputURL.value}" alt="Pizza"/>
    </div>
    <div class="pizza__block_heading">
      <h4 class="pizza__block_heading_font">${inputNamePizza.value}</h4>
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
        <span class="block__price_font"> от ${inputPricePizza.value}р </span>
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
  pizza['key'].push(div.innerHTML);
  localStorage.setItem('pizza', JSON.stringify(pizza));
});





