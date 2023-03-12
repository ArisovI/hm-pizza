export default function (state, action) {
  const newObj = [];
  switch (action.type) {
    case "add":
      return [
        {
          pizza: {
            ...state[0].pizza,
            price: state[0].pizza.price + action.payload.price,
            ingredients: [...state[0].pizza.ingredients].map((obj) => {
              if (obj === action.payload) {
                obj.total++;
              }
              return obj;
            }),
          },
        },
        // {}

      ];

    case "del":
      return [
        {
          pizza: {
            ...state[0].pizza,
            price:
              action.payload.total > 0
                ? state[0].pizza.price - action.payload.price
                : state[0].pizza.price,
            ingredients: [...state[0].pizza.ingredients].map((obj) => {
              if (obj === action.payload) {
                if (obj.total > 0) {
                  obj.total--;
                }
              }
              return obj;
            }),
          },
        },
        // {}

      ];

    case "reset":
      return [
        {
          pizza: {
            ...state[0].pizza,
            price: 3.0,
            ...state[0].pizza.ingredients.map((obj) => {
              obj.total = 0;
            }),
          },
        },
        // {}
      ];

    case "new":
      const newObj = state;
      newObj[0].pizza.id = action.payload;

      const oldObj = JSON.parse(JSON.stringify(state));
      state = oldObj;
      oldObj[0].pizza.price = 3;
      oldObj[0].pizza.id = "";
      oldObj[0].pizza.ingredients.map((el) => {
        el.total = 0;
      });
      state.push(newObj[0]);

      return state;

    case "load":
      // state.shift(1);
      if (state[1].pizza.id === action.payload) {
        state[0] = state[1];
        return state;
      }
      console.log(state);

    default:
      return state;
  }
}
