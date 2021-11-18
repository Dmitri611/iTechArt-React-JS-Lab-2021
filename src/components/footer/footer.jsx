import React from 'react';
import './footer.scss';
import logo from '../../assets/img/svg/544pizza2_100268.svg';

export default function Footer () {
    return (
        <div className="footer">
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
      </div>
    );
}