import {useState} from 'react';

function AnimateWalk(frames) {
   const [direction, setDirection] = useState(0);
   const moveDirections = { down: 0, left: 1, right: 2, up: 3};

   const [animation, setAnimation] = useState(0); 

   const [position, setPosition] = useState({x:240, y:240});
   const pixels = 10;
   const adjustPosition = {
       down: {x: 0, y: pixels},
       left: {x: -pixels, y: 0},
       right: {x: pixels, y: 0},
       up: {x: 0, y: -pixels},
       shift: {x: 0, y: 0},
   };

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
            // console.log(moveDirections[direction])
            // console.log(vector);
            if (moveDirections[direction] === vector) move(direction)

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
        }
        if(position.y < 70) {
            setPosition({...position, y: 70})
        }
        if(position.x > 420) {
            setPosition({...position, x: 420})
        }
        if(position.x < 50) {
            setPosition({...position, x: 50})
        }
        if (moveDirections[passedDirection] !== direction) {
            setPosition( (vector) => ({
                x: vector.x + 0,
                y: vector.y + 0,
            }))}
        else {
            setPosition( (vector) => ({
                x: vector.x + adjustPosition[passedDirection].x,
                y: vector.y + adjustPosition[passedDirection].y,
        
            }));
        }
        // console.log(position);
    };
    // console.log(move(direction));

    return {walkingAnimation, direction, animation, position}

};

export default AnimateWalk;