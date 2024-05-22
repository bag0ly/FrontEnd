import { useState, useEffect } from 'react';
import React  from "react";
import axios from "axios";
import { NavLink } from 'react-router-dom';

export default function GetAllUser()
{
    const [user, setUser] = useState([])
    const [isPending, setIsPending] = useState(true)

    useEffect(() => {
        axios.get("https://localhost:7258/api/Users", {
            headers: {
                'Access-Control-Allow-Origin': '*'
            }
        })
        .then((response) => {
            setUser(response.data);
            setIsPending(false);
        })
        .catch((error) => {
            console.log(error);
        });
    }, []);
    

    return (
        <div className='container p-5'>
          <h1>Users</h1>
          {isPending ? (
            <div className='spinner-border'></div>
          ) : (
            <div className='row'>
              {user.map((item) => (
                <div key={item.id} className='col-md-4 mb-4'>
                  <div className='card'>
                    <NavLink to={`/User/${item.id}`} style={{ textDecoration: 'none' }}>
                      <div className='card-body'>
                        <p>{item.id}</p>
                        <p>{item.userName}</p>
                        <p>{item.toDosCount}</p>
                      </div>
                    </NavLink>
                    <NavLink to={`/UpdateUser/${item.id}`}>
                      <button className='btn text-warning'>
                        <i className="bi bi-pencil-square"></i>
                      </button>
                    </NavLink>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      );
}