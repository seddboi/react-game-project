import React from 'react';
import Enemy from '../Enemy/enemy'

function EnemyAction({data, position={x: 0, y: 0}, animation , direction}) {
    const {height, width} = data;
    //console.log(position);
    return (
        <div>
            <Enemy data = {
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

export default EnemyAction;