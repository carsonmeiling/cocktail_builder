import React, { useState } from 'react';
import axios from 'axios';
import {Form, Button, Label, Container} from 'semantic-ui-react';


const PopularCocktails  = () => {

  const[cocktails, setCocktails] = useState([]);
  const[loading, setLoading] = useState(true);
  const[searchTerm, setSearchTerm] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault();
    randomDrink(searchTerm)
 }

  const randomDrink = (searchTerm) => {
    axios.get(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${searchTerm}`,
    )
    .then(res => {
      setLoading(false)
      setCocktails(res.data.drinks)
      console.log(cocktails)  
    })
    .catch(err => {
      setLoading(true)
      console.error(err);
    });
  }
    
  return(
    <Container>
       <Form 
        onSubmit = {handleSubmit}>
         <Form.Field>
            <Label 
              size='large'>
              Find a Popular Cocktail
            </Label>
            <Form.Input 
              className="input"
              type="text" 
              name="term"
              placeholder="Margarita, Russian ..."
              value={searchTerm}
              onChange={e=>setSearchTerm(e.target.value)}
            />
            </Form.Field>
            <Button type="submit" >Search</Button>
      </Form>
       {
        loading ? 
          <p>Loading</p> :
          <ul>
          {cocktails.map((cocktail, index) => 
          (<ol key={index}>{cocktail.strDrink}</ol>
            ))}
        </ul> 
      }
       
    </Container> 
  )
}

export default PopularCocktails;