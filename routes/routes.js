import React from 'react';
import {BrowserRouter, Route, Switch, Link} from 'react-router-dom';
import App from '../containers/App';
import Lines from '../containers/Lines';
import Last from '../containers/Last';
import Data from '../containers/Data';

export default () => {
    return (
    <BrowserRouter>
        <Switch>
            <Route exact path='/' component={App}/>
            <Route path='/about' component={Lines}/>
            <Route path='/data' component={Data}/>
            <Route path='/last' component={Last}/>
        </Switch>
    </BrowserRouter>
    )
}