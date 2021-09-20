import React from 'react'
import { Link } from 'react-router-dom'

import '../Header/Header.css'

export default function MuscularHeader() {
    return (
        <>
            <header className="menu2">
                <nav className="navMenu2">
                    <ul>
                        <li><Link to="/muscular/cabeca">Cabeça</Link></li>
                        <li><Link to="/muscular/pescoco">Pescoço</Link></li>
                        <li><Link to="/muscular/tronco">Tronco</Link></li>
                        <li><Link to="/muscular/superiores">Superiores</Link></li>
                        <li><Link to="/muscular/inferiores">Inferiores</Link></li>
                        
                        <li><Link to="/">Voltar</Link></li>
                    </ul>
                </nav>
            </header>
        </>
    )
}