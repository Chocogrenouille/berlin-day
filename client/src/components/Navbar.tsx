import * as React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
    
    return (
        <div>
            <Link to="/creator">Create a day</Link>
            <Link to="/events">See everything</Link>
            <Link to="/login">Login</Link>
            <Link to="/signup">Signup</Link>
            <Link to="/add">Add Event</Link>
        </div>
    )
}

// 4 links: login, signup, day creator, everything
// Logo

