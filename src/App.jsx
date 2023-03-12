import React, { useReducer, useState } from "react";
import reducer from "./reducer";
import Product from "./Product";

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
      console.log('123');
    }
  };

  return (
    <div className="app">
      <div className="app-top">
        <ul>
          <li>Build pizza</li>
          <li>Ingredients</li>
        </ul>
      </div>
      <div className="app-bottom">
        <div className="app-bottom__content">
          <ul>
            <li>
              <img src={state[0].pizza.mainPicture} alt="" />
            </li>
            {state[0].pizza.ingredients.map((obj, i) => {
              if (obj.total > 0) {
                return (
                  <li key={i}>
                    <img src={obj.picture} alt={obj.picture} />
                  </li>
                );
              }
            })}
          </ul>
        </div>
        <div className="app-bottom__ingredients">
          <div className="title">
            <h2>Your pizza</h2>
            <span>{state[0].pizza.price}</span>
            <button onClick={() => dispatch({ type: "reset" })}>
              Reset pizza
            </button>
          </div>
          <ul className="ingredients">
            {state[0].pizza.ingredients.map((obj, i) => {
              return (
                <li key={i}>
                  <div>
                    <h3>{obj.text}</h3>
                    <span>{obj.price}</span>
                  </div>
                  <div>
                    <button onClick={() => del(obj)}>-</button>
                    <span>{obj.total}</span>
                    <button onClick={() => add(obj)}>+</button>
                  </div>
                </li>
              );
            })}
          </ul>
          <div className="total">
            <h3>Total</h3>
            <span>{state[0].pizza.price}</span>
          </div>
          <div className="btns">
            <div className="btns-top">
              <button onClick={random}>Save pizza</button>
              <button onClick={() => setCheckout(true)}>Checkout pizza</button>
            </div>
            <div className="btns-bottom">
              <button onClick={() => setLoad(true)}>Load pizza</button>
            </div>
          </div>
          <div className="random">
            <span>Your id code {randomID}</span>
          </div>
        </div>
      </div>

      {load ? (
        <div className="load">
          <div className="load-content">
            <span onClick={() => setLoad(false)}>x</span>
            <h3>Your id coupon:</h3>
            <div className="load-content__coupon">
              <input
                value={randomCoupon}
                onChange={(e) => setRandomCoupon(e.target.value)}
                type="text"
              />
              <button onClick={() => loadPizza()}>Click</button>
            </div>
          </div>
        </div>
      ) : null}

      {checkout ? (
        <div className="checkout">
          <div className="checkout-content">
            <h2>Your Order</h2>
            <span>The pizza has the following ingredients:</span>
            <ul>
              {state[0].pizza.ingredients.map((obj, i) => {
                if (obj.total > 0) {
                  return (
                    <li key={i}>
                      {obj.text}: {obj.total}
                    </li>
                  );
                }
              })}
            </ul>

            <h3>Total price: {state[0].pizza.price}$</h3>
            <span>Continue to checkout?</span>
            <div className="checkout-content__btn">
              <button onClick={() => setCheckout(false)}>Cancel</button>
              <button onClick={() => setCheckoutInfo(true)}>Continue</button>
            </div>
          </div>
        </div>
      ) : null}

      {checkoutInfo ? (
        <div className="checkout-info">
          <div className="checkout-info__ingredients">
            <h2>Ingredient info</h2>
            <ul>
              {state[0].pizza.ingredients.map((obj, i) => {
                if (obj.total > 0) {
                  return (
                    <li key={i}>
                      <span>{obj.text}</span>
                      <img src={obj.picture} alt="" />
                      <span>{obj.total}</span>
                    </li>
                  );
                }
              })}
            </ul>
          </div>
          <h2 className="title">Checkout info:</h2>
          <div className="name">
            <span>Name:</span>
            <input type="text" />
          </div>
          <div className="email">
            <span>Email:</span>
            <input type="email" />
          </div>
          <div className="delivery">
            <span>Choose delivery method</span>
            <select name="" id="">
              <option value="">Yes</option>
              <option value="">No</option>
            </select>
          </div>
          <div className="note">
            <span>Additional notes:</span>
            <textarea name="" id="" cols="40" rows="10"></textarea>
          </div>
          <div className="regular">
            <span>Are you a regular client?</span>
            <input type="radio" name="asd" id="a1" />
            <label htmlFor="a1">Yes</label>
            <input type="radio" name="asd" id="a2" />
            <label htmlFor="a2">No</label>
          </div>
          <div className="code">
            <span>Do you have a coupon code?</span>
            <input type="checkbox" />
          </div>
          <div className="coupon">
            <span>Coupon:</span>
            <input type="text" />
          </div>
          <div className="back">
            <button>Reset</button>
            <button onClick={allFalse}>Submit</button>
          </div>
        </div>
      ) : null}
    </div>
  );
}

export default App;
