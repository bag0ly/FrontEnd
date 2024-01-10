import React, { useState, useEffect } from 'react';
import { useParams, useNavigate, NavLink } from 'react-router-dom';

export function PizzaDeletePage() {
    const params = useParams();
    const id = params.pizzaId;
    const navigate = useNavigate();
    const [pizza, setPizza] = useState([]);

    useEffect(() => {
        (async () => {
            try {
                const res = await fetch(`https://pizza.kando-dev.eu/Pizza/${id}`, { credentials: "include" });
                const ppizza = await res.json();
                setPizza(ppizza);
            } catch (error) {
                console.log(error);
            }
        })();
    }, [id]);

    const handleDelete = async () => {
        try {
            const res = await fetch(`https://pizza.kando-dev.eu/Pizza/${id}`, {
                method: "DELETE",
                headers: {
                    "Content-Type": "application/json",
                },
            });

            if (res.ok) {
                // Deletion successful, navigate to the home page or another appropriate page
                navigate("/");
            } else {
                // Handle deletion failure, show an error message or take appropriate action
                console.log("Deletion failed");
            }
        } catch (error) {
            console.error("Error during deletion:", error);
        }
    };

    return (
        <div className="p-5 text-center content bg-whitesmoke">
            <h2>Delete Pizza</h2>
            <p>{`Are you sure you want to delete ${pizza.name} pizza?`}</p>
            <button onClick={handleDelete}>Delete</button>
            <NavLink to={`/`}>
                <button>Cancel</button>
            </NavLink>
        </div>
    );
}
