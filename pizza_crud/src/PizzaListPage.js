import {useEffect, useState} from 'react';
import { NavLink } from 'react-router-dom';
export function PizzaListPage()
{
    const [pizzas,setPizzas] = useState([]);
    const [isFetchPending,setFetchPending] = useState(false);

    useEffect(() => {
        setFetchPending(true);
        fetch("https://pizza.kando-dev.eu/Pizza", { credentials: "include" })
          .then((res) => res.json())
          .then((pizza) => setPizzas(pizza))
          .catch(console.log)  
          .finally(() => {
            setFetchPending(false);
          });
        }, []);
    return(
        <div className='p-5 m-auto text-center content bg-ivory'>
                {isFetchPending ? (<div className="spinner-border"></div>):(
                    <div>
                        <h2>Pizzák</h2>
                        {pizzas.map((pizza)=>(
                           <div>
                            <NavLink key={`/pizza/${pizza.id}`} to={`/pizza/${pizza.id}`}  >
                                 <div className='card sol-sm-3 d-inline-block m-1 p-2'>
                                <h6 className='text-muted'>{pizza.isGlutenFree ? "Gluténmentes" : "Nem glutenmentes"}</h6>
                                <h5 className='text-muted'>{pizza.name}</h5>
                                <div className='card-body'>
                                    <img className='img-fluid' style={{maxHeight:200}} alt="hello"
                                    src={pizza.imageURL ? pizza.imageURL : "https://via.placeholder.com/400x800"}/>
                                </div>
                            </div>
                           </NavLink>
                           <br></br>
                           <NavLink key="n"to={`/mod-pizza/${pizza.id}`}  >
                                <i className='bi bi-pencil-square'>Módosítás </i>
                           </NavLink>
                           &nbsp;&nbsp;
                           <NavLink key="i" to={`/delete-pizza/${pizza.id}`}>
                                <i className='bi bi-trash3 text-danger'>Törlés</i>
                           </NavLink>
                           </div>
                           
                        ))}
                    </div>
                )}
        </div>
    )
} 