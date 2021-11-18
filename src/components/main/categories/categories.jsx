import React from 'react';
import './categories.scss';

export default function Categories () {
    return (
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
    );
}