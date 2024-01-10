import {useEffect, useState} from 'react';
import { NavLink } from 'react-router-dom';
export function PizzaListPage()
{
    const [pizzas,setPizzas] = useState([]);
    const [isFetchPending,setFetchPending] = useState(false);

    useEffect(() => {
      setFetchPending(true);
      fetch("https://pizza.kando-dev.eu/Pizza", { 
        headers: { 'Content-Type': 'application/json'}
      })
      .then((res) => res.json())
      .then((pizza) => setPizzas(pizza))
      .catch(console.error)
      .finally(() => {
        setFetchPending(false);
      });
    }, []);
    return (
        <div className='p-5 m-auto text-center content bg-ivory'>
            {isFetchPending ? (
                <div className="spinner-border"></div>
            ) : (
                <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
                    <h2>Pizzák:</h2>
                    {pizzas.map((pizza) => (
                        <NavLink key={`/pizza/${pizza.id}`} to={`/pizza/${pizza.id}`}>
                            <div className='card sol-sm-3 d-inline-block m-1 p-2'>
                                <h5 className='text-muted'>{pizza.name}</h5>
                                <div className='card-body'>
                                    <img
                                        className='img-fluid'
                                        style={{ maxHeight: 200 }}
                                        alt="hello"
                                        src={pizza.kepURL ? pizza.kepURL : "https://via.placeholder.com/400x800"}
                                    />
                                </div>
                                <h6 className='text-muted'>
                                    {pizza.isGlutenFree == 1 ? "Gluténmentes" : "Nem glutenmentes"}
                                </h6>
                            </div>
                        </NavLink>
                    ))}
                </div>
            )}
        </div>
    );
    
} 