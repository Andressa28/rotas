import React from 'react'
import Titulo from '../Titulo/Titulo'
import SistemaCardiovascular from '../Imagens/SistemaCardiovascular'

import './Cardiovascular.css'

export default function Cardiovascular() {
    return (
        <>            
            <div className="cardiovascular">
              <Titulo text="Cardiovascular" />
              <figure>
                  <img className="logo" src={SistemaCardiovascular} alt="Sistema Cardiovascular" />
              </figure>
            </div>
        </>
    )
}