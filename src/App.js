import logo from './logo.svg';
import './App.css';
import PopularCocktails from '../src/components/popularCocktails/PopularCocktails';


function App() {
  return (
    <div>
      <header>
        <h1>COCKTAILS</h1>
      </header>
      <body>
        <h3>Build a cocktail</h3>
        <h2>Search for a Cocktail</h2>
          <PopularCocktails />
      </body>
      <footer>
        <p>By Carson Meiling</p>
      </footer>
    </div>
  );
}

export default App;
