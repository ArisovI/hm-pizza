import React, { useContext } from "react";
import Items from "../Components/Items";
import { Context } from "../context";
const CreatePizza = () => {
  const { state, dispatch } = useContext(Context);

  return (
    <>
      <div className="app-bottom">
        <div className="app-bottom__left">
          <h1>your pizza:</h1>
          <div className="content">
            <img src={state.pizza.mainPicture} alt="" />
            {state.pizza.ingredients.map((el, index) => (
              <div
                style={{ display: el.total > 0 ? "block" : "none" }}
                key={index}
                className="content-pic"
              >
                <img src={el.picture} alt={el.picture} />
              </div>
            ))}
          </div>
        </div>
        <div className="app-bottom__right">
          <div className="title">
            <h2>your pizza</h2>
            <span>{state.pizza.price}$</span>
            <button onClick={() => dispatch({ type: "resetIngredients" })}>
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
              <button>save pizza</button>
              <button>checkout</button>
            </div>
            <div className="btns-load">
              <button>load pizza</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CreatePizza;
