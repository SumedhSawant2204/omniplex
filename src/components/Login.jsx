import React, { useState } from "react";
import "../styles/styles.css";

const Login = ({ setWeatherData }) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = (e) => {
        e.preventDefault();
        // Simulate login functionality
        console.log("Logged in with:", { email, password });
    };

    return (
        <div className="login-container">
            <div className="login-card">
                <h1>Welcome to Omniplex</h1>
                <p>Log in to explore our dynamic features</p>
                <form onSubmit={handleLogin}>
                    <div className="input-group">
                        <label>Email</label>
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>
                    <div className="input-group">
                        <label>Password</label>
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>
                    <button type="submit" className="login-button">
                        Log In
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Login;
