import React, {Fragment} from 'react';
import Header from '../includes/Header';
import ActivityList from './ActivityList';
import AddActivityForm from './AddActivityForm';

export default function ActivityPlanner() {
    return (
        <Fragment>
            <div className={"main_container"}>
                <ActivityList/>
                <AddActivityForm/>
            </div>
            <Header/>
        </Fragment>
    );
}