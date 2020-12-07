import logo from './logo.svg';
import './App.css';
import PopularCocktails from '../src/components/popularCocktails/PopularCocktails';


function App() {
  return (
    <div className='App'>
      <header>
        <h1>COCKTAILS</h1>
      </header>
      <body>
        <h2>Search Popular Cocktails</h2>
          <PopularCocktails />
      </body>
      <footer className='footer'>
        <p>By Carson Meiling</p>
      </footer>
    </div>
  );
}

export default App;
