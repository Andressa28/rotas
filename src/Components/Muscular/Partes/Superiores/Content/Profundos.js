import React from 'react'
import Titulo from '../../../../Titulo/Titulo'
import SuperioresHeader from '../SuperioresHeader'
import AnatomiaProfundo from '../../../../Imagens/AnatomiaProfundo.jpg'
import './Content.css'

export default function Profundos() {
    return (
        <>
            <SuperioresHeader />
            <Titulo text="Profundos" />   
            <div className="profundos">
                <figure>
                    <img className="logo" src={AnatomiaProfundo}></img>
                </figure>
            </div>
        </>
    )
}