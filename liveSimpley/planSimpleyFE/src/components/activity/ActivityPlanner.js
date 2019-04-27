import React, {Fragment} from 'react';
import Header from '../includes/Header';
import Summary from './Summary';
import ActivityList from './ActivityList';
import AddActivityForm from './AddActivityForm';

export default function ActivityPlanner() {
    return (
        <Fragment>

            <div className={"main_container"}>
                {/*<Summary/>*/}
                <ActivityList/>
                <AddActivityForm/>
            </div>
            <Header/>
        </Fragment>
    );
}