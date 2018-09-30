import React from 'react';
import { Link } from 'react-router-dom';
import {PortfolioItem} from '../components/PortfolioItem';
export const Portfolio = (props) => (
    <div>
      Welcome this is Portfolio page
      This is what i have done :
      <Link to="/portfolio/1" >Project 1</Link>
      <Link to="/portfolio/2" >Project 2</Link>
    </div>
);

 