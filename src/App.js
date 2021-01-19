import React, { useState, useEffect } from 'react';
import './App.css';
import Home from './components/Home.js';
import Order from './components/Order.js';
import {BrowserRouter, Switch, Route} from 'react-router-dom'


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
      <BrowserRouter>
        <Switch>
          <Route eaxct-path="/"> <Home  ingredients={ingredients}
              setIngredients={setIngredients} /> </Route>
          <Route path="/order"> <Order/> </Route>
      </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
