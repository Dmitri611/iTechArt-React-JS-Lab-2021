import React, { useState } from "react";
import styles from "./editPizzaPage.module.scss";
import Button from "../../header/button/button";
import { Link } from "react-router-dom";
import AllPizzas from "../newPizzaPage/allPizzas/allPizzas";
import Block from "../newPizzaPage/block/block";
import { useDispatch, useSelector } from "react-redux";
import { pizzaSelector } from "../../../store/selectors/pizzaSelectors";
import { addPizzaAction } from "../../../store/actions/pizzaActions";

export default function EditPizzaPage() {
  let pizzas = useSelector(pizzaSelector);
  const dispatch = useDispatch();

  const [pizza, SetPizza] = useState({
    name: "",
    image: "",
    ingredients: "",
    price: "",
    amount: 0,
  });

  const thisObject = (e) => {
    let thisPizza = e.target.value;
    const item = pizzas.find((item) => item.name === thisPizza);
    SetPizza({
      name: item.name,
      image: item.image,
      ingredients: item.ingredients,
      price: item.price,
    });
  };

  const [newPizza, setNewPizza] = useState({
    name: "",
    image: "",
    price: "",
    ingredients: "",
    amount: 0,
  });

  const handleChange = (e) => {
    setNewPizza({
      ...newPizza,
      [e.target.name]: e.target.value,
    });
  };

  const addPizza = () => {
    let thisPizza = pizza.name;
    const item = pizzas.find((item) => item.name === thisPizza);
    pizzas.splice(item, 1);
    if (newPizza.image === "") {
      newPizza.image = pizza.image;
    }
    if (newPizza.name === "") {
      newPizza.name = pizza.name;
    }
    if (newPizza.price === "") {
      newPizza.price = pizza.price;
    }
    if (newPizza.ingredients === "") {
      newPizza.ingredients = pizza.ingredients;
    }
    dispatch(addPizzaAction(newPizza));
  };

  return (
    <div className={styles.content}>
      <AllPizzas onClick={thisObject} />
      <div className={styles.content_wrapper}>
        <h2 className={styles.content_font}>Изменить пиццу</h2>
        <Block
          value={newPizza.image}
          onChange={handleChange}
          label={pizza.image}
          name="image"
          help="Введите URL ссылку на картинку!"
        />
        <Block name="category" help="Введите категорию пиццы!" />
        <Block
          value={newPizza.name}
          onChange={handleChange}
          label={pizza.name}
          name="name"
          help="Введите название пиццы!"
        />
        <Block
          value={newPizza.price}
          onChange={handleChange}
          label={pizza.price}
          name="price"
          help="Введите цену пиццы!"
        />
        <Block
          value={newPizza.ingredients}
          onChange={handleChange}
          label={pizza.ingredients}
          name="ingredients"
          help="Введите ингредиенты для пиццы!"
        />
        <div className={styles.content_btns}>
          <Link to="/adminPage">
            <Button name="Вернуться назад" />
          </Link>
          <Button onClick={addPizza} name="Изменить пиццу" />
        </div>
      </div>
    </div>
  );
}
