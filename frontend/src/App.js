import React from 'react';
import CreateGame from './components/CreateGame';
import Character from './components/Character/Character';
import './App.css';

function App() {
  return (
    <div>
      <Character />
      <CreateGame />
    </div>    
  );
}

export default App;
