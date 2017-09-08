const initialState = {
    error: {},
    data: [],
    fetching: false
};

export default (state = initialState, action) => {
    switch (action.type) {
        case "BANK_FETCHING":
            return {...state, fetching: true };
        case "TEST_SUCCESS":
            return {...state, data: action.payload };
        case "TEST_FAILURE":
            return {...state, error: { code: action.code, message: action.payload } };
    }
    return state;
}