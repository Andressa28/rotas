import React from 'react'
import Titulo from '../../../Titulo/Titulo'
import MuscularHeader from '../../MuscularHeader'

import AnatomiaTronco from '../../../Imagens/AnatomiaTronco'

import './Tronco.css'

export default function Tronco() {
    return (
        <>
            <MuscularHeader />
            <div className="tronco">
                <Titulo text="Tronco" />
                    <figure>
                        <img className="logo" src={AnatomiaTronco} alt="Anatomia Tronco" />
                    </figure>  
            </div>        
        </>
    )
}