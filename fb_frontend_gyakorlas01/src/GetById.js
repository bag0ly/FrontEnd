import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

export default function GetById(){
    const {id} = useParams();
    const [tanar, setTanar] = useState({});
    const [isPending, FetchPending] = useState(true);

    useEffect(() => {
        axios.get(`https://localhost:7274/api/Tanarok/${id}`, 
        {
            headers: {
                'Access-Control-Allow-Origin': '*',
            }
        })
        .then((response) => {
            console.log(response.data)
            setTanar(response.data)
            FetchPending(false)
        }) 
        .catch((error) => {
            console.log(error)
        })
    }, []);
    

    return(
        <div className="p-5 text-center">
            <div>
                <div className="card p-1 mx-auto" style={{width: "300px"}}>
                    <h1 className="card-title">{tanar.vezetekNev+" "+tanar.keresztNev}</h1>
                    <p>Email: {tanar.email}</p>
                    <p>Nem: {tanar.nem}</p>
                    <p style={{textAlign:"left"}} className="p-1">Osztalyozasok:</p>
                    {tanar.jegyeks.length>0 ?(
                        tanar.jegyeks.map((item)=>(
                            <div className="card p-2" style={{textAlign:"left"}}>
                                 <p>{item.jegySzammal}</p>
                                 <p>{item.jegySzoveggel}</p>
                                 <p>{item.beirasDatuma}</p>   
                                 <p>{item.modositasDatuma}</p>
                            </div>
                        ))
                    ):(<p>-</p>)} 
                </div> 
            </div>
        </div>
    )
}