import axios from "axios";
import React, { useState } from "react";

export default function AddUser()
{
    const [formData, setFormData] = useState({
        userName : ""
    })

    const handleSubmit= async (event) =>{
        event.preventDefault();
        try {
            const response = await axios.post('https://localhost:7258/api/Users',formData, 
                {
                    headers : {
                        'Content-Type' : 'application/json'
                    }
                }
            )
            alert("User created")
        } catch (error) {
            switch (error.response.status) {
                case 409:
                    alert("User already exists")
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
                <label>Username: </label>
                <input
                    type="text"
                    onChange={(e)=>{setFormData(e.target.value)}} 
                ></input>
                <button onClick={handleSubmit}>Submit</button>
            </form>
        </div>
    );
}