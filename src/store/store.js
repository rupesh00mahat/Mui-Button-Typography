import { createStore } from "redux";

const initialState = {counter: 0}

const reducer = (state=initialState, action) => {
    if (action.type == 'CHANGE_SIZE') {
        return state;
    } else if (action.type == 'CHANGE_COLOR') {
        return state;
    } else if (action.type == 'CHANGE_VARIANT') {
        return state;
    }
}

export const store = createStore(reducer);