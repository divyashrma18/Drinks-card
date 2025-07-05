import React, { forwardRef } from 'react'
import './Card.css'

const Card = forwardRef(({ image, customClass }, ref) => {
  return (
    <div className="card-container" ref={ref}>
 <div className="drink">
        <img src={image} alt="Drink" className={`card-img ${customClass}`} />
      </div>
      <div className="card" />

    </div>
  )
})

export default Card
