import React from 'react'
import Titulo from '../Titulo/Titulo'
import SistemaArticular from '../Imagens/SistemaArticular'

import './Articular.css'

export default function Articular() {
    return (
        <>            
            <div className="articular">
                <Titulo text="Articular" />    
                <figure>
                    <img className="logo" src={SistemaArticular} alt="Sistema Articular" />
                </figure>
            </div>
        </>
    )
}