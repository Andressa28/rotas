import React from 'react'
import Titulo from '../Titulo/Titulo'
import SistemaRespiratorio from '../Imagens/SistemaRespiratorio'

import './Respiratorio.css'

export default function Respiratorio() {
    return (
        <>
            <div className="respiratorio">
                <Titulo text="Respiratório" />               
            </div>
            <figure>
                <img className="logo" src={SistemaRespiratorio} align="center" alt="Sistema Respiratório" />               
            </figure>          
        </>
    )
}