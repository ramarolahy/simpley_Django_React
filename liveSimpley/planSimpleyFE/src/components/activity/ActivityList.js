import React, {Fragment} from 'react';
import ActivityItem from './ActivityItem';
import AddActivityForm from './AddActivityForm';

export default function ActivityList() {
    return (
        <div className={"main_container"}>
            <div className={"list_wrap"}>
                <Fragment>
                    <ActivityItem/>
                </Fragment>
                <Fragment>
                    <AddActivityForm/>
                </Fragment>
            </div>
        </div>
    );
}