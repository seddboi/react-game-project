import React from 'react';
import { GameEngine } from 'react-game-engine';
// import { Box } from './components/Renderings(engine)/renderers';
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
        // systems={[MoveBox]}
        // entities={{box1:{x: 200, y: 200, renderer: <Box />}}} 
      >
        <User />

      </GameEngine>
      <CreateGame />
    </div>    
  );
}

export default App;
