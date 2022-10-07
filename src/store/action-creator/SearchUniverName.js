import {FETCH_SEARCH_UNIVERS_NAME, FETCH_SEARCH_UNIVERS_NAME_SUCCESS} from "../reducer/SearchNameReducer";
import axios from "axios";

export const fetchSearch = (name)=>{
    return async (dispatch) => {
            dispatch({type: FETCH_SEARCH_UNIVERS_NAME});
            const response = await axios.get("http://universities.hipolabs.com/search?name="+name);
            dispatch({type: FETCH_SEARCH_UNIVERS_NAME_SUCCESS, payload: response.data})
    }
}