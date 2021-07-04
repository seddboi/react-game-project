import React from 'react'
import Stage from './Stage';
import Display from './Display';

function CreateGame() {
    return (
        <div>
            <Stage />
            <aside>
                <div>
                    <Display text='Health' />
                    <Display text='Attack' />
                    <Display text='Shield' />
                    <Display text='Level' />
                </div>
            </aside>

        </div>
    )
}

export default CreateGame
