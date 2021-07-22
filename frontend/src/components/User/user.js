import React from 'react';
import CharacterAction from '../CharacterAction/characteraction';
import KeyTracking from '../../hooks/key-tracking';
import AnimateWalk from '../../hooks/animate-walk';


function User() {
    const data = {height: 32, width: 32};
    // const {walkingAnimation, direction, animation, position} = AnimateWalk(3); 

    // KeyTracking( (x) => {
    //     x.preventDefault();
        
    //     const direction = x.key.replace('Arrow', '').toLowerCase();

    //     walkingAnimation(direction);

    // });



    return (
        <CharacterAction />
    )
}; 

export default User;
// data={data} animation={animation} direction={direction} position={position}