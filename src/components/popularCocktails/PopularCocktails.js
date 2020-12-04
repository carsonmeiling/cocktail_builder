import React, { useState, useEffect } from 'react';
import axios from 'axios';


const PopularCocktails  = () => {

  const[cocktail, setCocktail] = useState({});

  const randomDrink = () => {

    
    axios.get("https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita", {
    })
    .then(res => {
      // console.log(res);
      setCocktail(res.data.drinks)
      console.log(cocktail)
      
    })
    .catch(err => {
      console.error(err);
    });
  }
    
  return(
    <div>
       
      <button onClick={randomDrink}>Random Drink</button> 
      
       
    </div> 
  )
}

export default PopularCocktails;