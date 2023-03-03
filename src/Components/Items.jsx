import React, { useContext } from "react";
import { Context } from "../context";
const Items = () => {
  const { state, dispatch } = useContext(Context);
  return (
    <>
      {state.ingredients.map((el, index) => (
        <div key={index} className="items">
          <div className="items-price">
            <h2>{el.text}</h2>
            <span>{el.price}$</span>
          </div>
          <div className="items-btns">
            <button
              onClick={() => dispatch({ type: "delIngredients", payload: el })}
            >
              -
            </button>
            <span>{el.total}</span>
            <button
              onClick={() => dispatch({ type: "addIngredients", payload: el })}
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
