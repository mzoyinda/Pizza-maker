import React from "react";
import Logo from "../assets/pizza logo.png";


const Index = () => {
  return (
    <div className="navContainer">
      <div className="navContent">
        <img src={Logo} alt="pizzalogo" height="40px" />
        <div className="brand">
          Pizza Customization
        </div>
      </div>
    </div>
  );
}

export default Index;