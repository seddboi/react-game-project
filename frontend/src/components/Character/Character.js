import React from 'react';
import Image from './Skins/c1.png';

export function Character({data, position}) {
    const {height, width, x, y} = data;

    return (
        <div className='character' style={
            {
                backgroundImage: `url(${Image})`,
                height: `${height}px`,
                width: `${width}px`,
                backgroundRepeat: 'no-repeat',
                backgroundPosition: `-${x}px -${y}px`,
                position: 'absolute',
                top: position.y, 
                left: position.x,
            }}>
            
        </div>
    )
}

export default Character;