import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/Home";
import Checkout from "./components/Checkout";

function App() {
  const [ingredients, setIngredients] = useState({
    basil: false,
    cheese: false,
    mushroom: false,
    olive: false,
    pineapple: false,
    tomato: false,
  });

  
  useEffect(() => {
    const data = localStorage.getItem("ingredients");
    if (data) {
      setIngredients(JSON.parse(data));
    }
  }, []);


  
  return (
    <div>
      <Navbar />
      <div style={{backgroundColor:"#009e60"}}>
      <Router>
        <Switch>
          <Route exact path="/">
            <Home
              ingredients={ingredients}
              setIngredients={setIngredients}
            />
          </Route>
          <Route path="/checkout">
            <Checkout ingredients={ingredients} />
          </Route>
        </Switch>
      </Router>
      </div>
    </div>
  );
}

export default App;
