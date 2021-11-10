export default function showPizza(pizza) {
    const containerNewPizza = document.querySelector('.content__items');
    let div = document.createElement("div");
    div.className = `${pizza.name}`;
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
  `;
  }