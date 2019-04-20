import React, {Component, Fragment} from 'react';
import {Provider as AlertProvider, transitions} from 'react-alert';
import AlertTemplate from 'react-alert-template-basic';
import ReactDOM from 'react-dom';
import {HashRouter as Router, Route, Switch, Redirect} from "react-router-dom";
import {Provider} from 'react-redux';


import Alerts from './includes/Alerts';
import PrivateRoute from './utils/PrivateRoute'
import Login from './authentication/Login'
import Signup from './authentication/Signup'
import ActivityPlanner from './activity/ActivityPlanner';

import store from '../store'
import {loadUser} from "../actions/authenticate";

// Alert Options
const alertOptions = {
    timeout: 2500,
    position: 'bottom right',
    transition: transitions.SCALE
};

class App extends Component {

    componentDidMount() {
        store.dispatch(loadUser())
    }

    render() {
        return (
            <Provider store={store}>
                <AlertProvider template={AlertTemplate} {...alertOptions}>
                    <Router>
                        <Fragment>
                            {/*<Alerts/>*/}
                            <div className="container">
                                <Switch>
                                    <Route exact path={"/login"} component={Login}/>
                                    <Route exact path={"/signup"} component={Signup}/>
                                    <PrivateRoute exact path={"/"} component={ActivityPlanner}/>
                                </Switch>
                            </div>
                        </Fragment>
                    </Router>
                </AlertProvider>
            </Provider>
        )
    }
}

ReactDOM.render(<App/>, document.getElementById('AppRoot'));