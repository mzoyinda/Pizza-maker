import React from "react";
import Cheese from "../assets/BaseCheese.png";
import Base from "../assets/PizzaBase.png";
import Olive from "../assets/Olive.png";
import Pineapple from "../assets/Pineapple.png";
import Mushroom from "../assets/Mushroom.png";
import Basil from "../assets/Basil.png";



import Tomato from "../assets/Tomato.png";
import { motion } from "framer-motion";
import { useHistory } from "react-router-dom";

export default function Customize({ ingredients, setIngredients }) {
  let history = useHistory();

  let newIngredients = JSON.parse(JSON.stringify(ingredients));
  
 
  const handleChange = (e) => {
    const { name, checked} = e.currentTarget;
    newIngredients[name] = checked;           //change the value of the ingredients to what 'checked' is..
    setIngredients(newIngredients);
    localStorage.setItem("ingredients", JSON.stringify(newIngredients));
  };

  const clearingredients=()=>{
    newIngredients["pineapple"] = false
      ;
    newIngredients["basil"]=false;
    newIngredients["olive"]=false;
    newIngredients["mushroom"]=false;
    newIngredients["cheese"]=false;
    newIngredients["tomato"]=false;
    setIngredients(newIngredients);
    localStorage.setItem("ingredients", JSON.stringify(newIngredients));
    localStorage.clear();
  }
  return (
    <div style={{ display: "flex" }}>
      <div style={{ flex: 1, padding: 40 }}>
        <div style={{ maxHeight: 500, maxWidth: 500, position: "relative" }}>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{
              y: ingredients["basil"] ? 100 : -100,
              opacity: ingredients["basil"] ? 1 : 0,
            }}
            transition={{ duration: 1 }}
            className="ingredients z4"
          >
            <img src={Basil} alt="Pizza Base" height="100%" width="100%" />
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{
              y: ingredients["olive"] ? 100 : -100,
              opacity: ingredients["olive"] ? 1 : 0,
            }}
            transition={{ duration: 1 }}
            className="ingredients z4"
          >
            <img src={Olive} alt="Pizza Base" height="100%" width="100%" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{
              y: ingredients["pineapple"] ? 100 : -100,
              opacity: ingredients["pineapple"] ? 1 : 0,
            }}
            transition={{ duration: 1 }}
            className="ingredients z3"
          >
            <img src={Pineapple} alt="Pizza Base" height="100%" width="100%" />
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{
              y: ingredients["tomato"] ? 100 : -100,
              opacity: ingredients["tomato"] ? 1 : 0,
            }}
            transition={{ duration: 1 }}
            className="ingredients z4"
          >
            <img src={Tomato} alt="Tomato" height="100%" width="100%" />
          </motion.div>
          <motion.div
            initial={{ scale: 0 }}
            animate={{
              // y: ingredients["cheese"] ? 100 : -100,
              // opacity: ingredients["cheese"] ? 1 : 0,
              scale: ingredients["cheese"] ? 1 : 0,
            }}
            transition={{ duration: 0.3 }}
            className="cheese z1"
          >
            <img src={Cheese} alt="Cheese" height="100%" width="100%" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{
              y: ingredients["mushroom"] ? 100 : -100,
              opacity: ingredients["mushroom"] ? 1 : 0,
            }}
            transition={{ duration: 1 }}
            className="ingredients z4"
          >
            <img src={Mushroom} alt="Pizza Base" height="100%" width="100%" />
          </motion.div>

          <motion.div transition={{ duration: 1 }} className="">
            <img src={Base} alt="Pizza Base" height="100%" width="100%" />
          </motion.div>
        </div>
      </div>
      <div style={{ flex: 1, padding: 40,color:"#fff" }}>
        <label className="container-checkbox">
          Pineapple
          <input
            type="checkbox"
            checked={ingredients["pineapple"]}
            name="pineapple"
            onChange={handleChange}
          />
          <span className="checkmark"></span>
        </label>
        <label className="container-checkbox">
          Basil
          <input
            type="checkbox"
            checked={ingredients["basil"]}    //to still maintain the value of its ingredients when refreshed.
            name="basil"
            onChange={handleChange}
          />
          <span className="checkmark"></span>
        </label>
        <label className="container-checkbox">
          Olive
          <input
            type="checkbox"
            checked={ingredients["olive"]}
            name="olive"
            onChange={handleChange}
          />
          <span className="checkmark"></span>
        </label>
        <label className="container-checkbox">
          Tomato
          <input
            type="checkbox"
            checked={ingredients["tomato"]}
            name="tomato"
            onChange={handleChange}
          />
          <span className="checkmark"></span>
        </label>
        <label className="container-checkbox">
          Mushroom
          <input
            type="checkbox"
            checked={ingredients["mushroom"]}
            name="mushroom"
            onChange={handleChange}
          />
          <span className="checkmark"></span>
        </label>
        <label className="container-checkbox">
          Cheese
          <input
            type="checkbox"
            checked={ingredients["cheese"]}
            name="cheese"
            onChange={handleChange}
          />
          <span className="checkmark"></span>
        </label>
        <button
          onClick={() => history.push("/checkout")}
          className="proceedToCheckout"
        >
          Proceed to Checkout
        </button>
        <button
        onClick={()=>clearingredients()}
        className="proceedToCheckout"
        style={{ marginLeft: 10 }}
        >Clear ingredients</button>
      </div>
    </div>
  );
}
