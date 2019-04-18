// Please see https://react-redux.js.org/introduction/quick-start for React Redux documentation
import { createStore, applyMiddleware} from 'redux';
import { composeWithDevTools} from "redux-devtools-extension";
import thunk from 'redux-thunk';
import rootReducer from './reducers';

const initialState = {};

const middleware = [thunk];

const store = createStore(
    rootReducer,
    initialState,
    composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
