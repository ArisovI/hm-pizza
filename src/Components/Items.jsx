import React, { useContext } from "react";
import { Context } from "../context";
const Items = () => {
  const { state, dispatch } = useContext(Context);
  return (
    <>
      {state.newPizza.id === "asd"
        ? state.newPizza.ingredients.map((el, index) => (
            <div key={index} className="items 1">
              <div className="items-price">
                <h2>{el.text}</h2>
                <span>{el.price}$</span>
              </div>
              <div className="items-btns">
                <button>-</button>
                <span>{el.total}</span>
                <button>+</button>
              </div>
            </div>
          ))
        : state.pizza.ingredients.map((el, index) => (
            <div key={index} className="items 2">
              <div className="items-price">
                <h2>{el.text}</h2>
                <span>{el.price}$</span>
              </div>
              <div className="items-btns">
                <button
                  onClick={() => dispatch({ type: "delItem", payload: el })}
                >
                  -
                </button>
                <span>{el.total}</span>
                <button
                  onClick={() => dispatch({ type: "addItem", payload: el })}
                >
                  +
                </button>
              </div>
            </div>
          ))}
    </>
  );
};

export default Items;
