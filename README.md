# react-router-redux
React redux example with react-router

## React-Router Redux Guide
# References
- https://www.valentinog.com/blog/react-redux-tutorial-beginners/#React_Redux_tutorial_getting_to_know_Redux_actions

- http://manojsinghnegi.com/blog/2017/09/03/Implementing-redux-and-react-router-v4-in-your-react-app/

### To Start
    - Download this repo
    - Run npm install
    - Run npm start
    - Go to localhost:8080

### What we need
    - react-redux
    - redux-thunk (async)

### Creating our store

```
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
```
**CreateStore** is the most important , *combineReducers* and *applyMiddleware* are optional.

*composeWithDevTools* to work with chrome extension

### Creating our reducer
```
import {SET_NUMBER_OF_CONTACTS, SET_NUMBER_OF_LINES, SET_HOW_MUCH_DATA} from '../types/types';

const initialState = {
    numberOfContacs: '',
    lines: '',
    data: ''
}

const rootReducer =  (state = initialState, action) => {
    switch(action.type) {
        case SET_NUMBER_OF_CONTACTS:
        return {...state, numberOfContacs: action.payload}
        case SET_NUMBER_OF_LINES:
            return {...state,  lines: action.payload}
        case SET_HOW_MUCH_DATA:
        return { ...state,  data: action.payload }
        default:
        return state;
    }
}

export default rootReducer;
```

### Creating our actions

```
import { SET_NUMBER_OF_CONTACTS, SET_NUMBER_OF_LINES, SET_HOW_MUCH_DATA } from "../types/types";

export const setNumberOfContacts = text => ({
    type: SET_NUMBER_OF_CONTACTS,
    payload: text
});

export const setNumberOfLines = text => ({
    type: SET_NUMBER_OF_LINES,
    payload: text
});

export const setHowMuchData = text => ({
    type: SET_HOW_MUCH_DATA,
    payload: text
});
```
### Creating our types (constants)

```
export const SET_NUMBER_OF_CONTACTS = "SET_NUMBER_OF_CONTACTS";
export const SET_NUMBER_OF_LINES = "SET_NUMBER_OF_LINES";
export const SET_HOW_MUCH_DATA = "SET_HOW_MUCH_DATA";
```