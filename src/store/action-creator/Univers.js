import {FETCH_UNIVERS, FETCH_UNIVERS_SUCCESS} from "../reducer/UniversReducer";
import axios from "axios";

export const fetchUnivers = ()=>{
    return async (dispatch) => {
            dispatch({type: FETCH_UNIVERS});
            const response = await axios.get("http://universities.hipolabs.com/search");
            dispatch({type: FETCH_UNIVERS_SUCCESS, payload: response.data})
    }
}