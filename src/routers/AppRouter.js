import React from 'react';
import { BrowserRouter, Route, Switch} from 'react-router-dom';

import {Home} from '../components/Home';
import {Portfolio} from '../components/Portfolio'; 
import {Contact} from '../components/Contact';  
import {PortfolioItem} from '../components/PortfolioItem';



import {NoPage} from '../components/Nopage';
import {Header} from '../components/Header';


export const AppRouter = () => (
  <BrowserRouter>
    <div>
      <Header />
      <Switch>
        <Route path="/" component={Home} exact={true}/>
        <Route path="/portfolio" component={Portfolio} exact={true} />
        <Route path="/contact" component={Contact} />
        <Route path="/portfolio/:id" component={PortfolioItem} />
        <Route component={NoPage} />
      </Switch>
    </div>
  </BrowserRouter>
);

