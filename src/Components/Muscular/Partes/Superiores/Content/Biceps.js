import React from 'react'
import Titulo from '../../../../Titulo/Titulo'
import SuperioresHeader from '../SuperioresHeader'
import AnatomiaBiceps from '../../../../Imagens/AnatomiaBiceps.jpg'

import './Content.css'

export default function Biceps() {
    return (
        <>  
            <SuperioresHeader />
            <Titulo text="Biceps" />
            <div className="biceps">
                <figure>
                    <img className="logo" src={AnatomiaBiceps}></img>
                </figure>
            </div>
        </>
    )
}