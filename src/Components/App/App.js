import React from 'react'
import { Route, Switch } from 'react-router-dom'

import './App.css'

import Header from '../Header/Header'
import Home from '../Home/Home'

import Esqueletico from '../Esqueletico/Esqueletico'
import Articular from '../Articular/Articular'
import Muscular from '../Muscular/Muscular'
import Cardiovascular from '../Cardiovascular/Cardiovascular'
import Respiratorio from '../Respiratorio/Respiratorio'

import Cabeca from '../Muscular/Partes/Cabeca/Cabeca'
import Pescoco from '../Muscular/Partes/Pescoco/Pescoco'
import Tronco from '../Muscular/Partes/Tronco/Tronco'
import Superiores from '../Muscular/Partes/Superiores/Superiores'
import Inferiores from '../Muscular/Partes/Inferiores/Inferiores'

import Biceps from '../Muscular/Partes/Superiores/Content/Biceps'
import Triceps from '../Muscular/Partes/Superiores/Content/Triceps'
import Cutaneos from '../Muscular/Partes/Superiores/Content/Cutaneos'
import Profundos from '../Muscular/Partes/Superiores/Content/Profundos'

import Medial from '../Muscular/Partes/Superiores/Content/PartesCutaneos/Medial'
import Lateral from '../Muscular/Partes/Superiores/Content/PartesCutaneos/Lateral'
import Tendoes from '../Muscular/Partes/Superiores/Content/PartesCutaneos/Tendoes'
import Extensor from '../Muscular/Partes/Superiores/Content/PartesCutaneos/Extensor'
import Rotadores from '../Muscular/Partes/Superiores/Content/PartesCutaneos/Rotadores'

function App() {
  return (
    <>
      <Header />

      <main>
        <Switch>
        <Route exact path="/" render={(props) => <Home />}></Route>

          <Route exact path="/esqueletico" render={(props) => <Esqueletico />}></Route>
          <Route exact path="/articular" render={(props) => <Articular />}></Route>
          <Route exact path="/muscular" render={(props) => <Muscular />}></Route>
          <Route exact path="/cardiovascular" render={(props) => <Cardiovascular />}></Route>
          <Route exact path="/respiratorio" render={(props) => <Respiratorio />}></Route>

          <Route exact path="/muscular/cabeca" render={(props) => <Cabeca />}></Route>
          <Route exact path="/muscular/pescoco" render={(props) => <Pescoco />}></Route>
          <Route exact path="/muscular/tronco" render={(props) => <Tronco />}></Route>
          <Route exact path="/muscular/superiores" render={(props) => <Superiores />}></Route>
          <Route exact path="/muscular/inferiores" render={(props) => <Inferiores />}></Route>

          <Route exact path="/muscular/superiores/biceps" render={(props) => <Biceps />}></Route>
          <Route exact path="/muscular/superiores/triceps" render={(props) => <Triceps />}></Route>

          <Route exact path="/muscular/superiores/cutaneos" render={(props) => <Cutaneos />}></Route>
          <Route exact path="/muscular/superiores/cutaneos/medial" render={(props) => <Medial />}></Route>
          <Route exact path="/muscular/superiores/cutaneos/lateral" render={(props) => <Lateral />}></Route>
          <Route exact path="/muscular/superiores/cutaneos/tendoes" render={(props) => <Tendoes />}></Route>
          <Route exact path="/muscular/superiores/cutaneos/extensor" render={(props) => <Extensor />}></Route>
          <Route exact path="/muscular/superiores/cutaneos/rotadores" render={(props) => <Rotadores />}></Route>
          
          <Route exact path="/muscular/superiores/profundos" render={(props) => <Profundos />}></Route>
          
        </Switch>
      </main>
    </>
  );
}

export default App;
