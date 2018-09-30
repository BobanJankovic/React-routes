import React from 'react';
import { BrowserRouter, Route, Switch} from 'react-router-dom';
export const PortfolioItem = (props) => (
    <div>
      Welcome this is project: {props.match.params.id}
    </div>
);

 