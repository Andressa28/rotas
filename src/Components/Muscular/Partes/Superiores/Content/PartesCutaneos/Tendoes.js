import React from 'react'
import Titulo from '../../../../../Titulo/Titulo'
import CutaneosHeader from '../CutaneosHeader'
import LigamentoTendao from '../../../../../Imagens/LigamentoTendao.jpg'
import './Projects.css'

export default function Tendoes() {
    return (
        <>
            <CutaneosHeader />
            <Titulo text="Tendoes" />
            <div className="tendoes">
                <figure>
                    <img className="logo" src={LigamentoTendao}></img>
                </figure>
            </div>
        </>
    )
}