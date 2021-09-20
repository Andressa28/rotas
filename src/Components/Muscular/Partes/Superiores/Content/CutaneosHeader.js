import React from "react"
import { Link } from 'react-router-dom'

import '../../../../Header/Header.css'

export default function CutaneosHeader() {
    return (
        <>
            <header className="menu2">
                <nav className="navMenu2">
                    <ul>
                        <li><Link to="/">Menu</Link></li>
                        
                        <li><Link to="/muscular/superiores/cutaneos/medial">Medial</Link></li>
                        <li><Link to="/muscular/superiores/cutaneos/lateral">Lateral</Link></li>
                        <li><Link to="/muscular/superiores/cutaneos/tendoes">Tendoes</Link></li>
                        <li><Link to="/muscular/superiores/cutaneos/extensor">Extensor</Link></li>
                        <li><Link to="/muscular/superiores/cutaneos/rotadores">Rotadores</Link></li>

                        <li><Link to="/muscular/superiores">Voltar</Link></li>
                    </ul>
                </nav>
            </header>
        </>
    )
}