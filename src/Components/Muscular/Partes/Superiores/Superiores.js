import React from 'react'
import Titulo from '../../../Titulo/Titulo'
import SuperioresHeader from '../Superiores/SuperioresHeader'

import AnatomiaSuperiores from '../../../Imagens/AnatomiaSuperiores'

import './Superiores.css'

export default function Superiores() {
    return (
        <>
             <SuperioresHeader />
            <div className="superiores">
                <Titulo text="Superiores" />
                    <figure>
                        <img className="logo" src={AnatomiaSuperiores} alt="Anatomia Superiores" />
                    </figure>  
            </div>
        </>
    )
}