import { Link } from 'react-router-dom'
import React from 'react'
import './Navbar.css'

const Navbar = () => {
    return (
        <div className='navbar'>
            <nav>
                <Link to="/" className='brand'>
                    <h1>Cooking App</h1>
                </Link>
                <Link to="/create" className='createRecipe'>
                    Create Recipe
                </Link>
            </nav>
        </div>
    )
}

export default Navbar