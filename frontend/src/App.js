import React from 'react';
import { GameEngine } from 'react-game-engine';
import { Box } from './components/Renderings(engine)/renderers';
import { MoveBox } from './components/Systems(engine)/systems';
// ------------------------------------------------------------------------------
// These are all of the personally added components
import CreateGame from './components/CreateGame';
// import Character from './components/Character/Character';
import './App.css';

function App() {
  return (
    <div>
      <GameEngine
        style={{width: 800, height: 800, backgroundColor: "green"}}
        // systems={[MoveBox]}
        // entities={{box1:{x: 200, y: 200, renderer: <Box />}}} 
      >
        <Character data={
          {
            height: 32,
            width: 32,
            x: 0,
            y: 0,
          }
        }/>
      </GameEngine>
      <CreateGame />
    </div>    
  );
}

export default App;
