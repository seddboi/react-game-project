import React from 'react';
import Character from '../Character/Character';

function CharacterAction({data, position={x: 0, y: 0}, animation , direction}) {
    const {height, width} = data;
    //console.log(position);
    return (
        <div>
            <Character data = {
                {
                    height: 32,
                    width: 32,
                    x: animation * width,
                    y: direction * height,
                }
            } position = {position} />
        </div>
    )
};

export default CharacterAction;