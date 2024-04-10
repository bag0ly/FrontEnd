import { useState, useEffect} from "react";
import { NavLink, useParams } from "react-router-dom";
import React  from "react";
import axios from "axios";

export default function GetByIdChesser() {
    const { id } = useParams();
    const [data, setData] = useState({});
    const [isFetchPending, setFetchPending] = useState(true);

    useEffect(() => {
        setFetchPending(true);
        fecthData();
    },[]);


    const fecthData = async () => {
        axios.get(`https://chess.sulla.hu/chess/${id}` , { 
                 headers: {
                 'Access-Control-Allow-Origin': '*',
             }})
             .then((response) => {
                 setData(response.data);
             })
             .catch((error) => {
                 console.error(error);
             })
             .finally(() => {
                 setFetchPending(false);
             });
    }

    fecthData();

   const handleInputChange = (e) => {
       data.name=e.target.value;
   };
 
   
   const handleSubmit = async (e) => {
       e.preventDefault();

       axios.put (`https://chess.sulla.hu/chess/${id}`, data, {
           headers: {
               'Access-Control-Allow-Origin': '*',
           }
           
       })
       .then((response) => {
           console.log(response);
       })
   };

   return (
    <div className='p-5 content bg-whitesmoke text-center ' style={{maxWidth: '100%', minWidth: '50%'}}>
        <h2>Chesser modification</h2>
        <form onSubmit={handleSubmit}>
            <div className="form-group row pb-3">
                <label className="col-sm-3 col-form-label">Name:</label>
                <div>
                    <input
                        type="text"
                        className="form-control"
                        name="name"
                        value={data.name}
                        onChange={(event) => handleInputChange(event)}
                    />
                </div>
            </div>   
            <div className="form-group row pb-3">
                <label className="col-sm-3 col-form-label">Birthdate:</label>
                <div>
                    <input
                        type="text"
                        className="form-control"
                        name="birth_date"
                        value={data.birth_date}
                        onChange={handleInputChange}
                    />
                </div>
            </div>   
            <div className="form-group row pb-3">
                <label className="col-sm-3 col-form-label">World Champion Won:</label>
                <div>
                    <input
                        type="text"
                        className="form-control"
                        name="world_ch_won"
                        value={data.world_ch_won}
                        onChange={(event) => handleInputChange(event)}
                    />
                </div>
            </div>   
            <div className="form-group row pb-3">
                <label className="col-sm-3 col-form-label">WikiPage:</label>
                <div>
                    <input
                        type="text"
                        className="form-control"
                        name="profile_url"
                        value={data.profile_url}
                        onChange={handleInputChange}
                    />
                </div>
            </div>   
            <div className="form-group row pb-3">
                <label className="col-sm-3 col-form-label">Image Url:</label>
                <div>
                    <input
                        type="text"
                        className="form-control"
                        name="image_urls"
                        value={data.image_url}
                        onChange={handleInputChange}
                    />
                </div>
            </div>   
        </form>
    </div>
   )
}