const initialState = [
  {
    pizza: {
      price: 3.0,
      id: "123",
      mainPicture: "./imgs/testo.jpg",
      ingredients: [
        {
          text: "Cold cuts",
          price: 3,
          picture: "./imgs/anything.jpg",
          total: 0,
        },
        {
          text: "Pepperoni",
          price: 2.5,
          total: 0,
          picture: "./imgs/barbeq.jpg",
        },
        {
          text: "Feta",
          price: 1.5,
          total: 0,
          picture: "./imgs/meat.jpg",
        },
        {
          total: 0,
          text: "Mozzarella",
          price: 1,
          picture: "./imgs/macarela.jpg",
        },
        {
          total: 0,
          text: "Swiss cheese",
          price: 2,
          picture: "./imgs/cheese.jpg",
        },
        {
          text: "Spices",
          price: 0.25,
          total: 0,
          picture: "./imgs/rice.jpg",
        },
        {
          text: "Vegatables",
          price: 0.75,
          total: 0,
          picture: "./imgs/broc.jpg",
        },
      ],
    },
  },
];

export default initialState;
