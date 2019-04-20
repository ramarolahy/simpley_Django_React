import { combineReducers} from "redux";
import activityReducer from './activityReducer';
import errorsReducer from './errorsReducer';
import messagesReducer from './messagesReducer'
import authReducer from './authReducer'


export default combineReducers({
    activityReducer, errorsReducer, messagesReducer, authReducer
});