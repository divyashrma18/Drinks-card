import React, { useEffect, useRef } from 'react'
import Card from './Card'
import './MenuShowcase.css'
import { gsap } from 'gsap'

const MenuShowcase = () => {
  const cardsRef = useRef([])

useEffect(() => {
  const tl = gsap.timeline()


  tl.fromTo(
    '.menu-section h1',
    { y: 50, autoAlpha: 0 },
    {
      y: 0,
      autoAlpha: 1,
      duration: 1,
      ease: 'power2.out',
    }
  )


  tl.fromTo(
    '.menu-section h3',
    { y: 40, autoAlpha: 0 },
    {
      y: 0,
      autoAlpha: 1,
      duration: 1,
      ease: 'power2.out',
    },
    '-=0.6' 
  )


  tl.fromTo(
    cardsRef.current,
    { x: -150, autoAlpha: 0 },
    {
      x: 0,
      autoAlpha: 1,
      duration: 1.5,
      stagger: 0.24,
      ease: 'power2.out',
    },
    '+=0.2'
  )
}, [])



  const cardData = [
    { image: '/images/coffee.png', class: 'coffee-cup' },
    { image: '/images/black.png', class: 'black-brew' },
    { image: '/images/cof1.webp', class: 'soft-pour' },
    { image: '/images/latte.webp', class: 'latte-swan' },
  ]




  return (
    <div className="menu-section">
      <h1>WE OFFER EVERYTHING</h1>
      <h3>
        the coding diva is a caffeine addict, so we offer everything — because we have no option
      </h3>
  <div className="card-grid">
        {cardData.map((item, index) => (
          <Card
            key={index}
            ref={(el) => (cardsRef.current[index] = el)}
            image={item.image}
            customClass={item.class}
          />
        ))}
      </div>

    
    </div>
  )
}

export default MenuShowcase
