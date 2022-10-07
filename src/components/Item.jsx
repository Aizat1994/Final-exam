import React from "react";
import { Link } from "react-router-dom";

const Item = ({univer})=>{
    return(
        <Link to={`/name/${univer.name}`}>
            <div className="item">
                <div>
                    <img src={"https://logo.clearbit.com/"+univer.domains[0]} alt="" />
                    <h3>{univer.country}</h3>
                    <h3>{univer.name}</h3>
                </div>
            </div>
        </Link>
    )
}

export default Item;