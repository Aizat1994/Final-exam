const defaultState = {
    univers: [],
    loading: false
}

export const FETCH_SEARCH_UNIVERS_NAME = "FETCH_SEARCH_UNIVERS_NAME";
export const FETCH_SEARCH_UNIVERS_NAME_SUCCESS = "FETCH_SEARCH_UNIVERS_NAME_SUCCESS";

export const universSearchNameReducer = (state = defaultState, action) => {
    switch (action.type) {
        case FETCH_SEARCH_UNIVERS_NAME:
            return {loading: true, univers: []}
        case FETCH_SEARCH_UNIVERS_NAME_SUCCESS:
            return {loading: false, univers: action.payload}
        default:
            return state;
    }
}

export const fetchUniversSearchNameAction = () => ({type: FETCH_SEARCH_UNIVERS_NAME});