import React from 'react';
import { NavLink} from 'react-router-dom';
export const Header = () => (
    <header>
      <h1>Portfolio</h1>
      <NavLink to="/" activeClassName="selected" activeStyle={{fontWeight: 'bold',color: 'blue'}} exact={true}>Home</NavLink>
      <NavLink to="/portfolio" activeClassName="selected" activeStyle={{fontWeight: 'bold',color: 'yellow'}}>Portfolio</NavLink>
      <NavLink to="/contact" activeClassName="selected" activeStyle={{fontWeight: 'bold',color: 'gray'}}>Contact</NavLink>
     
    </header>
);

