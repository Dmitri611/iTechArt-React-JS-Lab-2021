import React from "react";
import logo from './assets/img/svg/544pizza2_100268.svg';

function App() {
  return (
    <div id="wrap" className="wrapper">
      <header className="header">
        <div className="container">
          <div className="header__logo">
            <div className="header__logo_top">
              <div className="header__logo_img">
                <img
                  width="38"
                  src={logo}
                  alt="Pizza logo"
                />
              </div>
              <div className="header__logo_text">
                <h1 className="header__logo_font">pizza lab</h1>
              </div>
            </div>
            <div className="header__logo_description">
              <p className="header__logo_description_font">
                Лучшая пицца в мире!
              </p>
            </div>
          </div>
          <div className="block_search">
            <form action="/search/" target="_blank" className="form_search">
              <input
                className="form_search_input"
                type="hidden"
                name="searchid"
                value="808327"
              />
              <input
                className="form_search_input"
                type="search"
                name="text"
                required
                placeholder="Поиск по сайту"
              />
              <input
                className="form_search_input"
                type="submit"
                value="&#128269;"
              />
            </form>
          </div>
          <div className="block_buttons_add_pizza">
            <button id="btn" className="button">
              <span className="button_font">Добавить пиццу</span>
            </button>
          </div>
          <div className="block_buttons">
            <div className="block_buttons_bascet">
              <button className="button">
                <span className="button_font">Корзина</span>
              </button>
            </div>
            <div className="block_buttons_authorization">
              <div className="button">
                <div className="button_content">
                  <span className="button_font">Войти</span>
                  <div className="button__delimiter"></div>
                  <span className="button_font">Регистрация</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container1024">
          <div className="block_buttons_add_pizza1024">
            <button id="btn" className="button">
              <span className="button_font">Добавить пиццу</span>
            </button>
          </div>
          <div className="block_buttons1024">
            <div className="block_buttons_bascet">
              <button className="button">
                <span className="button_font">Корзина</span>
              </button>
            </div>
            <div className="block_buttons_authorization">
              <div className="button">
                <div className="button_content">
                  <span className="button_font">Войти</span>
                  <div className="button__delimiter"></div>
                  <span className="button_font">Регистрация</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      <main>
        <div className="content">
          <div className="content__container">
            <div className="container__top">
              <div className="categories">
                <ul className="categories_list">
                  <li className="list_item_active list_item_font">Все</li>
                  <li className="categories_list_item list_item_font">
                    Мясные
                  </li>
                  <li className="categories_list_item list_item_font">
                    Вегетарианская
                  </li>
                  <li className="categories_list_item list_item_font">Гриль</li>
                  <li className="categories_list_item list_item_font">
                    Острые
                  </li>
                  <li className="categories_list_item list_item_font">
                    Закрытые
                  </li>
                </ul>
              </div>
              <div className="sort">
                <div className="sort_items">
                  <svg
                    width="10"
                    height="6"
                    viewBox="0 0 10 6"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M10 5C10 5.16927 9.93815 5.31576 9.81445 5.43945C9.69075 5.56315 9.54427 5.625 9.375 5.625H0.625C0.455729 5.625 0.309245 5.56315 0.185547 5.43945C0.061849 5.31576 0 5.16927 0 5C0 4.83073 0.061849 4.68424 0.185547 4.56055L4.56055 0.185547C4.68424 0.061849 4.83073 0 5 0C5.16927 0 5.31576 0.061849 5.43945 0.185547L9.81445 4.56055C9.93815 4.68424 10 4.83073 10 5Z"
                      fill="#2C2C2C"
                    />
                  </svg>
                  <div className="sort_items_padd">
                    <span className="sort_item_b_font"> Сортировка по: </span>
                  </div>
                  <div className="sort_items_padd">
                    <span id="popup" className="sort_item_b_active_font">
                      популярности
                    </span>
                  </div>
                </div>
                <div id="sortPopup" className="sort__popup">
                  <ul className="sort__popup_list">
                    <li className="sort__popup_list_item sort__popup_list_item_active">
                      популярности
                    </li>
                    <li className="sort__popup_list_item">цене</li>
                    <li className="sort__popup_list_item">алфавиту</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="content__title">
              <h2 className="content__title_h2_font">Все пиццы</h2>
              <div className="content__items">

              </div>
            </div>
          </div>
        </div>
      </main>
      <footer className="footer">
        <div className="footer__content">
          <div className="footer__logo">
            <img
              className="footer__logo-img"
              width="38"
              src={logo}
              alt="Pizza logo"
            />
            <h2 className="footer__logo-h2-font">Pizza LAB</h2>
          </div>
          <ul className="footer__content__list">
            <li>
              <a className="footer-cont-l-item" href="1">
                О Нас
              </a>
            </li>
            <li>
              <a className="footer-cont-l-item" href="2">
                Оставить отзыв
              </a>
            </li>
            <li>
              <a className="footer-cont-l-item" href="3">
                Работа у нас
              </a>
            </li>
            <li>
              <a className="footer-cont-l-item" href="4">
                Акции
              </a>
            </li>
            <li>
              <a className="footer-cont-l-item" href="5">
                Контакты
              </a>
            </li>
          </ul>
        </div>
      </footer>
    </div>
  );
}

export default App;
