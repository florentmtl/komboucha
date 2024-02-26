import { useState } from 'react';
import { Jarre } from './components/Jarre.jsx';
import { Bouteille } from './components/Bouteille.jsx';

function App() {
  return (
    <div className="container">
      <h1>Kombucha - Tableau de bord</h1>
      <div className="row">
        <Jarre className="col-3" />
        <Bouteille className="col-3" number="1" />
        <Bouteille className="col-3" number="2" />
        <Bouteille className="col-3" number="3" />
      </div>
    </div>
  );
}

export default App;
