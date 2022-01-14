import constants from '../types';

export const TestState = () =>
    async (dispatch) => {
        dispatch({
            type: constants.SET_FLOW_NAVIGATION_OPEN
        });
    };