import React from 'react'
import Titulo from '../../../../../Titulo/Titulo'
import CutaneosHeader from '../CutaneosHeader'
import LigamentoLateral from '../../../../../Imagens/LigamentoLateral.JPG'
import './Projects.css'

export default function Lateral() {
    return (
        <>  
            <CutaneosHeader />
            <Titulo text="Lateral" />
            <div className="lateral"> 
                <figure>
                    <img className="logo" src={LigamentoLateral}></img>
                </figure>
            </div>
        </>
    )
}