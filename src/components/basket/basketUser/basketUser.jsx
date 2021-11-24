import React from "react";
import styles from "./basketUser.module.scss";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";
import CloseIcon from "@mui/icons-material/Close";
import Button from '../../header/button/button.jsx'

export default function BasketUser() {
  return (
    <div className={styles.basket__content}>
      <div className={styles.basket__heading}>
        <div className={styles.heading}>
          <div className={styles.heading_svg}>
            <ShoppingCartIcon
              color="action"
              fontSize="large"
            ></ShoppingCartIcon>
          </div>
          <div className={styles.heading_text}>
            <h2 className={styles.heading_h2_font}>Корзина</h2>
          </div>
        </div>
        <div className={styles.cleaning}>
          <div className={styles.cleaning_svg}>
            <DeleteForeverIcon
              className={styles.basket_icon}
              color="disabled"
              fontSize="large"
            ></DeleteForeverIcon>
          </div>
          <div className={styles.cleaning_text}>
            <h2 className={styles.cleaning_h2_font}>Очистить корзину</h2>
          </div>
        </div>
      </div>
      <div className={styles.content}>
        <tr className={styles.pizza_block}>
          <div className={styles.pizza}>
            <td className={styles.pizza_image_div}>
              <img
                className={styles.pizza_image}
                src="https://dodopizza-a.akamaihd.net/static/Img/Products/c54928acb21147578a4d8a704cadea11_292x292.jpeg"
              ></img>
            </td>
            <td className={styles.pizza_description}>
              <h2>Новая пицца</h2>
              <p className={styles.pizza_description_p_font}>тонкое тесто, 26 см.</p>
            </td>
          </div>          
          <td className={styles.counter}>
            <RemoveIcon 
            className={styles.icon}
            fontSize="medium"
            ></RemoveIcon>
            <h2>2</h2>
            <AddIcon 
            className={styles.icon}
            fontSize="medium"
            ></AddIcon>
          </td>
          <td className={styles.price}>
            <h2>10.99 р.</h2>
          </td>
          <td>
            <CloseIcon 
            className={styles.icon}
            fontSize="large"
            ></CloseIcon>
          </td>
        </tr>
        <tr className={styles.pizza_block}>
          <div className={styles.pizza}>
            <td className={styles.pizza_image_div}>
              <img
                className={styles.pizza_image}
                src="https://dodopizza-a.akamaihd.net/static/Img/Products/c54928acb21147578a4d8a704cadea11_292x292.jpeg"
              ></img>
            </td>
            <td className={styles.pizza_description}>
              <h2>Новая пицца(Новая пицца1)</h2>
              <p className={styles.pizza_description_p_font}>тонкое тесто, 26 см.</p>
            </td>
          </div>          
          <td className={styles.counter}>
            <RemoveIcon 
            className={styles.icon}
            fontSize="medium"
            ></RemoveIcon>
            <h2>2</h2>
            <AddIcon 
            className={styles.icon}
            fontSize="medium"
            ></AddIcon>
          </td>
          <td className={styles.price}>
            <h2>10.99 р.</h2>
          </td>
          <td>
            <CloseIcon 
            className={styles.icon}
            fontSize="large"
            ></CloseIcon>
          </td>
        </tr>
        <tr className={styles.pizza_block}>
          <div className={styles.pizza}>
            <td className={styles.pizza_image_div}>
              <img
                className={styles.pizza_image}
                src="https://dodopizza-a.akamaihd.net/static/Img/Products/c54928acb21147578a4d8a704cadea11_292x292.jpeg"
              ></img>
            </td>
            <td className={styles.pizza_description}>
              <h2>Новая пицца(Новая пицца2)</h2>
              <p className={styles.pizza_description_p_font}>тонкое тесто, 26 см.</p>
            </td>
          </div>          
          <td className={styles.counter}>
            <RemoveIcon 
            className={styles.icon}
            fontSize="medium"
            ></RemoveIcon>
            <h2>2</h2>
            <AddIcon 
            className={styles.icon}
            fontSize="medium"
            ></AddIcon>
          </td>
          <td className={styles.price}>
            <h2>10.99 р.</h2>
          </td>
          <td>
            <CloseIcon 
            className={styles.icon}
            fontSize="large"
            ></CloseIcon>
          </td>
        </tr>
        <tr className={styles.pizza_block}>
          <div className={styles.pizza}>
            <td className={styles.pizza_image_div}>
              <img
                className={styles.pizza_image}
                src="https://dodopizza-a.akamaihd.net/static/Img/Products/c54928acb21147578a4d8a704cadea11_292x292.jpeg"
              ></img>
            </td>
            <td className={styles.pizza_description}>
              <h2>Новая пицца(Новая пицца3)</h2>
              <p className={styles.pizza_description_p_font}>тонкое тесто, 26 см.</p>
            </td>
          </div>          
          <td className={styles.counter}>
            <RemoveIcon 
            className={styles.icon}
            fontSize="medium"
            ></RemoveIcon>
            <h2>2</h2>
            <AddIcon 
            className={styles.icon}
            fontSize="medium"
            ></AddIcon>
          </td>
          <td className={styles.price}>
            <h2>10.99 р.</h2>
          </td>
          <td>
            <CloseIcon 
            className={styles.icon}
            fontSize="large"
            ></CloseIcon>
          </td>
        </tr>
        <div className={styles.info_for_order}>
          <h2 className={styles.text}>Всего пицц: <span className={styles.number}>3шт.</span></h2>
          <h2 className={styles.text}>Сумма заказа: <span className={styles.number_price}>30р.</span></h2>
        </div>
        <div className={styles.button_group}>
          <Button name="Вернуться назад"></Button>
          <Button name="Оплатить сейчас"></Button>
        </div>
      </div>
    </div>
  );
}
