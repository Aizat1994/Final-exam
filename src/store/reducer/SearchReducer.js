const defaultState = {
    univers: [],
    loading: false
}

export const FETCH_SEARCH_UNIVERS_COUNTRY = "FETCH_SEARCH_UNIVERS_COUNTRY";
export const FETCH_SEARCH_UNIVERS_COUNTRY_SUCCESS = "FETCH_SEARCH_UNIVERS_COUNTRY_SUCCESS";

export const universSearchCountryReducer = (state = defaultState, action) => {
    switch (action.type) {
        case FETCH_SEARCH_UNIVERS_COUNTRY:
            return {loading: true, univers: []}
        case FETCH_SEARCH_UNIVERS_COUNTRY_SUCCESS:
            return {loading: false, univers: action.payload}
        default:
            return state;
    }
}

export const fetchUniversSearchCountryAction = () => ({type: FETCH_SEARCH_UNIVERS_COUNTRY});