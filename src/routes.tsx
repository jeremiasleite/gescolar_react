import React from 'react'
import { Switch, Route } from "react-router-dom";
import Config from './pages/Config/Config';
import Home from './pages/Home';
import NoMatch from './components/NoMatch';

const Routes: React.FC = () => {
    return (
        <Switch>
            <Route path="/configuracao" component={Config} />
            <Route path="/" component={Home} exact />
            <Route path="*" component={NoMatch} />
        </Switch>
    )
}

export default Routes;