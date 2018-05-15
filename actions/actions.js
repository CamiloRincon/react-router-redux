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
