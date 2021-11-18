import React from 'react';
import './buttonAuth.scss';

export default function ButtonAuth () {
    return (
        <div className="block_buttons_authorization">
              <div className="button">
                <div className="button_content">
                  <span className="button_font">Войти</span>
                  <div className="button__delimiter"></div>
                  <span className="button_font">Регистрация</span>
                </div>
              </div>
            </div>
    );
}