import React, { useReducer, useEffect } from "react";

import { Context } from "./context";
import reducer from "./reducer";

//Components
import Product from "./Product";
import CreatePizza from "./Pages/CreatePizza";

//Pages
function App() {
  const [state, dispatch] = useReducer(reducer, Product);
  const value = { state, dispatch };
  // useEffect(() => {
  console.log("123");
  // }, []);
  return (
    <Context.Provider value={value}>
      <div className="app">
        <ul>
          <li>build your pizza</li>
          <li>ingredients</li>
        </ul>
        <CreatePizza />
      </div>
    </Context.Provider>
  );
}

export default App;
