import {FETCH_SEARCH_UNIVERS_COUNTRY, FETCH_SEARCH_UNIVERS_COUNTRY_SUCCESS} from "../reducer/SearchReducer";
import axios from "axios";

export const fetchSearch = (country)=>{
    return async (dispatch) => {
            dispatch({type: FETCH_SEARCH_UNIVERS_COUNTRY});
            const response = await axios.get("http://universities.hipolabs.com/search?name=&country="+country);
            dispatch({type: FETCH_SEARCH_UNIVERS_COUNTRY_SUCCESS, payload: response.data})
    }
}