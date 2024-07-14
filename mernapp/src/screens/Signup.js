import React from 'react';
import { Link } from 'react-router-dom';

export default function Signup() {
    const handleSubmit = async (e) => {
        e.preventDefault();
        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;

        const response = await fetch("http://localhost:5000/api/users/signup", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ name, email, password }),
        });

        const data = await response.json();
        console.log(data);
        if (data.acknowledged) {
            alert("User registered successfully!");
        } else {
            alert("Failed to register user");
        }
    }

    return (
        <>
            <div className="container mt-5">
                <h2 className="text-center">Signup</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label htmlFor="name" className="form-label">Name</label>
                        <input type="text" className="form-control" id="name" />
                        <div id="emailHelp" className="form-text">We'll never share your details with anyone.</div>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="email" className="form-label">Email</label>
                        <input type="email" className="form-control" id="email" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="password" className="form-label">Password</label>
                        <input type="password" className="form-control" id="password" />
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
                <div className="text-center mt-3">
                    <Link to="/login">
                        <button className="btn btn-danger">Already a User? Login</button>
                    </Link>
                </div>
            </div>
        </>
    );
}
