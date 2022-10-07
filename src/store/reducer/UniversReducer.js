const defaultState = {
    univers: [],
    loading: false
}

export const FETCH_UNIVERS = "FETCH_UNIVERS";
export const FETCH_UNIVERS_SUCCESS = "FETCH_UNIVERS_SUCCESS";

export const universReducer = (state = defaultState, action) => {
    switch (action.type) {
        case FETCH_UNIVERS:
            return {loading: true, univers: []}
        case FETCH_UNIVERS_SUCCESS:
            return {loading: false, univers: action.payload.slice(0,50)}
        default:
            return state;
    }
}

export const fetchUniversAction = () => ({type: FETCH_UNIVERS});