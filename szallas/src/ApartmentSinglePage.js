import React, { useState, useEffect } from "react";
import { useParams, NavLink } from "react-router-dom";
import axios from 'axios';


export function ApartmentSinglePage() {
    const { id } = useParams();
    const [apartment, setApartment] = useState({});
    const [isFetchPending, setFetchPending] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            setFetchPending(true);
            try {
                const response = await axios.get(`https://nodejs.sulla.hu/data/${id}`, { 
                    headers: {
                    'Access-Control-Allow-Origin': '*',
                }});
                setApartment(response.data);
            } catch (error) {
                console.log(error);
            } finally {
                setFetchPending(false);
            }
        };

        fetchData();
    }, [id]);

    return (
        <div className="p-5 m-auto text-center content bg-ivory, asd">
            {isFetchPending || !apartment.id ? (
                <div className="spinner-border"></div>
            ) : (
                <div className="card p-3">
                    <div className="card-body">
                        <h4>Location: {apartment.location}</h4>
                        <h5 className="card-title">Name: {apartment.name}</h5>
                        <div className="lead">Price: {apartment.price} .- HUF</div>
                        <p>Hostname: {apartment.hostname}</p>
                    </div>
                    <div>
                        <NavLink to={`/apartment`}>
                            <button className="bi bi-backspace rounded">Back</button>
                        </NavLink>
                        <NavLink key="mod" to={`/mod-apartment/${apartment.id}`}>
                            <button className="bi bi-pencil rounded">Modify</button>
                        </NavLink>
                    </div>
                </div>
            )}
        </div>
    );
}
export default ApartmentSinglePage;
