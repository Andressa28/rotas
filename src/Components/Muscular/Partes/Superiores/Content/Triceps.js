import React from 'react'
import Titulo from '../../../../Titulo/Titulo'
import SuperioresHeader from '../SuperioresHeader'
import AnatomiaTriceps from '../../../../Imagens/AnatomiaTriceps.jpg'
import './Content.css'

export default function Triceps() {
    return (
        <>
            <SuperioresHeader />
            <Titulo text="Triceps" />
            <div className="triceps">
                <figure>
                    <img className="logo" src={AnatomiaTriceps}></img>
                </figure>
            </div>
        </>
    )
}