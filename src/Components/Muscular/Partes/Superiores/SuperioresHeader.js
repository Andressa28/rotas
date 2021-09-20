import React from 'react'
import { Link } from 'react-router-dom'

import '../../../Header/Header.css'

export default function SuperioresHeader() {
    return (
        <>
            <header className="menu2">
                <nav className="navMenu2">
                    <ul>
                        <li><Link to="/">Menu</Link></li>
                        
                        <li><Link to="/muscular/superiores/biceps">Bíceps</Link></li>
                        <li><Link to="/muscular/superiores/triceps">Tríceps</Link></li>
                        <li><Link to="/muscular/superiores/cutaneos">Cutâneos</Link></li>
                        <li><Link to="/muscular/superiores/profundos">Profundos</Link></li>

                        <li><Link to="/muscular">Voltar</Link></li>
                    </ul>
                </nav>
            </header>
        </>
    )
}