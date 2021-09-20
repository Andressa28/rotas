import React from 'react'
import Titulo from '../../../../Titulo/Titulo'
import CutaneosHeader from './CutaneosHeader'
import AnatomiaCutaneo from '../../../../Imagens/AnatomiaCutaneo.jpg'

import './Content.css'

export default function Cutaneos() {
    return (
        <>
            <CutaneosHeader />
            <Titulo text="Cutaneos" />
            <div className="cutaneos">
                <figure>
                    <img className="logo" src={AnatomiaCutaneo}></img>
                </figure>
            </div>
        </>
    )
}