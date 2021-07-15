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
            // console.log(vector);
            if (moveDirections[direction] === vector) move(direction)

            return moveDirections[direction]
        });
    };

    function move(direction) {
        console.log(position);
        if (position.x < 50 || position.x > 420 || position.y < 70 || position.y > 405) {
            return position
        }
        setPosition( (vector) => ({
            x: vector.x + adjustPosition[direction].x,
            y: vector.y + adjustPosition[direction].y,
    
        }));
    };
    // console.log(move(direction));

    return {walkingAnimation, direction, animation, position}

};

export default AnimateWalk;