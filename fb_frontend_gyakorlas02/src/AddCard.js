import axios from "axios";
import React, { useState } from "react";
import { useParams } from "react-router-dom";

export default function AddCard()
{
    const {id} = useParams();
    const [formData, setFormData] = useState({
        cardName : ""
    })

    const handleSubmit= async (event) =>{
        event.preventDefault();
        try {
            const response = await axios.post(`https://localhost:7258/api/Card/CreateNewCard/${id}`,formData, 
                {
                    headers : {
                        'Content-Type' : 'application/json'
                    }
                }
            )
            alert("Card created")
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
    }

    return(
        <div className="card container p-5 ">
            <form>
                <label>Card body: </label>
                <input
                    type="text"
                    onChange={(e)=>{setFormData(e.target.value)}} 
                ></input>
                <button onClick={handleSubmit}>Submit</button>
            </form>
        </div>
    );
}