import React, {useEffect} from "react";
import {useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import { fetchUniver } from "../store/action-creator/Univer";

const Details = ()=>{
    const {univer, loading} = useSelector(state => state.univer);
    const dispatch = useDispatch();
    const {name} = useParams();

    useEffect(() => {
        dispatch(fetchUniver(name));
    }, [name])

    if (loading) {
        return <div>Loading...</div>
    }
    return (
        <div>
            <div>
                <img src={"https://logo.clearbit.com/" + univer.domains[0]} alt=""/>
            </div>
            <div>
                <p>Name: {univer.name}</p>
                <p>Country: {univer.country}</p>
                <a href={univer.web_pages[0]}>Web Page</a>
            </div>
        </div>
    );
}

export default Details;