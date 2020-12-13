import './App.css';
import React from 'react';
import {Route} from 'react-router-dom';
import Home from './components/Home'
import PopularCocktails from './components/popularCocktails/PopularCocktails';


const App = () => (
  <>
    <Route exact path="/" component={Home} />
    <Route exact path='/popularCocktails' component={PopularCocktails} />
  </>
);

export default App;
