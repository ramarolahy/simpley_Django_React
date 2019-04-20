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
        const {error, alert, message} = this.props;
        if (error !== prevProps.error) {
            // This will call GET_ERRORS action if we forget to fill in activity title
            if (error.errorMessage.title) alert.error(`Title: ${error.errorMessage.name.join()}`);
            if (error.errorMessage.non_field_errors) alert.error(`${error.errorMessage.non_field_errors.join()}`);
            if (error.errorMessage.username) alert.error(`${error.errorMessage.username.join()}`)
        }
        if(message !== prevProps.message) {
            // This will call GET_MESSAGES action once activities have been loaded
            if(message.activitiesLoaded) alert.success(message.activitiesLoaded);
            if(message.passwordsDoNotMatch) alert.success(message.passwordsDoNotMatch);
            if(message.youMayLoginNow) alert.error(message.youMayLoginNow);
        }
    }

    render() {
        return  (
            <Fragment/>
        )
    }
}

const mapStateToProps = state => ({
    error: state.errorsReducer,
    message: state.messagesReducer
});


export default connect(mapStateToProps)(withAlert(Alerts));