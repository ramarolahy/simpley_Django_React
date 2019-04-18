import React, {Component, Fragment} from 'react';
import ReactDOM from 'react-dom';

import Header from './includes/Header';
import ActivityList from './activity/ActivityList';

class App extends Component {
    render() {
        return (
            <Fragment>
                <div className="container">
                    <Header/>
                    <ActivityList/>
                </div>
            </Fragment>
        )
    }
}

ReactDOM.render(<App/>, document.getElementById('AppRoot'));