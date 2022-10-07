import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {fetchUnivers} from "../store/action-creator/Univers";
import Item from './Item';

const List = ()=>{
    const {univers, loading} = useSelector(state => state.univers);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchUnivers());
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

export default List;