import React, { useContext, useState } from "react";
import Items from "../Components/Items";
import { Context } from "../context";
const id = "";
const CreatePizza = () => {
  const { state, dispatch } = useContext(Context);
  const [load, setLoad] = useState(false);
  const [order, setOrder] = useState(false);
  const [newItem, setNewItem] = useState("");
  const [bag, setBag] = useState(false);

  function loadItem() {
    setLoad(!load);
  }
  function choiceItem() {
    setNewItem(newItem);
    setBag(state.newPizza.id === newItem);
    console.log(state.newPizza);
  }

  function saveItem() {
    let alphabet = "абвгдеёжзийклмнопрстуфхцчшщъыьэюя";
    let randomString = "";

    while (randomString.length < 6) {
      let index = Math.floor(Math.random() * alphabet.length);
      randomString += alphabet[index];
    }
    dispatch({ type: "saveItem", payload: randomString });
    console.log(randomString);
  }

  return (
    <>
      <div className="app-bottom">
        <div className="app-bottom__left">
          <h1>your pizza:</h1>
          <div className="content">
            <img src={state.pizza.mainPicture} alt="" />
            {bag
              ? state.newPizza.ingredients.map((obj, i) => {
                  return (
                    <div key={i} className="content-item 1 ">
                      <img
                        style={{ display: obj.total > 0 ? "block" : "none" }}
                        src={obj.picture}
                        alt={obj.picture}
                      />
                    </div>
                  );
                })
              : state.pizza.ingredients.map((obj, i) => {
                  return (
                    <div
                      key={i}
                      style={{ display: obj.total > 0 ? "block" : "none" }}
                      className="content-item 2"
                    >
                      <img src={obj.picture} alt="" />
                    </div>
                  );
                })}

            {/* state.pizza.ingredients.map((obj, i) => {
                  return (
                    <div key={i} className="content-item 2">
                      <img
                        style={{ display: obj.total > 0 ? "block" : "none" }}
                        src={obj.picture}
                        alt={obj.picture}
                      />
                    </div>
                  ) */}
          </div>
        </div>
        <div className="app-bottom__right">
          <div className="title">
            <h2>your pizza</h2>
            <span>{state.pizza.price}$</span>
            <button onClick={() => dispatch({ type: "reset" })}>
              reset pizza
            </button>
          </div>
          <Items />
          <div className="btns">
            <div className="btns-total">
              <h2>total</h2>
              <span>{state.pizza.price}$</span>
            </div>
            <div className="btns-space">
              <button onClick={saveItem}>save pizza</button>
              <button onClick={() => setOrder(!order)}>checkout</button>
            </div>
            <div className="btns-load">
              <button onClick={loadItem}>load pizza</button>
            </div>
          </div>
        </div>
      </div>
      {load ? (
        <div className="load">
          <div className="load-content">
            <span onClick={() => setLoad(!load)}>x</span>
            <h3>Load a pizza using a configuration number:</h3>
            <div className="load-content__label">
              <input
                type="text"
                value={newItem}
                onChange={(e) => setNewItem(e.target.value)}
              />
              <button onClick={choiceItem}>Submit</button>
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
      {order ? (
        <div className="checkout">
          <div className="checkout-content">
            <h2>Your Order</h2>
            <span>The pizza has the following ingredients:</span>
            <ul>
              <li>Cold cuts: 1</li>
              <li>Cold cuts: 1</li>
              <li>Cold cuts: 1</li>
            </ul>
            <h3>Total price: 10.50$</h3>
            <span>Continue to checkout?</span>
            <div className="checkout-content__btn">
              <button>Cancel</button>
              <button onClick={() => setOrder(!order)}>Continue</button>
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
    </>
  );
};

export default CreatePizza;
