import React, {useEffect} from 'react';
import EnemyAction from '../EnemyAction/enemyaction';
// import KeyTracking from '../../hooks/key-tracking';
// import AnimateWalk from '../../hooks/animate-walk';
import randomInt from '../../hooks/randomize-move.js';
import AutomateWalk from '../../hooks/automate-walk';


function EnemyContainer() {
    const data = {height: 32, width: 32};
    // const direction = randomInt(0,4);
    // const direction = 0;

    // const {walkingAnimation, animation} = AutomateWalk(3);
    const {walkingAnimation, direction, animation, position} = AutomateWalk(3); 

    function createWalk() {
        setInterval(() => {
        
            var x = randomInt();
            walkingAnimation(x);
    
        }, 1000);
    }
    
    useEffect(() => {
        createWalk();
    }, [])

    

    // setInterval(() => {
    //     KeyTracking('down')
    // }, 2000)
    
    return (
        <EnemyAction data={data} animation={animation} direction={direction} position={position}/>
    )
}; 
// position={position} , position

export default EnemyContainer;