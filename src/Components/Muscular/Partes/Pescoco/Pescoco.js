import React from 'react'
import Titulo from '../../../Titulo/Titulo'
import MuscularHeader from '../../MuscularHeader'

import AnatomiaPescoco from '../../../Imagens/AnatomiaPescoco'

import './Pescoco.css'

export default function Pescoco() {
    return (
        <>
            <MuscularHeader />           
            <div className="pescoco">
                <Titulo text="Pescoço" />
                    <figure>
                        <img className="logo" src={AnatomiaPescoco} alt="Anatomia Pescoco" />
                    </figure>
            </div>
        </>
    )
}