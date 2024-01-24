import { useState, useEffect } from "react";
import { useParams, NavLink } from "react-router-dom";
import axios from 'axios';

export function ErtekelesSinglePage() {
    const { nev } = useParams();
    const [ertekeles, setErtekeles] = useState([]);
    const [isErtekelesPending, setErtekelesPending] = useState(false);

    useEffect(() => {
        const fetchErtekeles = async () => {
            try {
                setErtekelesPending(true);
                const response = await axios.get(`https://localhost:7253/api/Getter/${nev}`);
                console.log("API Response:", response.data);
                setErtekeles(response.data);
            } catch (error) {
                console.error("Error fetching data:", error);
            } finally {
                setErtekelesPending(false);
            }
        };

        if (nev) {
            fetchErtekeles();
        }
    }, [nev]);

    return (
        <div className="p-5 m-auto text-center content bg-ivory w-50">
            {isErtekelesPending ? (
                <div className="spinner-border"></div>
            ) : (
                <div className="card p-3">
                    <h2>Tanár neve: {nev}</h2>
                    <table className="table table-striped">
                        <thead>
                            <tr>
                                <th>Pontérték</th>
                                <th>Szorzó</th>
                                <th>Képzettség</th>
                                <th>Teljespontszám</th>
                            </tr>
                        </thead>
                        <tbody>
                            {ertekeles.map((ertekelesItem, index) => (
                                <tr key={ertekelesItem.id} className={index % 2 === 0 ? 'bg-white' : 'bg-black'}>
                                    <td>{ertekelesItem.pontertek}</td>
                                    <td>{ertekelesItem.szorzo}</td>
                                    <td>{ertekelesItem.szempontNev}</td>
                                    <td>{ertekelesItem.végsőPont}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    <div>
                        <NavLink to={`/`}>
                            <button className="bi bi-backspace rounded">Vissza</button>
                        </NavLink>
                    </div>
                </div>
            )}
        </div>
    );
}

export default ErtekelesSinglePage;
