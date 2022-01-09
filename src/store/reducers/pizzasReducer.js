import { ADD_PIZZA, DELETE_PIZZA, FIND_PIZZA } from "../constants/constants";

const pizzasState = {
  pizzas: [
    {
      name: "Четыре сезона",
      image:
        "https://dodopizza-a.akamaihd.net/static/Img/Products/a5d272351fe241b1a90b3e10d2b5e2d0_292x292.jpeg",
      ingredients:
        "Итальянские травы, томатный соус, томаты, пикантная пепперони, кубики брынзы, моцарелла, ветчина, шампиньоны",
      price: "15.40",
      amount: 0,
    },
    {
      name: "Карбонара",
      image:
        "https://dodopizza-a.akamaihd.net/static/Img/Products/c51171b097ee4bcf8b8e3bed32014ea2_292x292.jpeg",
      ingredients:
        "Бекон, сыры чеддер и пармезан, моцарелла, томаты, соус альфредо, красный лук, чеснок, итальянские травы",
      price: "15.40",
      amount: 0,
    },
    {
      name: "Пепперони",
      image:
        "https://dodopizza-a.akamaihd.net/static/Img/Products/efebb8f86a87431ca2c0137103fb5d27_292x292.jpeg",
      ingredients: "Томатный соус, пикантная пепперони, моцарелла",
      price: "11.40",
      amount: 0,
    },
    {
      name: "Сырный цыпленок",
      image:
        "https://dodopizza-a.akamaihd.net/static/Img/Products/52d4303272ef4b97b286d6f2d09a4979_292x292.jpeg",
      ingredients:
        "Цыпленок, моцарелла, сыры чеддер и пармезан, сырный соус, томаты, соус альфредо, чеснок",
      price: "18.40",
      amount: 0,
    },
  ],
};

export const pizzasReducer = (state = pizzasState, action) => {
  switch (action.type) {
    case ADD_PIZZA:
      return {
        ...state,
        pizzas: [action.newItem, ...state.pizzas],
      };
    case DELETE_PIZZA:
      return {
        ...state,
        pizzas: state.pizzas.filter((pizza) => pizza.name !== action.delPizza),
      };
    case FIND_PIZZA:
      return {
        ...state,
        pizzas: state.pizzas.splice(action.findPizza),
      };
    default:
      return state;
  }
};
