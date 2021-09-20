import React from 'react'
import Titulo from '../../../../../Titulo/Titulo'
import CutaneosHeader from '../CutaneosHeader'
import LigamentoMedial from '../../../../../Imagens/LigamentoMedial.jpg'

import './Projects.css'

export default function Medial() {
    return (
        <>  
            <CutaneosHeader />
            <Titulo text="Medial" />
            <div className="medial">
                <figure>
                    <img className="logo" src={LigamentoMedial}></img>
                </figure>
            </div>
        </>
    )
}