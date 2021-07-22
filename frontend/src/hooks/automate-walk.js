import {useState, useEffect} from 'react';
import randomPosition from './randomize-position';

function AutomateWalk(frames) {
   const [direction, setDirection] = useState(0);
   const moveDirections = { down: 0, left: 1, right: 2, up: 3};

   const [animation, setAnimation] = useState(0); 

    // ________________________________________________________________________________-
    // Our attempt with this is to randomize the positon of the entitiy so we can render multiple without having to hard code a different starting position for every entity
   // this works when we have a position set in useState e.g. const [position, setPosition] = useState({x:200, y: 200}) and comment out useEffect line 29-31
    // there is an error when we plug the 'random position' function into useState on the line below, 
    // which states that the 'Uncaught TypeError: Cannot read property 'y' of undefined
    // at move (automate-walk.js:75)
    // at automate-walk.js:62'
   const [position, setPosition] = useState({x: 240, y: 240});
//    console.log(position);
// {x: randomPosition(51, 419), y: randomPosition(71, 409)}   
  
   function randomPosition() {
        var minX = 50;
        var maxX= 420;
        var minY = 70;
        var maxY= 410;

        const px = Math.round((Math.random()*(maxX-minX)+minX)/10)*10;
        const py = Math.round((Math.random()*(maxY-minY)+minY)/10)*10;
        // console.log(px, py)
        
        setPosition({x:px, y:py});
        //return;
   };

   useEffect(() => {
        randomPosition();
    }, [])
    // ________________________________________________________________________________-

   const pixels = 10;
   const adjustPosition = {
       down: {x: 0, y: pixels},
       left: {x: -pixels, y: 0},
       right: {x: pixels, y: 0},
       up: {x: 0, y: -pixels},
   };
   

//    console.log(direction);
    // console.log(animation);

    function walkingAnimation(direction) {    
        setAnimation( (animation) => {
            if (animation < frames - 1) {
                animation += 1; 
                return animation;
            } else {
                animation = 0;
                return animation;
            }
        });

        setDirection((vector) => {
            // "vector" is the same as direction being passed below; just passes 'left', 'right' , etc.
            //  console.log(moveDirections[direction])
            // console.log(vector);
            // if (moveDirections[direction] === vector) move(direction)

            return moveDirections[direction]
        });
    };

    function move(passedDirection) {
        // console.log(moveDirections[passedDirection])
        // console.log(direction)
        // if (position.x < 50 || position.x > 420 || position.y < 70 || position.y > 405) {
        //     return position
        // }
        // console.log(moveDirections[passedDirection] !== direction)
        if(position.y > 410) {
            setPosition({...position, y: 410})
            console.log('maxY', position.y)
        } else if(position.y < 70) {
            setPosition({...position, y: 70})
            console.log('minY', position.y)
        } else if(position.x > 420 ) {
            setPosition({...position, x: 420})
            console.log('maxX', position.x)
        } else if(position.x < 50) {
            setPosition({...position, x: 50})
            console.log('minX', position.x)
        } else if (moveDirections[passedDirection] !== direction) {
            setPosition( (vector) => ({
                x: vector.x + 0,
                y: vector.y + 0,
            }))
            console.log('no move', position.x, position.y)
        }
        else {
            setPosition( (vector) => ({
                x: vector.x + adjustPosition[passedDirection].x,
                y: vector.y + adjustPosition[passedDirection].y,
        
            }));
            console.log('move', position.x, position.y)
        }
        // console.log(position);
    };
    // console.log(move(direction));

    return {walkingAnimation, direction, animation, position}

};

export default AutomateWalk;