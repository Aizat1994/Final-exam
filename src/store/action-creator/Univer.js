import {FETCH_UNIVER, FETCH_UNIVER_SUCCESS} from "../reducer/UniverReducer";
import axios from "axios";

export const fetchUniver = (name)=>{
    return async (dispatch) => {
            dispatch({type: FETCH_UNIVER});
            const response = await axios.get("http://universities.hipolabs.com/search?name="+name);
            dispatch({type: FETCH_UNIVER_SUCCESS, payload: response.data[0]})
    }
}