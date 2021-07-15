import Matter from 'matter-js';

var Engine = Matter.Engine,
    Render = Matter.Render,
    World = Matter.World,
    Bodies = Matter.Bodies;

var engine ;
var world ;
var box ;

export default function Enemies() {
    // createCanvas(500, 500);
    engine = Engine.create();
    world = engine.world;
    
    Engine.run(engine);
}