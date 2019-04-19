import React, {Component, Fragment} from 'react';
import ReactDOM from 'react-dom';

import Header from './includes/Header';
import ActivityPlanner from './activity/ActivityPlanner';
import Alerts from './includes/Alerts'

import {Provider as AlertProvider, transitions} from 'react-alert';
import AlertTemplate from 'react-alert-template-basic';

import {Provider} from 'react-redux';
import store from '../store'

// Alert Options
const alertOptions = {
    timeout: 2500,
    position: 'bottom center',
    transition: transitions.SCALE
};

class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <AlertProvider template={AlertTemplate} {...alertOptions}>
                    <Fragment>
                        <div className="container">
                            <Header/>
                            <ActivityPlanner/>
                        </div>
                       <Alerts/>
                    </Fragment>
                </AlertProvider>
            </Provider>
        )
    }
}

ReactDOM.render(<App/>, document.getElementById('AppRoot'));