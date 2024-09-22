import React from 'react'
import './Hero.css'
import dark_Arrow from '../../assets/dark-arrow.png'

const Hero = () => {
  return (
    <div className='hero container'>
      <div className="hero-text">
        <h1>We Ensure better education for a better world</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate, cum facilis. Sequi laborum, nihil labore perspiciatis doloribus eveniet soluta fugiat placeat natus officiis, velit nobis ipsa, molestias vel consectetur consequuntur!</p>
        <button className='btn'>Explore more <img src={dark_Arrow} alt="" /></button>
      </div>
    </div>
  )
}

export default Hero
