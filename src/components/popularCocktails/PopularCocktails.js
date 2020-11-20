import React, { useState } from 'react';


const PopularCocktails  = () => {

  const[cocktails, setCocktails] = useState({});

  fetch("https://www.thecocktaildb.com/api/json/v1/1/search.php?f=a", {
    "method": "GET",
    // "headers": {
    //   "x-rapidapi-key": "0a157b1b2emsh1de672134471601p14a7e7jsn8ee1f917a58b",
    //   "x-rapidapi-host": "the-cocktail-db.p.rapidapi.com"
    // }
  })
  .then(response => {
    console.log(response);
    setCocktails(response)
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