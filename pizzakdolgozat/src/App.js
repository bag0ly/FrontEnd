import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function Get() {
  const [data, setData] = useState([]);
  const [isFetchPending, setFetchPending] = useState(true); 
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch('https://pizza.kando-dev.eu/Pizza');
      const result = await response.json();

      setData(result);
      setFetchPending(false); 
    } catch (error) {
      console.error('Error fetching data:', error);
      setFetchPending(false); 
    }
  };

  return (
    <div>
    <h2 class="text-center">Pizzák:</h2>
    {isFetchPending ? (
      <div className="spinner-border">Loading..</div>
    ) : (
      <div className="card-container">
        {data.map((item) => (
          <div className="card pizza-container" id='width'>
            <div class="card-body">
            <p class="card-title">{item.name}</p>
            <p>{item.isGlutenFree ? 'Gluténmentes' : 'Nem Gluténmentes'}</p>
            <img class="card-img-top maxHeight" src={item.kepURL} alt={item.name} />
            </div>
          </div>
        ))}
      </div>
    )}
  </div>
  
  );
}

export default Get;
