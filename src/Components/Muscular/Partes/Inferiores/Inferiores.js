import React from 'react'
import Titulo from '../../../Titulo/Titulo'
import MuscularHeader from '../../MuscularHeader'

import AnatomiaInferiores from '../../../Imagens/AnatomiaInferiores'

import './Inferiores.css'

export default function Inferiores() {
    return (
        <>
            <MuscularHeader />
            <div className="inferiores">
                <Titulo text="Inferiores" />
                    <figure>
                        <img className="logo" src={AnatomiaInferiores} alt="Anatomia Inferiores" />
                    </figure>  
            </div>
        </>
    )
}