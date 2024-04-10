import { useState, useEffect} from "react";
import { NavLink } from "react-router-dom";
import React  from "react";
import axios from "axios";

export default function GetAll() {
    const [data, setData] = useState([]);
    const [isFetchPending, setFetchPending] = useState(true);

    useEffect(() => {
        axios.get('https://chess.sulla.hu/chess', {
            headers: {
                'Access-Control-Allow-Origin': '*',
            },
        })
            .then((response) => {
                setData(response.data);
            })
            .catch((error) => {
                console.error(error);
            })
            .finally(() => {
                setFetchPending(false);
            });
    },[]);

    return (
        <div className="p-5 m-auto text-center content bg-ivory">
            {isFetchPending ? (
                <div className="spinner-border"></div>
            ) : (
                <div style={{ maxHeight: '100%', minHeight: '50%', maxWidth: '100%', minWidth: '50%' }}>
                    <h2>Chessers:</h2>
                    {data.map((item) => (
                        <div key={item.id} className="card d-inline-block m-1 p-2">
                            <NavLink to={`/chesser/${item.id}`}>
                            <h3 className="text-muted">Chesser name: {item.name}</h3>
                            <h5 className="text-muted">Birth Date: {item.birth_date}</h5>
                            <h5 className="text-muted">World Champions Won: {item.world_ch_won}</h5>
                            <h5 className="text-muted">Profile Url: {item.profile_url}</h5>
                            <h5 className="text-muted">Image Url: {item.image_urls}</h5>
                            </NavLink>
                            
                            <NavLink to={`/modify-chess/${item.id}`}>
                                <i className="bi bi-pencil-square">Modify</i>
                            </NavLink>
                            &nbsp;&nbsp;
                            <NavLink to={`/delete-apartment/${item.id}`}>
                                <i className="bi bi-trash3 text-danger">Delete</i>
                            </NavLink>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
    
}