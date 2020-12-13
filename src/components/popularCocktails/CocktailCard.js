import React from 'react';
import {Card, Icon, Image} from 'semantic-ui-react';

const CocktailCard = (props) => {
  const { cocktail } = props

  return (

    <Card>
    <Card.Content>
      <Card.Header>
        {cocktail.strDrink}
      </Card.Header>
    </Card.Content>
  </Card>
  )
}

export default CocktailCard;