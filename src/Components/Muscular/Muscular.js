import React from 'react'
import Titulo from '../Titulo/Titulo'
import MuscularHeader from './MuscularHeader'
import SistemaMuscular from '../Imagens/SistemaMuscular'

import './Muscular.css'

export default function Muscular() {
    return (
        <>
            <MuscularHeader />            
            <div className="muscular">
                <Titulo text="Muscular" />
                <figure>
                    <img className="logo" src={SistemaMuscular} alt="Sistema Muscular" />
                </figure>
            </div>
        </>
    )
}