import React from 'react';
import './BannerComponent.css'

function BannerComponent({ imageSrc, text }) {
  return (
    <>
      <section className="sectionSlogan">
        <img src={imageSrc}></img>
        {text ? (<h2>{text}</h2>) : null}
      </section>
    </>
  )
}

export default BannerComponent
