import React, {useState} from 'react';
import {useNavigate} from "react-router-dom";

const Form = ()=>{
    const [country, setCountry] = useState("");
    const [name, setName] = useState("");
    const navigate = useNavigate();
    
    const searchCountry = () => {
        navigate("/search_country/" + country);
    } 
  
    const searchName = () => {
        navigate("/search_name/" +name );
    }

    return (
        <div>
            <form> 
                <label>Name: </label> 
                <input type="text" value={name} onChange={(e)=>setName(e.target.value)}/>
                <button onClick={searchName}>Поиск</button>
            </form>

            <form>
                <label>Country: </label>
                <input type="text" value={country} onChange={(e)=>setCountry(e.target.value)}/>
                <button onClick={searchCountry}>Поиск</button>
            </form>
        </div>
    );
}

export default Form;