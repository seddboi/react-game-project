import React from 'react';
import Image from './Skins/c1.png';

export function Character() {
    return (
        <div style={
            {
                backgroundImage: `url(${Image})`,
                height: '32px',
                width: '32px',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: '0px 0px',
                display: 'inline-block',
            }}>
            
        </div>
    )
}

export default Character;
