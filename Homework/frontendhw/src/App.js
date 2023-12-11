import React, { useState, useEffect } from 'react';

const App = () => {
  const [pizzaData, setPizzaData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://pizza.kando-dev.eu/Pizza');
        const data = await response.json();
        setPizzaData(data);
      } catch (error) {
        console.error('Error fetching pizza data:', error);
      }
    };

    fetchData();
  }, []); 

  return (
    <div>
      <h1>Pizza Menu</h1>
      <div>
        {pizzaData.map((pizza) => (
          <div key={pizza.id}>
            <h2>{pizza.name}</h2>
            <p>Gluten-free: {pizza.isGlutenFree ? 'Yes' : 'No'}</p>
            <img src={pizza.kepURL} alt={pizza.name} style={{ maxWidth: '300px' }} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
