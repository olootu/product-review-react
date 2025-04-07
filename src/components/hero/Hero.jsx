import React from 'react'

function Hero({image ='home-img', alt='picture'}) {
  return (
    <div className='hero'>
        <img src={`/images/${image}.jpg`} alt={alt} />
    </div>
  )
}

export default Hero