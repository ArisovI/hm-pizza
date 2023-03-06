const initialState = {
  pizza: {
    price: 3.0,
    id: "",
    mainPicture: "./imgs/testo.jpg",
    ingredients: [
      {
        text: "cold cuts",
        price: 3,
        picture: "./imgs/anything.jpg",
        total: 0,
      },
      {
        text: "pepperoni",
        price: 2.5,
        total: 0,
        picture: "./imgs/barbeq.jpg",
      },
      {
        text: "feta",
        price: 1.5,
        total: 0,
        picture: "./imgs/meat.jpg",
      },
      {
        total: 0,
        text: "mozzarella",
        price: 1,
        picture: "./imgs/macarela.jpg",
      },
      {
        total: 0,
        text: "swiss cheese",
        price: 2,
        picture: "./imgs/cheese.jpg",
      },
      {
        text: "spices",
        price: 0.25,
        total: 0,
        picture: "./imgs/rice.jpg",
      },
      {
        text: "vegatables",
        price: 0.75,
        total: 0,
        picture: "./imgs/broc.jpg",
      },
    ],
  },
  newPizza: {
    price: 3.0,
    id: "",
    mainPicture: "./imgs/testo.jpg",
    ingredients: [
      {
        text: "cold cuts",
        price: 3,
        picture: "./imgs/anything.jpg",
        total: 1,
      },
      {
        text: "pepperoni",
        price: 2.5,
        total: 0,
        picture: "./imgs/barbeq.jpg",
      },
      {
        text: "feta",
        price: 1.5,
        total: 0,
        picture: "./imgs/meat.jpg",
      },
      {
        total: 0,
        text: "mozzarella",
        price: 1,
        picture: "./imgs/macarela.jpg",
      },
      {
        total: 0,
        text: "swiss cheese",
        price: 2,
        picture: "./imgs/cheese.jpg",
      },
      {
        text: "spices",
        price: 0.25,
        total: 0,
        picture: "./imgs/rice.jpg",
      },
      {
        text: "vegatables",
        price: 0.75,
        total: 0,
        picture: "./imgs/broc.jpg",
      },
    ],
  },
};

export default initialState;
