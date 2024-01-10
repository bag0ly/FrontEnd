import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

export function PizzaModPage() {
    const { pizzaId } = useParams();
    const navigate = useNavigate();

    const [pizza, setPizza] = useState({});
    const [Modname, setModname] = useState('');
    const [ModisGlutenFree, setModisGlutenFree] = useState(false);
    const [Modimageurl, setModimageurl] = useState('');

    useEffect(() => {
        const fetchPizza = async () => {
            try {
                const response = await fetch(`https://pizza.kando-dev.eu/Pizza/${pizzaId}`);
                const pizzaData = await response.json();
                setPizza(pizzaData);
                setModname(pizzaData.name);
                setModisGlutenFree(pizzaData.isGlutenFree);
                setModimageurl(pizzaData.kepURL);
            } catch (error) {
                console.error('Error fetching pizza:', error);
            }
        };

        fetchPizza();
    }, [pizzaId]);

    const modname = (event) => {
        setModname(event.target.value);
    };

    const modisGlutenFree = (event) => {
        setModisGlutenFree(event.target.value === '1');
    };

    const modimageurl = (event) => {
        setModimageurl(event.target.value);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch(`https://pizza.kando-dev.eu/Pizza/${pizzaId}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    id: pizzaId,
                    name: Modname,
                    isGlutenFree: ModisGlutenFree ? 1 : 0,
                    kepURL: Modimageurl,
                }),
            });

            if (response.ok) {
                navigate('/');
            } else {
                console.error('Failed to update pizza:', response.status, response.statusText);
            }
        } catch (error) {
            console.error('Error during pizza update:', error);
        }
    };

    return (
        <div className='p-5 content bg-whitesmoke text-center'>
            <h2>Pizza módosítás</h2>
            <form onSubmit={handleSubmit}>
                <div className='form-group row pb-3'>
                    <label className='col-sm-3 col-form-label'> Név: </label>
                    <div className='inputs'>
                        <input
                            type='text'
                            name='name'
                            className='form-control'
                            value={Modname}
                            onChange={modname}
                        />
                    </div>
                </div>
                <div className='form-group row pb-3'>
                    <label className='col-sm-3 col-form-label'> KépUrl: </label>
                    <div className='inputs'>
                        <input
                            type='text'
                            name='kepURL'
                            className='form-control'
                            value={Modimageurl}
                            onChange={modimageurl}
                        />
                    </div>
                </div>
                <label className='col-sm-3 col-form-label'> Gluténmentes?: </label>
                <div>
                    <label>
                        <input
                            type='radio'
                            name='isGlutenFree'
                            value='1'
                            checked={ModisGlutenFree}
                            onChange={modisGlutenFree}
                        />
                        Igen
                    </label>
                    &nbsp;
                    <label>
                        <input
                            type='radio'
                            name='isGlutenFree'
                            value='0'
                            checked={!ModisGlutenFree}
                            onChange={modisGlutenFree}
                        />
                        Nem
                    </label>
                </div>
                <button type='submit' className='btn btn-success'>
                    Küldés
                </button>
            </form>
        </div>
    );
}
