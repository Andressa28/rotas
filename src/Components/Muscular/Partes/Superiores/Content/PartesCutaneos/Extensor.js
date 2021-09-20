import React from 'react'
import Titulo from '../../../../../Titulo/Titulo'
import CutaneosHeader from '../CutaneosHeader'
import LigamentoExtensor from '../../../../../Imagens/LigamentoExtensor.jpg'


import './Projects.css'

export default function Extensor() {
    return (
        <>
            <CutaneosHeader />
            <Titulo text="Extensor" />
            <div className="extensor">
                <figure>
                    <img className="logo" src={LigamentoExtensor}></img>
                </figure>
            </div>
        </>
    )
}