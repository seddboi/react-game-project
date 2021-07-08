import {useState} from 'react';

function AnimateWalk(frames) {
   const [direction, setDirection] = useState(0);
   const [walk, setWalk] = useState(0); 

   const moveDirections = { down: 0, left: 1, right: 2, up: 3};

    function walking(direction) {
        
        console.log(moveDirections[direction]);
        setDirection(moveDirections[direction]);

        const cycle = (step) => {
            if (step < frames - 1) {
                step = step + 1; 
            } else {
                step = 0;
            }
        };
        
        setWalk(cycle);

        // setWalk(step => (step < frames -1 ? step + 1 : 0));

    }

    return {walking, direction, walk, moveDirections}

};

export default AnimateWalk;