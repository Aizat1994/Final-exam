import React, {useEffect} from "react";
import {useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {fetchSearch} from "../store/action-creator/SearchUniver"
import Item from "./Item";
const  Search = ()=>{
    const {univers, loading} = useSelector(state => state.Search);
    const dispatch = useDispatch();
    const {country} = useParams();

    useEffect(() => {
        dispatch(fetchSearch(country));
    }, [])

    if (loading) {
        return <div>Loading...</div>
    }

    return (
        <div>
            {
                <div className="list">
                    {univers.map(u =>
                        <Item key={u.name} univer={u}/>
                    )}
                </div>
            }
        </div>
    );
}

export default Search;