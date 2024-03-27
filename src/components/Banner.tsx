import React from 'react'
import '../scss/Banner.scss'
import Slider from './Slider'
import Modal from './Modal'

const Banner = () => {
  return (
    <div className='banner-section'>
        <div className='banner-page-width'>
            <div className="banner">
                <div className="banner-text">
                    <header>YOUR JOURNEY TO FITNESS STARTS HERE</header>
                    <p className='banner-text-bold'>STEP INTO YOUR STRENGTH</p>
                </div>

                <div className="banner-image-section">
                    <img src='./lady-yoga.jpg' alt='lady-yoga' className='banner-image'/>
                    <div className='banner-overlay'>
                        <p className='banner-overlay-main-text'>TRANSFORM YOUR LIFE.</p>
                    </div>
                    
                    <div className='banner-overlay-slider'>
                        <Slider/>
                    </div>
                </div>
            </div>

          
        </div>
    </div>
  )
}

export default Banner
