import React from 'react';
import { Menu, Header } from 'semantic-ui-react';
import {Link, withRouter} from 'react-router-dom';


const Navbar = () => (
  <div>
    <div>
      <Header
      className='title'
      textAlign='center'
      size='huge'
      >Get Your Cocktails Here</Header>
    </div>
  
    <div>
      <Menu
      inverted>
        <Link to='/'>
          <Menu.Item>
          Home
          </Menu.Item>
        </Link>
        <Link to='/popularCocktails'>
          <Menu.Item>
          Popular Cocktails
          </Menu.Item>
        </Link>
        <Link >
          <Menu.Item>
            Mocktails
          </Menu.Item>
        </Link>
        <Link >
          <Menu.Item>
            Random Drink Please
          </Menu.Item>
        </Link>
      </Menu>
    </div>
  </div>
)

export default Navbar;