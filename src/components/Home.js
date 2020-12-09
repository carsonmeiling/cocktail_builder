import PopularCocktails from './popularCocktails/PopularCocktails';


function Home() {
  return (
    <div className='App'>
      <header>
        <div className='header'>
          <h1 className='title'>COCKTAILS</h1>
          <div className='topNav'>
            <a>Home</a>
            <a>Popular</a>
            <a>Knock Your Sox Off</a>
          </div>
        </div>
      </header>
      <body>
        <div className='body'>
          <h2>Search Popular Cocktails</h2>
            <PopularCocktails />
        </div>
      </body>
      <footer className='footer'>
        <p>By Carson Meiling</p>
      </footer>
    </div>
  );
}

export default Home;
