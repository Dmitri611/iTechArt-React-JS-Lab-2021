import React, { useState } from "react";
import styles from "./editPizzaPage.module.scss";
import Button from "../../header/button/button";
import { Link } from "react-router-dom";
import AllPizzas from "../common/allPizzas/allPizzas";
import Block from "../newPizzaPage/block/block";
import { useSelector } from "react-redux";
import { pizzaSelector } from "../../../store/selectors/pizzaSelectors";
import { useDispatch } from "react-redux";
import { addPizzaAction, delPizzaAction } from "../../../store/actions/pizzaActions";

export default function EditPizzaPage() {
  let pizzas = useSelector(pizzaSelector);
  const dispatch = useDispatch()

  const [pizza, SetPizza] = useState({
    name: "",
    image: "",
    ingredients: "",
    price: "",
    amount: "",
  });

  const [inputNameValue, setInputNameValue] = useState({
    value: ""
  })

  const [newPizza, setNewPizza] = useState({
    name: "",
    image: "",
    ingredients: "",
    price: "",
    amount: "",
  })

  const handleChange = (e) => {
    setNewPizza({
      ...newPizza,
      [e.target.name]: e.target.value,
    });
  };

  const thisObject = (e) => {
    let thisPizza = e.target.value;
    const item = pizzas.find((item) => item.name === thisPizza);
    setInputNameValue({
      value: e.target.value
    })
    SetPizza({
      name: item.name,
      image: item.image,
      ingredients: item.ingredients,
      price: item.price,
      amount: item.amount,
    });
  };

  const editPizza = () => {
    dispatch(delPizzaAction(inputNameValue.value));
    dispatch(addPizzaAction(newPizza))
  }

  return (
    <div className={styles.content}>
      <AllPizzas heading="Все пиццы" onClick={thisObject} />
      <div className={styles.content_wrapper}>
        <h2 className={styles.content_font}>Изменить пиццу</h2>
        <Block
          label={pizza.image}
          onChange={handleChange}
          name="image"
          help="Введите URL ссылку на картинку!"
        />
        <Block name="category" help="Введите категорию пиццы!" />
        <Block
          label={pizza.name}
          onChange={handleChange}
          name="name"
          help="Введите название пиццы!"
        />
        <Block
          label={pizza.price}
          onChange={handleChange}
          name="price"
          help="Введите цену пиццы!"
        />
        <Block
          label={pizza.ingredients}
          onChange={handleChange}
          name="ingredients"
          help="Введите ингредиенты для пиццы!"
        />
        <div className={styles.content_btns}>
          <Link to="/adminPage">
            <Button name="Вернуться назад" />
          </Link>
          <Button onClick={editPizza} name="Изменить пиццу" />
        </div>
      </div>
    </div>
  );
}
