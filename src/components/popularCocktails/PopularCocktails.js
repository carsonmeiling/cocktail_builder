import React, { useState, useEffect } from 'react';
import axios from 'axios';


const PopularCocktails  = () => {

  const[cocktails, setCocktails] = useState({});

  const randomDrink = () => {

    
    axios.get("https://www.thecocktaildb.com/api/json/v1/1/random.php", {
    })
    .then(res => {
      console.log(res);
      setCocktails(res)
      
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