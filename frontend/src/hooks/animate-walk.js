import {useState} from 'react';

function AnimateWalk(frames) {
   const [direction, setDirection] = useState(0);
   const [walk, setWalk] = useState(0); 

   const moveDirections = { down: 0, left: 1, right: 2, up: 3};

    function walking(direction) {
        
        console.log(moveDirections[direction]);
        setDirection(moveDirections[direction]);
        
        setWalk( (walk) => {
            if (walk < frames - 1) {
                walk += 1; 
                return walk;
            } else {
                walk = 0;
                return walk;
            }
        });

    }

    return {walking, direction, walk, moveDirections}

};

export default AnimateWalk;