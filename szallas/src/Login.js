import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import { admin } from './admin.js';
import { useAuth } from './AuthContext';

export function Login() {
    const { login } = useAuth();//hagyjuk
    const [isAdmin, setAdmin] = useState(admin.value);
    const username = "admin";
    const password = "admin";

    const handleLogin = () => {
        if (username === "admin" && password === "admin") {
            setAdmin(true);
        } else {
            setAdmin(false);
        }
    };

    return (
        <div className="p-5 m-auto text-center content bg-ivory">
            <input
                type="text"
                name="username"
                className="form-control"
                placeholder="username"
                required
            />
            <input
                type="password"
                name="password"
                className="form-control"
                placeholder="password"
                required
            />
            <button className="btn btn-primary mt-3" onClick={handleLogin}>
                Login
            </button>

            {isAdmin && (
                <div className="mt-3">
                    <p className="text-success">Logged in as admin!</p>
                    <NavLink to="/apartments">
                        <button className="btn btn-primary">View all apartments</button>
                    </NavLink>
                </div>
            )}
        </div>
    );
}
