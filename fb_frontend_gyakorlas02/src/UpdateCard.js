import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

export default function UpdateUser() {
    const {id} = useParams();

    const [formData, setFormData] = useState({
        cardName : ""
    })

    const ChangedData=useEffect(()=> {
       const response = axios.get(`https://localhost:7258/api/Card/GetCardById/${id}`);
    },[id])



    const handleSubmit= async (event) =>{
        event.preventDefault();
        try {
            const response = await axios.put(`https://localhost:7258/api/Card/${id}`,formData, 
                {
                    headers : {
                        'Content-Type' : 'application/json'
                    }
                }
            )
            alert("Card updated")
        } catch (error) {
            switch (error.response.status) {
                case 409:
                    alert("Card already exists")
                    break;
                case 500:
                    alert("Server issue")
                    break;
                default:
                    alert("SCP-502")
                    break;
            }
        }

        return(
            <div className="card container p-5 ">
                <form>
                    <label>Card body: </label>
                    <input
                        type="text"
                        value={ChangedData.cardName}
                        onChange={(e)=>{setFormData(e.target.value)}} 
                    ></input>
                    <button onClick={handleSubmit}>Submit</button>
                </form>
            </div>
        );
    }
}