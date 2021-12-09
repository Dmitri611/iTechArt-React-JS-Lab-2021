const pizzasState = {
  pizzas: [
    {
      image:
        "https://dodopizza-a.akamaihd.net/static/Img/Products/c54928acb21147578a4d8a704cadea11_292x292.jpeg",
      name: "Новая пицца1",
      ingredients: "Тесто, Мясо, Соус, Сыр",
      price: 10.99,
      amount: 2,
    },
    {
      image:
        "https://dodopizza-a.akamaihd.net/static/Img/Products/c54928acb21147578a4d8a704cadea11_292x292.jpeg",
      name: "Новая пицца2",
      ingredients: "Тесто, Мясо, Соус, Сыр",
      price: 10.99,
      amount: 2,
    },
    {
      image:
        "https://dodopizza-a.akamaihd.net/static/Img/Products/c54928acb21147578a4d8a704cadea11_292x292.jpeg",
      name: "Новая пицца3",
      ingredients: "Тесто, Мясо, Соус, Сыр",
      price: 10.99,
      amount: 2,
    },
    {
      image:
        "https://dodopizza-a.akamaihd.net/static/Img/Products/c54928acb21147578a4d8a704cadea11_292x292.jpeg",
      name: "Новая пицца4",
      ingredients: "Тесто, Мясо, Соус, Сыр",
      price: 10.99,
      amount: 2,
    },
  ],
};

export const pizzasReducer = (state = pizzasState, action) => {
  switch (action.type) {
    case "ADD_PIZZA":
      return {
        ...state,
        pizzas: [...state.pizzas, action.newItem],
      };
    default:
      return state;
  }
};
