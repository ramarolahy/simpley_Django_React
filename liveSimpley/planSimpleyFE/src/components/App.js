import React, {Component, Fragment} from 'react';
import ReactDOM from 'react-dom';

import Header from './includes/Header';
import ActivityPlanner from './activity/ActivityPlanner';

import {Provider} from 'react-redux';
import store from '../store'

class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <Fragment>
                    <div className="container">
                        <Header/>
                        <ActivityPlanner/>
                    </div>
                </Fragment>
            </Provider>
        )
    }
}

ReactDOM.render(<App/>, document.getElementById('AppRoot'));