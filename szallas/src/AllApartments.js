import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import axios from 'axios';
import { admin } from './admin.js';
import './App.css';

export function AllApartments() {
  const [data, setData] = useState([]);
  const [isFetchPending, setFetchPending] = useState(false);
  const [error, setError] = useState(null);
const isAdmin=admin.value;

  useEffect(() => {
    setFetchPending(true);
    axios.get('https://nodejs.sulla.hu/data', {
      headers: {
        'Access-Control-Allow-Origin': '*',
      },
    })
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.error(error);
        setError('Error fetching data. Please try again later.');
      })
      .finally(() => {
        setFetchPending(false);
      });
  }, []);

  // Function to chunk the array into rows
  const chunkArray = (arr, size) => {
    return arr.reduce((acc, _, i) => (i % size === 0 ? [...acc, arr.slice(i, i + size)] : acc), []);
  };

  const chunkedData = chunkArray(data, 3);

return (
  <div className="p-5 m-auto text-center content bg-ivory, asd">
    {isFetchPending ? (
      <div className="spinner-border"></div>
    ) : (
      <div className="asd">
        <h2>Apartments:</h2>
        {error ? (
          <p className="text-danger">{error}</p>
        ) : (
          chunkedData.map((row, index) => (
            <div key={index} className="row mb-3">
              {row.map((item) => (
                <div key={item.id} className="col-sm-4">
                  <NavLink to={`/apartments/${item.id}`}>
                    <div className="card d-inline-block m-1 p-2">
                      <h3 className="text-muted">Apartment name: {item.name}</h3>
                      <h5 className="text-muted">Hostname: {item.hostname}</h5>
                      <h5 className="text-muted">Location: {item.location}</h5>
                      <h5 className="text-muted">Minimum nights: {item.minimum_nights}</h5>
                    </div>
                  </NavLink>
                  <br/>
                  <NavLink to={`/mod-apartment/${item.id}`}>
                        <i className="bi bi-pencil-square">Modify </i>
                      </NavLink>
                      &nbsp;&nbsp;
                      <NavLink to={`/delete-apartment/${item.id}`}>
                        <i className="bi bi-trash3 text-danger">Delete</i>
                      </NavLink>
                </div>
              ))}
            </div>
          ))
        )}
      </div>
    )}
  </div>
);
}

export default AllApartments;
