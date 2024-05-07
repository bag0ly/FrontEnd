import React, { useState } from "react";
import axios from "axios";

export default function AddTanar() {
    const [formData, setFormData] = useState({
        vezetekNev: "",
        keresztNev: "",
        email: "",
        nem: ""
    });

    const handleChange = (event) => {
        const { id, value } = event.target;
        setFormData({ ...formData, [id]: value });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            await axios.post('https://localhost:7274/api/Tanarok/PostTanar', formData);
            alert("Tanar successfully added");
        } catch (error) {
            console.error('Error adding Tanar:', error);
        }
    };

    return (
        <div className="container p-5">
            <h2 className="text-center">Add Tanar</h2>
            <form onSubmit={handleSubmit}>
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
                <button type="submit" className="btn btn-primary">Add Tanar</button>
            </form>
        </div>
    );
}
