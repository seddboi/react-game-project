import React from 'react';
import { GameEngine } from 'react-game-engine';
// import { Box } from './components/Renderings(engine)/renderers';
// import { MoveBox } from './components/Systems(engine)/systems';
// ------------------------------------------------------------------------------
// These are all of the personally added components
import CreateGame from './components/CreateGame';
import CharacterAction from './components/CharacterAction/characteraction';
import './App.css';

function App() {
  const data = {height: 32, width: 32};
  
  return (
    <div>
      <GameEngine
        style={{width: 500, height: 500, backgroundColor: "green"}}
        // systems={[MoveBox]}
        // entities={{box1:{x: 200, y: 200, renderer: <Box />}}} 
      >
        <CharacterAction data={data}/>
      </GameEngine>
      <CreateGame />
    </div>    
  );
}

export default App;
