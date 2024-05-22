import React, { useEffect, useState } from "react";
import { useParams, NavLink } from "react-router-dom";
import axios from "axios";

export default function GetByUserId()
{
    const {id} = useParams();
    const [userCard, setUserCard] = useState([]);
    const [isFetching, setIsFetching] = useState(true);

    useEffect(() => {
        axios.get(`https://localhost:7258/api/Card/GetByUserId/${id}`,{
                headers : 
                {
                    'Access-Controll-Allow-Origin':'*'
                }
        })
        .then((response)=>{
            setUserCard(response.data);
            setIsFetching(false);
        })
        .catch((error)=>{
            console.log(error);
        })
    },[id])

    return(
        <div className="container p-5">
            <h1>Cards</h1>
            <button className="btn bi-pencil-square text-success">
                <NavLink to={`/AddCard/${id}`} className={'text-success'} style={{textDecoration:'none'}}>
                    Create card
                </NavLink>
                </button>
            {isFetching?(<div className="spinner-border"></div>)
            :
            <div className="container p-5">
            {userCard.map((item) => (
                <div key={item.id} className="card">
                    <div className="card-title">
                        {item.userName}
                    </div>   
                    <p>{item.userId}</p>
                    <p>{item.cardName}</p>
                    <NavLink to={`/UpdateCard/${item.id}`} className={'text-warning'} style={{textDecoration:'none'}}>
                        <p className="btn bi-pencil-square text-warning">  
                            UpdateCard    
                        </p>
                    </NavLink>
                   
                </div>
            ))}
        </div>}
        </div>

        
    );
}