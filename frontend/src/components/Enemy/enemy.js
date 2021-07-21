import React from 'react';
import Image from './Skins/enemy1.png';

export function Enemy({data, position}) {
    const {height, width, x, y} = data;

    return (
        <div className='enemy' style={
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

export default Enemy;

