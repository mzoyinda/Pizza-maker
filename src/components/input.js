import React from 'react';

const Index = ({ recipe, ingredients, setIngredients}) => {
  const onChange = (event, name) => {
    console.log(localStorage);
    let newIngredients = JSON.parse(JSON.stringify(ingredients));
    newIngredients[name] = event;
    setIngredients(newIngredients);
    localStorage.setItem("ingredients", JSON.stringify(newIngredients));
  };
    return(
         <input
            type="checkbox"
            checked={ingredients["{recipe}"]}
            onChange={(event) => onChange(event.currentTarget.checked,"{recipe}")}
          />
    )
}

export default Index;