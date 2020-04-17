import React from 'react'
import { Switch, Route } from "react-router-dom";
import Config from './pages/Config/Config';
import Home from './pages/Home';
import NoMatch from './components/NoMatch';
import SignIn from './pages/login/SignIn';

const Routes: React.FC = () => {
    return (
        <Switch>
            <Route path="/" component={Home} exact />
            <Route path="/configuracao" component={Config} />
            <Route path="/login" component={SignIn} exact/>            
            <Route path="*" component={NoMatch} />
            
        </Switch>
    )
}

export default Routes;