import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import axios from 'axios';

export function ErtekelesListPage() {
    const [ertekelesek, setErtekelesek] = useState([]);
    const [isFetchPending, setFetchPending] = useState(false);

    useEffect(() => {
        setFetchPending(true);
        axios.get("https://localhost:7253/api/Végsőpont", {
        headers: {
          'Access-Control-Allow-Origin': '*',
        }})
        .then((response) => {
            setErtekelesek(response.data); 
        })
        .catch((error) => {
            console.error(error);
        })
        .finally(() => {
            setFetchPending(false);
        });
    }, []);

    return (
        <div className='p-5 m-auto text-center content bg-ivory'>
            {isFetchPending ? (
                <div className="spinner-border"></div>
            ) : (
                <div className='asd'>
                    <h2>Értékelések:</h2>
                    {ertekelesek.map((ertekeles) => (
                        <NavLink key={`/ertekelesek/${ertekeles.nev}`} to={`/ertekelesek/${ertekeles.nev}`}>
                            <div className='card sol-sm-3 d-inline-block m-1 p-2'>
                                <h3 className='text-muted'>Tanár neve: {ertekeles.nev}</h3>
                                <h5 className='text-muted'>Pontozás: {ertekeles.végsőPont1}</h5>

                                </div>
                        </NavLink>
                    ))}
                </div>
            )}
        </div>
    );
}
export default ErtekelesListPage;
