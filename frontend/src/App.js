import React from 'react';
// import Matter from 'matter-js';
import { GameEngine } from 'react-game-engine';
// import { MoveBox } from './components/Systems(engine)/systems';
// ------------------------------------------------------------------------------
// These are all of the personally added components
import CreateGame from './components/CreateGame';
import User from './components/User/user';
import './App.css';

function App() {

  return (
    <div>
      <GameEngine
        style={{width: 500, height: 500, backgroundColor: "green"}}
        // systems={{MoveBox}}
        entities={{box1:{x: 32, y: 32, renderer: <User />}}} 
      >

      </GameEngine>
      <CreateGame />
    </div>    
  );
}

export default App;
