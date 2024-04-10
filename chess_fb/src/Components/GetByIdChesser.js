import { useState, useEffect} from "react";
import { NavLink, useParams } from "react-router-dom";
import React  from "react";
import axios from "axios";

export default function GetByIdChesser() {
    const { id } = useParams();
    const [data, setData] = useState({});
    const [isFetchPending, setFetchPending] = useState(true);

    useEffect(() => {
        axios.get(`https://chess.sulla.hu/chess/${id}` , { 
                 headers: {
                 'Access-Control-Allow-Origin': '*',
             }})
             .then((response) => {
                 setData(response.data);
             })
             .catch((error) => {
                 console.error(error);
             })
             .finally(() => {
                 setFetchPending(false);
             });
    },[id]);

    return (
        <div className="p-5 m-auto text-center content bg-ivory">
            {isFetchPending ? (
                <div className="spinner-border"></div>
            ) : (
                <div className="card p-3">
                    <div className="card-body">
                        <h4>Chesser name: {data.name}</h4>
                        <h5 className="card-title">Birth Date: {data.birth_date}</h5>
                        <h5 className="card-title">World Champions Won: {data.world_ch_won}</h5>
                        <h5 className="card-title">Profile Url: {data.profile_url}</h5>
                        <h5 className="card-title">Image Url: {data.image_url}</h5>
                        <NavLink to={`/modify-chess/${id}`}>
                            <i className="bi bi-pencil-square">Modify</i>
                        </NavLink>
                        &nbsp;&nbsp;
                        <NavLink to={`/delete-chess/${data.id}`}>
                            <i className="bi bi-trash3 text-danger">Delete</i>
                        </NavLink>
                    </div>
                </div>
            )}
        </div>
    );
    
}