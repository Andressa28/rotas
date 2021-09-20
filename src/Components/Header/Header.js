import React from 'react'
import { Link } from 'react-router-dom'
import './Header.css'

export default function Header() {
    return (
        <header className="menu">
            <nav className="navMenu">
                <ul>
                    <li><Link to="/">Home</Link></li>
                    
                    <li><Link to="/esqueletico">Esquelético</Link></li>
                    <li><Link to="/articular">Articular</Link></li>
                    <li><Link to="/muscular">Muscular</Link></li>
                    <li><Link to="/cardiovascular">Cardiovascular</Link></li>
                    <li><Link to="/respiratorio">Respiratório</Link></li>
                </ul>
            </nav>
        </header>
    )
}