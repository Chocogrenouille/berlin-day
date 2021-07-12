import React from 'react'
import { useState } from 'react'
import { signup } from '../services/auth';

export default function Signup () {
    const [message, setMessage] = useState("");
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");


    const handleSubmit = (input: React.FormEvent<HTMLFormElement>) => {
        input.preventDefault();
        signup(username, password, email)
        .then(response => {
            if (response.message){
                setMessage(response.message);
                setUsername("");
                setPassword("");
                setEmail("");
            } else {
                // I don't really need this console log
                console.log(response);
                // set current User in Props
                // props.setUser(response);
                // redirect to Dashboard?
                // props.history.push("/dashboard");
            }
        })
        
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label>Username:</label>
                <input
                required
                type="text"
                name="username"
                id="username"
                value={username}
                placeholder="Moosmutzel"
                onChange={(input: React.ChangeEvent<HTMLInputElement>) => setUsername(input.target.value)}
                />

                <label>Email:</label>
                <input
                required
                type="text"
                name="email"
                id="email"
                value={email}
                placeholder="moosmutzel@traumzauberbaum.de"
                onChange={(input: React.ChangeEvent<HTMLInputElement>) => setEmail(input.target.value)}
                />

                <label>Password:</label>
                <input
                required
                type="password"
                name="password"
                id="password"
                value={password}
                placeholder="password"
                onChange={(input: React.ChangeEvent<HTMLInputElement>) => setPassword(input.target.value)}
                />
                <button type="submit">Sign up</button>
            </form>
        </div>
    )
}