import './App.css';
import React from 'react';
import {Route } from 'react-router-dom';
import Home from './components/Home'
import Navbar from './components/Navbar'
import PopularCocktails from './components/popularCocktails/PopularCocktails';
import 'semantic-ui-css/semantic.min.css'
import { Container } from 'semantic-ui-react';


const App = () => (
  <>
    <Navbar />
    {/* <Container> */}
    <Route exact path="/" component={Home} />
    <Route exact path='/popularCocktails' component={PopularCocktails} />
    {/* </Container> */}
  </>
);

export default App;
