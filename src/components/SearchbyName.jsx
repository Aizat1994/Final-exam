import React, {useEffect} from "react";
import {useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {fetchSearch} from "../store/action-creator/SearchUniverName"
import Item from "./Item";
const  Search = ()=>{
    const {univers, loading} = useSelector(state => state.SearchName);
    const dispatch = useDispatch();
    const {name} = useParams();

    useEffect(() => {
        dispatch(fetchSearch(name));
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