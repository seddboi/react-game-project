import React from 'react';
import CharacterAction from '../CharacterAction/characteraction';
import KeyTracking from '../../hooks/key-tracking';


function User() {
    const data = {height: 32, width: 32};

    const moveDirections = { up: 0, down: 1, left: 2, right: 3};

    KeyTracking( (x) => {
        x.preventDefault();
        
        const direction = x.key.replace('Arrow', '').toLowerCase();

        if (moveDirections.hasOwnProperty(direction))  {
            console.log(direction);
        };
    });

    return (
        <CharacterAction data={data}/>
    )
}; 

export default User;
