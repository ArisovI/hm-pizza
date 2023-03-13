import React, { useContext } from "react";
import { Context } from "../Context";
import Ingredients from "./Ingredients";
const HeaderBottom = () => {
  const { state, dispatch, random, setCheckout, setLoad, randomID } =
    useContext(Context);
  return (
    <div className="app-bottom">
      <div className="app-bottom__content">
        <ul>
          <li>
            <img src={state[0].pizza.mainPicture} alt="Тесто" />
          </li>
          {state[0].pizza.ingredients.map((obj, i) => {
            if (obj.total > 0) {
              return (
                <li key={i}>
                  <img src={obj.picture} alt={obj.picture} />
                </li>
              );
            } else {
              return null;
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
        <Ingredients />
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
          <marquee behavior="" direction="">
            <span>Your id code {randomID}</span>
          </marquee>
        </div>
      </div>
    </div>
  );
};

export default HeaderBottom;
