import { combineReducers} from "redux";
import activityReducer from './activityReducer';
import errorsReducer from './errorsReducer';
import messagesReducer from './messagesReducer'


export default combineReducers({
    activityReducer, errorsReducer, messagesReducer
});