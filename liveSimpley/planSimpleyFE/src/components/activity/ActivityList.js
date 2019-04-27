import React, {Component} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {getActivities, deleteActivity, updateActivity} from "../../actions/activities";

class ActivityList extends Component {
    // Make sure props get the correct types
    // See https://reactjs.org/docs/typechecking-with-proptypes.html for typechecking
    // Here using in class propType checking
    static propTypes = {
        activities: PropTypes.array.isRequired,
        getActivities: PropTypes.func.isRequired,
        deleteActivity: PropTypes.func.isRequired,
        updateActivity: PropTypes.func.isRequired
    };

    state = {
        complete: null,
    };

    componentDidMount() {
        this.props.getActivities();
    }


    onClick = evt => {
        const isComplete = evt.target.getAttribute('data-complete');
        const {title, complete} = {
            title: evt.target.getAttribute('data-title'),
            complete: isComplete === 'false'
        };
        const newData = {title, complete};
        this.props.updateActivity(evt.target.getAttribute('data-id'), newData);

        return isComplete === 'false'
    };

    renderList() {
        return this.props.activities.map(activity => {
            const editTitle = (
                <span className={"wrap__icon_info wrap__icon_info-edit"}>
                    <i className="icon_info fas fa-pencil-alt" ref={`editTitle_${activity.id}`}  />
                </span>
            );
            return (
                <div key={activity.id} className={`entry_item_wrap ${activity.complete.toString()}`}>
                    <i className={`icon_info fas fa-check ${activity.complete.toString()}`} data-name="complete"
                       data-id={activity.id} data-title={activity.title} data-complete={activity.complete}
                       onClick={this.onClick}/>
                    <form>
                        {/*  Hidden field to hold the activity id  */}
                        <input type="hidden" name={"activity_id"} value={activity.id}/>
                        {/* ActivityList title */}
                        <input type="text" className={`entry_label ${activity.complete.toString()}`}
                               autoComplete={'off'} name={'updatedActivity'} ref={`label_${activity.id}`}
                               value={activity.title} required readOnly/>
                        {/*  Edit button: TODO display only if ActivityList is not completed  */}
                        {/*{activity.complete ? null : editTitle}*/}
                    </form>
                    {/* Form to delete activity */}
                    <div>
                        <input type="hidden" name={"activity_id"}/>
                        <button type={"button"} onClick={this.props.deleteActivity.bind(this, activity.id)}
                                className={"hidden delete__todo wrap__icon_info wrap__icon_info-delete"}>
                        <span className={"delete__todo wrap__icon_info wrap__icon_info-delete"} data-activity={``}>
                            <i className={"icon_info fas fa-trash-alt"}/>
                        </span>
                        </button>
                    </div>
                </div>
            );
        })
    }

    render() {
        return (
            <div className={"list_wrap"}>{this.renderList()}</div>
        )
    }
}

const mapStateToProps = state => {
    return {activities: state.activityReducer.activities}
};

export default connect(mapStateToProps, {getActivities, deleteActivity, updateActivity})(ActivityList);