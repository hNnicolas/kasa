import React, { useState } from 'react';
import './HostUIComponent.css'

function HostUIComponent({ name, picture }) {

    return (
        <div className='host'>
            <p>{name}</p>
            <img src={picture} alt={'Image de ' + name}></img>
        </div>
    )
}

export default HostUIComponent
