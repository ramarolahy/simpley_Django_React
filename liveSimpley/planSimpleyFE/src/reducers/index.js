import { combineReducers} from "redux";
import activityReducer from './activityReducer';
import errorReducer from './errorReducer';

export default combineReducers({
    activityReducer, errorReducer
});