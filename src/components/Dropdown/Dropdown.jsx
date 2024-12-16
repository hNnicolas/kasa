import React, { useState, useEffect } from 'react';
import './Dropdown.css';

function Dropdown({ title, content }) {
    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    }

    return (
        <div className={`dropdown`} id="dropdown">
            <div className="dropdownTop">
                <p>{title}</p>
                {isOpen ?
                    <button onClick={toggleDropdown} className="dropdown-toggle">
                        <i className={`fa-solid fa-chevron-down`}></i>
                    </button> : <button onClick={toggleDropdown} className="dropdown-toggle">
                        <i className={`fa-solid fa-chevron-up`}></i>
                    </button>}

            </div>
            {isOpen ?
                <div className={`dropdownContent`}>
                    {content}
                </div>
                : <></>}
        </div>
    );
}

export default Dropdown;
