import React, { useReducer, useState } from "react";

import Checkout from "./Components/Checkout";
import CheckoutInfo from "./Components/CheckoutInfo";
import HeaderTop from "./Components/HeaderTop";
import Load from "./Components/Load";

import Product from "./Product";
import reducer from "./reducer";

import { Context } from "./Context";
import HeaderBottom from "./Components/HeaderBottom";

function App() {
  const [state, dispatch] = useReducer(reducer, Product);
  const [load, setLoad] = useState(false);
  const [checkout, setCheckout] = useState(false);
  const [checkoutInfo, setCheckoutInfo] = useState(false);
  const [randomID, setRandomID] = useState("");
  const [randomCoupon, setRandomCoupon] = useState("");

  const add = (obj) => {
    dispatch({ type: "add", payload: obj });
  };
  const del = (obj) => {
    dispatch({ type: "del", payload: obj });
  };
  const allFalse = () => {
    setCheckout(false);
    setCheckoutInfo(false);
  };

  const random = () => {
    let alphabet = "абвгдеёжзийклмнопрстуфхцчшщъыьэюя";
    let random = "";

    while (random.length < 9) {
      let index = Math.floor(Math.random() * alphabet.length);
      random += alphabet[index];
    }
    setRandomID(random);
    dispatch({ type: "new", payload: random });
  };

  const loadPizza = () => {
    // setLoad(false);
    if (randomCoupon === randomID) {
      dispatch({ type: "load", payload: randomID });
      console.log("123");
    }
  };

  const value = {
    state,
    dispatch,
    del,
    add,
    random,
    setCheckout,
    setLoad,
    randomID,
  };

  return (
    <Context.Provider value={value}>
      <div className="app">
        <HeaderTop />
        <HeaderBottom />

        {load ? (
          <Load
            setLoad={setLoad}
            setRandomCoupon={setRandomCoupon}
            loadPizza={loadPizza}
            randomCoupon={randomCoupon}
          />
        ) : null}

        {checkout ? (
          <Checkout
            setCheckout={setCheckout}
            setCheckoutInfo={setCheckoutInfo}
            state={state}
          />
        ) : null}

        {checkoutInfo ? (
          <CheckoutInfo allFalse={allFalse} state={state} />
        ) : null}
      </div>
    </Context.Provider>
  );
}

export default App;
