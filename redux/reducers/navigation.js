import constants from '../types';

const initialState = {

};

export default function reducer(state=initialState, action) {
    switch (action.type) {
        case constants.SET_FLOW_NAVIGATION_OPEN:
            return {
                ...state,
                open : false
            };
        default:
            return state;
    }
};