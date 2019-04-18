import React, {Component} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {getActivities} from "../../actions/activities";
import activityReducer from "../../reducers/activityReducer";

class ActivityList extends Component {
    static propTypes = {
        activities: PropTypes.array.isRequired
    };

    componentDidMount() {
        this.props.getActivities();
    }

    renderList() {
        return this.props.activities.map(activity => {
            return (
                <div key={activity.id} className={`entry_item_wrap`}>
                    {/*Form to update activity status*/}
                    <form action="" method={'POST'}>
                        {/* Hidden field to hold the activity id */}
                        <input type="hidden" name={"activity_id"} value={activity.id}/>
                        {/* Hidden field to hold the current description */}
                        <input type="hidden" name={"current_desc"} value={``}/>
                        {/* Hidden field to hold the value of isCompleted */}
                        <input type="hidden" name={"isCompleted"} value={activity.complete}/>
                        {/* Submit button 'checkmark' to update activity status */}
                        <button type="submit"
                                name="completeTodo_btn"
                                className="hidden complete__todo wrap__icon_info wrap__icon_info--check">
                       <span className={"complete__todo wrap__icon_info wrap__icon_info--check"}>
                           <i className={`icon_info fas fa-check`}/>
                       </span>
                        </button>
                    </form>
                    {/* Form to update activity title */}
                    <form action="" method={'POST'}>
                        {/*  Hidden field to hold the activity id  */}
                        <input type="hidden" name={"activity_id"} value={activity.id}/>
                        {/* ActivityList title */}
                        <input type="text" className={`entry_label`} autoComplete={'off'} name={'updatedActivity'}
                               value={activity.title} required readOnly/>
                        {/*  Edit button: TODO display only if ActivityList is not completed  */}
                        <span className={"wrap__icon_info wrap__icon_info-edit"} name={"editTodo"}>
                       <i className="icon_info fas fa-pencil-alt "/>
                   </span>
                        <button type={"submit"} style={{display: "none"}}/>
                    </form>
                    {/* Form to delete activity */}
                    <form action="" method={"POST"}>
                        <input type="hidden" name={"activity_id"}/>
                        <button type={"submit"} data-action={"delete"}
                                className={"hidden delete__todo wrap__icon_info wrap__icon_info-delete"}>
                        <span className={"delete__todo wrap__icon_info wrap__icon_info-delete"} data-activity={``}>
                            <i className={"icon_info fas fa-trash-alt"}/>
                        </span>
                        </button>
                    </form>
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

export default connect(mapStateToProps, {getActivities})(ActivityList);