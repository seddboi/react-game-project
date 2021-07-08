import React from 'react';
import CharacterAction from '../CharacterAction/characteraction';
import KeyTracking from '../../hooks/key-tracking';
import AnimateWalk from '../../hooks/animate-walk';


function User() {
    const data = {height: 32, width: 32};
    const {direction, walk, walking} = AnimateWalk(3); 

    KeyTracking( (x) => {
        x.preventDefault();
        
        const direction = x.key.replace('Arrow', '').toLowerCase();

        walking(direction);

    });



    return (
        <CharacterAction data={data} step={walk} direction={direction}/>
    )
}; 

export default User;
