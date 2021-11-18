import React from 'react';
import './main.scss'
import Categories from './categories/categories.jsx';
import Sort from './sort/sort.jsx';

export default function Main () {
    return (
        <div>
        <div className="content">
          <div className="content__container">
            <div className="container__top">
              <Categories></Categories>
              <Sort></Sort>
            </div>
            <div className="content__title">
              <h2 className="content__title_h2_font">Все пиццы</h2>
              <div className="content__items">
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}