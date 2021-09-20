import React from 'react'
import Titulo from '../Titulo/Titulo'
import SistemaEsqueletico from '../Imagens/SistemaEsqueletico'

import './Esqueletico.css'

export default function Parra() {
    return (
        <>            
            <div className="esqueletico">
                <Titulo text="Esquelético" />
                <figure>
                    <img className="logo" src={SistemaEsqueletico} alt="Sistema Esquelético" />
                </figure>
            </div>
        </>
    )
}