export default function (state, action) {
  switch (action.type) {
    case "addIngredients":
      return {
        pizza: {
          ...state.pizza,
          price: [+[...state.pizza.price] + +action.payload.price],
          ingredients: [...state.pizza.ingredients, action.payload].filter(
            (el, id) => {
              return (
                [...state.pizza.ingredients, action.payload].indexOf(el) === id
              );
            }
          ),
        },
        ingredients: [
          ...state.ingredients.map((el) => {
            if (el.text === action.payload.text) {
              el.total += 1;
            }
            return el;
          }),
        ],
      };

    case "delIngredients":
      return {
        pizza: {
          ...state.pizza,
          price: [
            state.pizza.price > 3
              ? [...state.pizza.price] - action.payload.price
              : 3,
          ],
          ingredients: [
            ...state.pizza.ingredients.filter((el) => {
              if (el.total === 0) {
                return el !== action.payload;
              }
              return el;
            }),
          ],
        },
        ingredients: [...state.ingredients].map((el) => {
          if (el.text === action.payload.text) {
            if (el.total > 0) {
              el.total -= 1;
            }
          }
          return el;
        }),
      };

    case "resetIngredients":
      return {
        pizza: {
          ...state.pizza,
          price: [3.0],
          ...(state.pizza.ingredients.length = 0),
        },
        ingredients: [
          ...state.ingredients.map((el) => {
            if (el.total !== 0) {
              el.total = 0;
            }
            return el;
          }),
        ],
      };

    default:
      return state;
  }
}
