import React from 'react'
import Titulo from '../../../../../Titulo/Titulo'
import CutaneosHeader from '../CutaneosHeader'
import LigamentoRotador from '../../../../../Imagens/LigamentoRotador.jpg'
import './Projects.css'

export default function Rotadores() {
    return (
        <>
            <CutaneosHeader />
            <Titulo text="Rotadores" />
            <div className="rotadores">
                <figure>
                    <img className="logo" src={LigamentoRotador}></img>
                </figure>
            </div>
        </>
    )
}