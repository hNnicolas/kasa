import React from 'react';
import './TagComponent.css'
import { Link } from 'react-router-dom';

function TagComponent({ text }) {
    return (
        <>
            <span className="tag">{text}</span>
        </>
    )
}

export default TagComponent
