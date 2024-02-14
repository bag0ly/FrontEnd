import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from 'axios';

export function ApartmentModPage(props) {
  const { id } = useParams();
  const navigate = useNavigate();

  const [apartment, setApartment] = useState({
    name: apartment.name,
    hostname: apartment.hostname,
    location: apartment.location,
    price: apartment.price,
    minimum_nights: apartment.minimum_nights,
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`https://nodejs.sulla.hu/data/${id}`, {
          withCredentials: true,
        });
        setApartment(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, [id]);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setApartment((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.put(`https://nodejs.sulla.hu/data/${id}`, apartment, {
        headers: {
          "Content-Type": "application/json",
        },
        withCredentials: true,
      });

      navigate(`/`);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className='p-5 content bg-whitesmoke text-center'>
      <h2>Hangszer módosítás</h2>
      <form onSubmit={handleSubmit}>
        <div className='form-group row pb-3'>
          <label className='col-sm-3 col-form-label'> Név: </label>
          <div>
            <input
              type='text'
              name='name'
              className='form-control'
              value={apartment.name}
              onChange={handleInputChange}
            />
          </div>
        </div>
        <div className='form-group row pb-3'>
          <label className='col-sm-3 col-form-label'> Hostname: </label>
          <div>
            <input
              type='text'
              name='hostname'
              className='form-control'
              value={apartment.hostname}
              onChange={handleInputChange}
            />
          </div>
        </div>
        <div className='form-group row pb-3'>
          <label className='col-sm-3 col-form-label'> Ár: </label>
          <div>
            <input
              type='number'
              name='price'
              className='form-control'
              value={apartment.price}
              onChange={handleInputChange}
            />
          </div>
        </div>
        <div className='form-group row pb-3'>
          <label className='col-sm-3 col-form-label'> Minimum nights: </label>
          <div>
            <input
              type='number'
              name='minimum_nights'
              className='form-control'
              value={apartment.minimum_nights}
              onChange={handleInputChange}
            />
          </div>
        </div>
        {/* Add more fields as needed */}
        <button type='submit' className='btn btn-success'>
          Küldés
        </button>
      </form>
    </div>
  );
}
