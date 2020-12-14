import React from 'react';
import {Card, CardDescription, Icon, Image} from 'semantic-ui-react';

const CocktailCard = (props) => {
  const { cocktail } = props
  const {numbersToLoop} = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]

  return (

    <Card>
    <Card.Content>
      <Card.Header
      textAlign='center'>
        {cocktail.strDrink}
      </Card.Header>
      <Image src={cocktail.strDrinkThumb}/>
      {cocktail.strMeasure1 ? <Card.Description raised>{cocktail.strMeasure1} of {cocktail.strIngredient1}</Card.Description> : null}      
      {cocktail.strMeasure2 ? <Card.Description>{cocktail.strMeasure2} of {cocktail.strIngredient2}</Card.Description> : null}      
      {cocktail.strMeasure3 ? <Card.Description>{cocktail.strMeasure3} of {cocktail.strIngredient3}</Card.Description> : null}      
      {cocktail.strMeasure4 ? <Card.Description>{cocktail.strMeasure4} of {cocktail.strIngredient4}</Card.Description> : null}      
      {cocktail.strMeasure5 ? <Card.Description>{cocktail.strMeasure5} of {cocktail.strIngredient5}</Card.Description> : null}      
      {cocktail.strMeasure6 ? <Card.Description>{cocktail.strMeasure6} of {cocktail.strIngredient6}</Card.Description> : null}      
      {cocktail.strMeasure7 ? <Card.Description>{cocktail.strMeasure7} of {cocktail.strIngredient7}</Card.Description> : null}      
      {cocktail.strMeasure8 ? <Card.Description>{cocktail.strMeasure8} of {cocktail.strIngredient8}</Card.Description> : null}      
      {cocktail.strMeasure9 ? <Card.Description>{cocktail.strMeasure9} of {cocktail.strIngredient9}</Card.Description> : null}      
      {cocktail.strMeasure10 ? <Card.Description>{cocktail.strMeasure10} of {cocktail.strIngredient10}</Card.Description> : null}      
      {cocktail.strMeasure11 ? <Card.Description>{cocktail.strMeasure11} of {cocktail.strIngredient11}</Card.Description> : null}      
      {cocktail.strMeasure12 ? <Card.Description>{cocktail.strMeasure12} of {cocktail.strIngredient12}</Card.Description> : null}      
      {cocktail.strMeasure13 ? <Card.Description>{cocktail.strMeasure13} of {cocktail.strIngredient13}</Card.Description> : null}      
      {cocktail.strMeasure14 ? <Card.Description>{cocktail.strMeasure14} of {cocktail.strIngredient14}</Card.Description> : null}      
      {cocktail.strMeasure15 ? <Card.Description>{cocktail.strMeasure15} 15 {cocktail.strIngredient15}</Card.Description> : null}      
      <Card.Description>{cocktail.strInstructions}</Card.Description>
    </Card.Content>
  </Card>
  )
}

export default CocktailCard;