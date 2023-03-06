export default function (state, action) {
  switch (action.type) {
    case "addItem":
      return {
        pizza: {
          ...state.pizza,
          price: +state.pizza.price + +action.payload.price,
          ingredients: [...state.pizza.ingredients].map((obj) => {
            if (obj.text === action.payload.text) {
              obj.total++;
            }
            return obj;
          }),
        },
        newPizza: {
          ...state.newPizza,
        },
      };

    case "delItem":
      return {
        pizza: {
          ...state.pizza,
          price:
            state.pizza.price > 3
              ? state.pizza.price - action.payload.price
              : 3,
          ingredients: [...state.pizza.ingredients].map((obj) => {
            if (obj.text === action.payload.text) {
              if (obj.total !== 0) {
                obj.total--;
              }
            }
            return obj;
          }),
        },
        newPizza: {},
      };

    case "reset":
      return {
        pizza: {
          ...state.pizza,
          price: 3,
          ingredients: [...state.pizza.ingredients].map((obj) => {
            obj.total = 0;
            return obj;
          }),
        },
        newPizza: {
          ...state.newPizza,
        },
      };

    case "saveItem":
      console.log(action.payload);
      return {
        newPizza: {
          ...state.pizza,
          // ...state.newPizza,
          id: action.payload,
        },
        pizza: {
          ...state.pizza,
          // ingredients: [...state.pizza.ingredients].map((obj) => {
          //   if (obj.total != 0) {
          //     obj.total = 0;
          //   }
          //   return obj;
          // }),
        },
      };
    default:
      return state;
  }
}
