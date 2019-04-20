import React from 'react';
import {Route, Redirect} from 'react-router-dom';
import {connect} from 'react-redux'
import ReactLoading from 'react-loading';

import PropTypes from 'prop-types'

/**
 * Function component that will take in another component and apply
 * and isAuthenticated 'middleware' to it. It will just return a Route to the
 * component.
 * @param Component
 * @param auth
 * @param rest
 * @returns {Route}
 * @constructor
 */
const PrivateRoute = ({component: Component, auth, ...rest}) => (
// The ...rest parameter syntax allows us to represent an indefinite number of arguments as an array.
// See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/rest_parameters
    <Route
        {...rest}
        render={props => {
            if (auth.isLoading) {
                // Add cool spinner loading here
                return (
                    <div className={"main_container"}>
                        <ReactLoading className={"spinningBubbles"} type={"spinningBubbles"} color={"#ffffff"}
                                      height={64} width={64}/>
                    </div>
                )
            } else if (!auth.isAuthenticated) {
                return <Redirect to={"/login"}/>
            } else {
                return <Component {...props}/>
            }

        }}
    />
);

const mapStateToProps = state => ({
    auth: state.authReducer
});

export default connect(mapStateToProps)(PrivateRoute);