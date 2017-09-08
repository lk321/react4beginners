import { request } from './config';

export const getList = (props) => {
    return (dispatch) => {
        dispatch({ type: "TEST_FETCHING" });

        request.get(`test`, props)
            .then(response => {
                if (!response.data.error) {
                    dispatch({
                        type: "TEST_SUCCESS",
                        payload: response.data.data
                    });
                } else {
                    dispatch({
                        type: "TEST_FAILURE",
                        payload: response.data.message,
                        code: response.data.code
                    });
                }
            })
            .catch((e) => dispatch({
                type: "TEST_FAILURE",
                payload: e.message,
                code: typeof e.response !== "undefined" ? e.response.code : 0
            }));
    }
}