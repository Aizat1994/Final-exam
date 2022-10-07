const defaultState = {
    univer: {},
    loading: true
}

export const FETCH_UNIVER = "FETCH_UNIVER";
export const FETCH_UNIVER_SUCCESS = "FETCH_UNIVER_SUCCESS";


export const univerReducer = (state = defaultState, action) => {
    switch (action.type) {
        case FETCH_UNIVER:
            return {loading:true, univer:{}}
        case FETCH_UNIVER_SUCCESS:
            return {loading: false, univer: action.payload}
        default:
            return state;
    }
}

export const fetchUniverAction = () => ({type: FETCH_UNIVER});