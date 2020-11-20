import React, { useState } from 'react';
import axios from 'axios';


const PopularCocktails  = () => {

  const[cocktails, setCocktails] = useState({});

  axios.get("https://www.thecocktaildb.com/api/json/v1/1/random.php", {
    
  })
  .then(res => {
    console.log(res);
    setCocktails(res)
    debugger
  })
  .catch(err => {
    console.error(err);
  });
    
  return(
    <div>
      <p>Future drink list</p>
    </div> 
  )
}

export default PopularCocktails;