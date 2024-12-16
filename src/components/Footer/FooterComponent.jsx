import React, { useState } from 'react';
import './FooterComponent.css'

function FooterComponent() {
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());

  return (
    <>
      <footer>
        <div className="footerContainer">
          <img src="/src/assets/logo-kasa-white.png"></img>
          <p>© {currentYear} Kasa. All rights reserved</p>
        </div>
      </footer>
    </>
  )
}

export default FooterComponent
