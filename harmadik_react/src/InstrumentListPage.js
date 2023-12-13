import {useEffect, useState} from 'react';
import { NavLink } from 'react-router-dom';
export function InstrumentListPage()
{
    const [instruments,setInstruments] = useState([]);
    const [isFetchPending,setFetchPending] = useState(false);

    useEffect(() => {
        setFetchPending(true);
        fetch("https://kodbazis.hu/api/instruments", { credentials: "include" })
          .then((res) => res.json())
          .then((hangszerek) => setInstruments(hangszerek))
          .catch(console.log)  
          .finally(() => {
            setFetchPending(false);
          });
        }, []);
    return(
        <div className='p-5 m-auto text-center content bg-ivory'>
                {isFetchPending ? (<div className="spinner-border"></div>):(
                    <div>
                        <h2>Hangszerek</h2>
                        {instruments.map((instrument)=>(
                           <div>
                            <NavLink key={`/hangszer/${instrument.id}`} to={`/hangszer/${instrument.id}`}  >
                                 <div className='card sol-sm-3 d-inline-block m-1 p-2'>
                                <h6 className='text-muted'>{instrument.brand}</h6>
                                <h5 className='text-muted'>{instrument.name}</h5>
                                <div>{instrument.price}.- HUF</div>
                                <div className='small'>Készleten: {instrument.quantity} db</div>
                                <div className='card-body'>
                                    <img className='img-fluid' style={{maxHeight:200}} alt="hello"
                                    src={instrument.imageURL ? instrument.imageURL : "https://via.placeholder.com/400x800"}/>
                                </div>
                            </div>
                           </NavLink>
                           <br></br>
                           <NavLink key="n"to={`/mod-hangszer/${instrument.id}`}  >
                                <i className='bi bi-pencil-square'>Módosítás </i>
                           </NavLink>
                           &nbsp;&nbsp;
                           <NavLink key="i" to={`/delete-hangszer/${instrument.id}`}>
                                <i className='bi bi-trash3 text-danger'>Törlés</i>
                           </NavLink>
                           </div>
                           
                        ))}
                    </div>
                )}
        </div>
    )
} 