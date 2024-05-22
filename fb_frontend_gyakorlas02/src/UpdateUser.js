import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

export default function UpdateUser() {
    const {id} = useParams();

    const [formData, setFormData] = useState({
        userName : ""
    })

    const ChangedData=useEffect(()=> {
       const response = axios.get(`https://localhost:7258/api/Users/${id}`);
    },[id])



    const handleSubmit= async (event) =>{
        event.preventDefault();
        try {
            const response = await axios.put(`https://localhost:7258/api/Users/${id}`,formData, 
                {
                    headers : {
                        'Content-Type' : 'application/json'
                    }
                }
            )
            alert("User updated")
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

        return(
            <div className="card container p-5 ">
                <form>
                    <label>Username: </label>
                    <input
                        type="text"
                        value={ChangedData.userName}
                        onChange={(e)=>{setFormData(e.target.value)}} 
                    ></input>
                    <button onClick={handleSubmit}>Submit</button>
                </form>
            </div>
        );
    }
}