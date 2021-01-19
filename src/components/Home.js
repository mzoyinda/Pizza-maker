import React from 'react';
import { useHistory } from "react-router-dom";
import { motion } from "framer-motion";
import Navbar from './Navbar';
import Animation from './Animation'
import Cheese from "../assets/BaseCheese.png";
import Base from "../assets/PizzaBase.png";
import Olive from "../assets/Olive.png";
import Pineapple from "../assets/Pineapple.png";
import Mushroom from "../assets/Mushroom.png";
import Basil from "../assets/Basil.png";
import Tomato from "../assets/Tomato.png";
import Label from './label';
import Input from './input';


const Index = ({ingredients, setIngredients}) => {   
    const onChange = (event, name) => {
        console.log(localStorage);
        let newIngredients = JSON.parse(JSON.stringify(ingredients));
        newIngredients[name] = event;
        setIngredients(newIngredients);
        localStorage.setItem("ingredients", JSON.stringify(newIngredients));
      };
    let history = useHistory(); 
    return (
        <div>
            <Navbar/>
            <div className="pizzaContainer">
                <div className="pizzaGrid">
                    <div className="pizzaMaking">
                       <Animation className="recipeImg ingredients z4" recipe="basil" ingredients={ingredients}>
                            <img src={Basil} alt="Pizza Base" className="recipeImg"/>
                        </Animation>
                        <Animation className="recipeImg ingredients z4" recipe="olive" ingredients={ingredients}>
                            <img src={Olive} alt="Pizza Base" className="recipeImg"/>
                        </Animation>
                        <Animation className="recipeImg ingredients z3" recipe="pineapple" ingredients={ingredients}>
                            <img src={Pineapple} alt="Pizza Base" className="recipeImg"/>
                        </Animation>
                            <Animation className="recipeImg ingredients z4" recipe="tomato" ingredients={ingredients}>
                            <img src={Tomato} alt="Tomato" className="recipeImg"/>
                        </Animation>
                        <Animation className="recipeImg ingredients z1" recipe="cheese" ingredients={ingredients}>
                            <img src={Cheese} alt="Cheese" className="recipeImg"/>
                        </Animation>
                        <Animation className="recipeImg ingredients z4" recipe="mushroom" ingredients={ingredients}>
                            <img src={Mushroom} alt="Pizza Base" className="recipeImg"/>
                        </Animation>
                        <motion.div transition={{ duration: 1 }} className="">
                            <img src={Base} alt="Pizza Base" className="recipeImg" />
                        </motion.div>
                    </div>
                </div>
                <div style={{ flex: 1, padding: 40 }}>
                    <Label title="Pineapple">
                    <input
            type="checkbox"
            checked={ingredients["pineapple"]}
            onChange={(event) =>
              onChange(event.currentTarget.checked, "pineapple")
            }
          />
                    </Label>
                    <Label title="Basil">
                   <input
            type="checkbox"
            checked={ingredients["basil"]}
            onChange={(event) =>
              onChange(event.currentTarget.checked, "basil")
            }
          />
                    </Label>
                    <Label title="Olive">
                    <Input recipe="olive" ingredients={ingredients} setIngredients={setIngredients} />
                    </Label>
                    <Label title="Tomato">
                    <Input recipe="tomato" ingredients={ingredients} setIngredients={setIngredients} />
                    </Label>
                    <Label title="Mushroom">
                    <Input recipe="mushroom" ingredients={ingredients} setIngredients={setIngredients} />
                    </Label>
                    <Label title="Cheese">
                    <Input recipe="cheese" ingredients={ingredients} setIngredients={setIngredients} />
                    </Label>
                    <button
                    onClick={() => history.push("/checkout")}
                    className="proceedToCheckout"
                    >
                    Proceed to Checkout
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Index;