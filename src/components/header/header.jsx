import React from 'react';
import './header.scss';
import Logo from './logo/logo.jsx';
import Search from './search/search.jsx';
import Button from './buttonAddPizza/button.jsx';
import ButtonAuth from './buttonAuthorization/buttonAuth';


export default function Header () {
    return (
        <div className="header">
        <div className="container">
          <Logo></Logo>
          <Search></Search>
          <Button></Button>
          <div className="block_buttons">
            <div className="block_buttons_bascet">
              <button className="button">
                <span className="button_font">Корзина</span>
              </button>
            </div>
            <ButtonAuth></ButtonAuth>
          </div>
        </div>
      </div>
    );
}