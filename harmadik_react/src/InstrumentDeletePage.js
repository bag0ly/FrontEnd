import React, { useState, useEffect } from 'react';
import { useParams, useNavigate, NavLink } from 'react-router-dom';

export function InstrumentDeletePage(props) {

    const params = useParams();
    const id = params.hangszerId;
    const navigate = useNavigate();
    const [instrument, setInstrument] = useState([]);

    useEffect(() => {
        (async() => {
            try {
        const res = await fetch(`https://kodbazis.hu/api/instruments/${id}`, {credentials: "include"})
        const hangszer = await res.json();
        setInstrument(hangszer);
            } catch(error) {
                console.log(error);
            }
    })();
}, [id]);
return (
    <div className="p-5 text-center content bg-whitesmoke">
            <h2>Hangszer módosítása</h2>
            <form
            onSubmit={(e) => {
                e.persist();
                e.preventDefault();
                fetch(`https://kodbazis.hu/api/instruments/${id}`, {
                    method: "DELETE",
                    credentials: "include",
                    headers: {
                        "Content-Type": "application/json",
                    },
                })
                .then(() => {
                    navigate("/");
                })
                .catch(console.log);
            }}
            >
            <div>
                <NavLink to="/">
                    <button type="button" className="btn btn-primary">Vissza</button>
                </NavLink>
                <button type="submit" className="btn btn-success">Küldés</button>
            </div>
            </form>
    </div>
);
}