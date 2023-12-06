import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { NavLink } from "react-router-dom";

export function InstrumentSinglePage() {
    const param = useParams();
    const id = param.hangszerId;
    const [instrument, setInstrument] = useState([]);
    const [isFetchPending, setFetchPending] = useState(false);

    useEffect(() => {
        setFetchPending(true);
        (async() => {
            try{
            const res = await fetch(`https://kodbazis.hu/api/instruments/${id}`, {credentials: 'include'});
            const hangszer = await res.json();
            setInstrument(hangszer);
        } 
        catch(error){
            console.log(error);
        }
        finally{
            setFetchPending(false);
        }
        })();
    },[id]);

    return (
        <div className="p-5 m-auto text-center content bg-ivory">
            {isFetchPending || !instrument.id ? (<div className="spinner-border"></div>) : (
                    <div className="card p-3">
                        <div className="card-body">
                            <h4>{instrument.brand}</h4>
                            <h5 className="card-title">{instrument.name}</h5>
                            <div className="lead">{instrument.price} .- HUF</div>
                            <p>Készleten: {instrument.quantity} db</p>
                            <NavLink to={`/`}>
                            <img className="img-fluid" style={{maxHeight: 200}} alt="Hiányzik a kép!" src={instrument.imageURL ? instrument.imageURL : 'https://via.placeholder.com/400x800'}/>
                            </NavLink>
                        </div>
                    </div>)}
        </div>
    );
}