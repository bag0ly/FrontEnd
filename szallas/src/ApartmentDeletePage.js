import React, { useState, useEffect } from 'react';
import { useParams, useNavigate, NavLink } from 'react-router-dom';
import axios from 'axios';

export function ApartmentDeletePage() {
  const params = useParams();
  const id = params.id;
  const navigate = useNavigate();
  const [apartment, setApartment] = useState([]);
  

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`https://nodejs.sulla.hu/data/${id}`, {
            headers: {
                'Access-Control-Allow-Origin': '*',
            }
         });
        setApartment(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, [id]);

  const handleDelete = async (e) => {
    e.persist();
    e.preventDefault();

    try {
      await axios.delete(`https://nodejs.sulla.hu/data/${id}`, { 
        headers: {
        'Access-Control-Allow-Origin': '*',
    } });
      navigate('/');
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="p-5 text-center content bg-whitesmoke">
      <h2>Apartment törlése</h2>
      <form onSubmit={handleDelete}>
        <div>
          <NavLink to="/">
            <button type="button" className="btn btn-primary">
              Back
            </button>
          </NavLink>
          <button type="submit" className="btn btn-danger">
            Delete
          </button>
        </div>
      </form>
    </div>
  );
}
