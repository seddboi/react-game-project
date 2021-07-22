import React from 'react';
import Character from '../Character/Character'
import Image from './arena-files/arena1.png'

function Map({data, position, animation, direction}) {
    const {width, height} = data;
    //const {mapheight, mapwidth} = mapdata;
    // console.log('map was rendered')
    return (
        <div className='map' style={{
            backgroundImage: `url(${Image})`,
            backgroundSize: '100%',
            // height: `${mapheight}px`,
            // width: `${mapwidth}px`,
            backgroundRepeat: 'no-repeat',
            position: 'relative',
            top: position.y, 
            left: position.x,
        }}>
           <Character data = {
                {
                    height: 32,
                    width: 32,
                    x: animation * width,
                    y: direction * height,
                }
            } />
        </div>
    )
};

export default Map;
