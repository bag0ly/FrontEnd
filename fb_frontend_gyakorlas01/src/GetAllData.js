import { useState, useEffect } from "react";
import axios from "axios";
import { NavLink } from "react-router-dom";
export default function GetAllTeacher() {
    const [tanar, setTanar] = useState([]);
    const [isPending, FetchPending] = useState(true);

    useEffect(() => {
        axios.get("https://localhost:7274/api/Tanarok/GetTanarok",
        {
            headers: {
                'Access-Control-Allow-Origin': '*',
            }
        }
        )
        .then((response) => {
            console.log(response.data)
            setTanar(response.data)
            FetchPending(false)
        }) 
        .catch((error) => {
            console.log(error)
        })
    }, []);

    return (
        <div className="container p-5">
            <h2 className="text-center">Tanarok</h2>
            {isPending ? (
                <div className="spinner-border"></div>
            ) : (
                <div className="card-container m-5">
                    <div className="row">
                        {tanar.map((item) => (
                            <div key={item.id} className="col-md-4 mb-4">
                                <div className="card">
                                    <div className="card-body p-4">
                                        <NavLink to={`/tanar/${item.id}`}  className={"no-underline"}>
                                            <h5 className="card-title">Teljes Nev:{item.vezetekNev + " " + item.keresztNev}</h5>
                                            <p className="card-text">Email:{item.email}</p>
                                            <p className="card-text">Nemi identitas: {item.nem}</p>
                                            {item.jegyeks.length > 0 ? (
                                                <p>Osszes jegy: {item.jegyeks.length}</p>
                                            ) : (
                                                <p>Nincsenek jegyek</p>
                                            )}
                                            <NavLink to={`/UpdateTanar/${item.id}`} >
                                            <button className="btn bi-pencil-square text-success"></button>
                                            </NavLink>
                                        </NavLink>
                                        
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </div>
    )
    
}
