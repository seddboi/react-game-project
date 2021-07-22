import React, {PureComponent} from 'react';
// import Matter from 'matter-js';
import { GameEngine } from 'react-game-engine';
// ------------------------------------------------------------------------------
// These are all of the personally added components
// import CreateGame from './components/CreateGame';
// import User from '../User/user';
import {User} from '../Renderings(engine)/renderers';
import Image from '../Map/arena-files/arena1.png'
// import Enemy from '../EnemyContainer/enemycontainer'
import {Enemy} from '../Renderings(engine)/renderers';
import {AnimateWalk} from '../Systems(engine)/systems';
// import Walls from './hooks/create-walls';


// This is all code from a React Native code along I found online 
// *****DOES NOT WORK YET*****
// 
// const width = 700;
// const height = 500;

// const boxSize = Math.trunc(Math.max(width, height) * 0.075);
// const engine = Matter.Engine.create({ enableSleeping: false });
// const world = engine.world;

// const initialBox = Matter.Bodies.rectangle(width, height, boxSize, boxSize);
// const floor = Matter.Bodies.rectangle(width, height - boxSize / 2, width, boxSize, { isStatic: true});

// Matter.World.add(world, [initialBox, floor]);

// const Physics = (entities, {time}) => {
//   let engine = entities['physics'].engine;
  
//   Matter.Engine.update(engine, time.delta);
//   return entities;

// };

// function CreateGame() {

//   return (
//     <div id='map'>
//       <GameEngine
//         className='map'
//         style={{width: 500, height: 500, backgroundImage: `url(${Image})`, position: 'relative'}}
//         systems={[AnimateWalk]}
//         entities={
//           {
//           character1:{x: 32, y: 32, renderer: <User />}, 
//           enemy1: {x:32, y:32, renderer: <Enemy />}, 
//           enemy2: {x:32, y:32, renderer: <Enemy />}, 
//           enemy3: {x:32, y:32, renderer: <Enemy />}}}
//       >
      
//       </GameEngine>
      
//     </div>    
//   );
// }

// ---------------------------------------------------------------------------
// TEST DOCUMENTATION CODE TSUFF

export default class CreateGame extends PureComponent {
  render() {
    return (
      <GameEngine
      style={{width: 500, height: 500, backgroundImage: `url(${Image})`, position: 'relative'}}
      // systems={[AnimateWalk]}
      entities={
                {
                character1:{x: 32, y: 32, renderer: <User />}, 
                enemy1: {x:32, y:32, renderer: <Enemy />}, 
                enemy2: {x:32, y:32, renderer: <Enemy />}, 
                enemy3: {x:32, y:32, renderer: <Enemy />}}}>

      </GameEngine>
    );
  }
}

// ---------------------------------------------------------------------------


export {CreateGame}