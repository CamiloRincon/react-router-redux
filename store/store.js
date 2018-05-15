import { createStore, combineReducers, applyMiddleware } from "redux";
import { composeWithDevTools } from 'redux-devtools-extension';
import  data from '../reducers/reducer';
import thunk from 'redux-thunk';

const reducer = combineReducers({
    data,
})

const store = createStore(
    reducer,composeWithDevTools(
    applyMiddleware(thunk)
))

export default store;