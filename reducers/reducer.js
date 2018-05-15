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