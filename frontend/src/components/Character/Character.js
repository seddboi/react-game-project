import React from 'react';
import Image from './Skins/c1.png';

export function Character({data}) {
    const {height, width, x, y} = data;

    return (
        <div style={
            {
                backgroundImage: `url(${Image})`,
                height: `${height}px`,
                width: `${width}px`,
                backgroundRepeat: 'no-repeat',
                backgroundPosition: `-${x}px -${y}px`,
                display: 'inline-block',
            }}>
            
        </div>
    )
}

export default Character;
