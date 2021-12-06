import React from "react";
import Logo from "../assets/pizza logo.png";


const Index = () => {
  return (
    <div className="navContainer">
      <div className="navContent">
        <a href="/"><img src={Logo} alt="pizzalogo" height="40px" /></a>
        <div className="brand">
          Pizza Maker
        </div>
      </div>
    </div>
  );
}

export default Index;