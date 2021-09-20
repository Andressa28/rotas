import React from 'react'
import Titulo from '../../../Titulo/Titulo'
import MuscularHeader from '../../MuscularHeader'

import AnatomiaCabeca from '../../../Imagens/AnatomiaCabeca'

import './Cabeca.css'

export default function Cabeca() {
    return (
        <>  
            <MuscularHeader />
            <div className="cabeca">
                <Titulo text="Cabeça" />
                    <figure>
                        <img className="logo" src={AnatomiaCabeca} alt="Anatomia Cabeca" />
                    </figure>
            </div>
        </>
    )
}