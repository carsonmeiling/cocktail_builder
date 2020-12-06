import React, { useState, useEffect } from 'react';
import axios from 'axios';


const PopularCocktails  = () => {

  const[cocktails, setCocktails] = useState([]);
  const[loading, setLoading] = useState(true);

  const randomDrink = () => {

    
    axios.get("https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita", {
    })
    .then(res => {
      setLoading(false)
      setCocktails(res.data.drinks)
      console.log(cocktails)
      
    })
    .catch(err => {
      console.error(err);
      

    });
  }
    
  return(
    <div>
       
      <button onClick={randomDrink}>Random Drink</button> 
      {
        loading ? 
          <p>Loading</p> :
          <ul>
          {cocktails.map((cocktail, index) => 
          (<ol key={index}>{cocktail.strDrink}</ol>
            ))}
        </ul> 
      }
       
    </div> 
  )
}

export default PopularCocktails;