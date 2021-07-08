import React from 'react';
import Character from '../Character/Character';

function CharacterAction({data, step = 0, direction = 0}) {
    const {height, width} = data;

    return (
        <div>
            <Character data = {
                {
                    height: 32,
                    width: 32,
                    x: step * width,
                    y: direction * height,
                }
            }/>
        </div>
    )
};

export default CharacterAction;
