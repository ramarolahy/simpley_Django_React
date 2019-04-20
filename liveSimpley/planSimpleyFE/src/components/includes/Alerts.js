import React, {Component, Fragment} from 'react';
import {withAlert} from "react-alert";
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

export class Alerts extends Component {
    static propTypes = {
        error: PropTypes.object.isRequired,
        message: PropTypes.object.isRequired
    };

    componentDidUpdate(prevProps) {
        const {error, alert} = this.props;
        if (error !== prevProps.error) {
            // This will call GET_ERRORS action if we forget to fill in activity title
            if (error.errorMessage.title) alert.error(`Name: ${error.errorMessage.name.join()}`)
        }
        if(message !== prevProps.message) {
            // This will call GET_MESSAGES action once activities have been loaded
            if(message.activitiesLoaded) alert.success(message.activitiesLoaded)
        }
    }

    render() {
        return  <Fragment />
    }
}

const mapStateToProps = state => ({
    error: state.errorsReducer,
    message: state.messagesReducer
});


export default connect(mapStateToProps)(withAlert(Alerts));