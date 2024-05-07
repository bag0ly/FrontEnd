import React, { useState } from "react";
import axios from "axios";

export default function AddTanar() {
    const [formData, setFormData] = useState({
        vezetekNev: "",
        keresztNev: "",
        email: "",
        nem: ""
    });

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const response = await axios.post('https://localhost:7274/api/Tanarok/PostTanar', formData);
            alert("Tanar sikeresen hozzaadva");
        } catch (error) {
            console.error('Error adding Tanar:', error);
        }
    };

    const handleChange = (event) => {
        setFormData({ ...formData, [event.target.id]: event.target.value });
    };

    return (
        <div className="container p-5">
            <h2 className="text-center">Add Tanar</h2>
            <form>
                <div className="form-group">
                    <label htmlFor="vezetekNev">Vezeteknev</label>
                    <input
                        type="text"
                        className="form-control"
                        id="vezetekNev"
                        value={formData.vezetekNev}
                        onChange={handleChange}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="keresztNev">Keresztnev</label>
                    <input
                        type="text"
                        className="form-control"
                        id="keresztNev"
                        value={formData.keresztNev}
                        onChange={handleChange}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input
                        type="text"
                        className="form-control"
                        id="email"
                        value={formData.email}
                        onChange={handleChange}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="nem">Nem</label>
                    <input
                        type="text"
                        className="form-control"
                        id="nem"
                        value={formData.nem}
                        onChange={handleChange}
                    />
                </div>

                <button className="btn btn-primary" onClick={handleSubmit}>Add Tanar</button>
            </form>
        </div>
    );
}
