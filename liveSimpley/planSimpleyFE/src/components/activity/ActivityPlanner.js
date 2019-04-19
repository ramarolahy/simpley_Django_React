import React, {Fragment} from 'react';
import ActivityList from './ActivityList';
import AddActivityForm from './AddActivityForm';

export default function ActivityPlanner() {
    return (
        <div className={"main_container"}>
            <Fragment>
                <ActivityList/>
            </Fragment>
            <Fragment>
                <AddActivityForm/>
            </Fragment>
        </div>
    );
}