import React from 'react'
import '../scss/AboutusLandingPage.scss'

const AboutusLandingPage = () => {
  return (
    <div className='about-page-width'>
      <div className="about-us-section">
        <div className="about-us-text">
          <div> We build bridges between <span>fitness and you.</span> </div>
          <div>
             Our mission is to simplify your fitness journey, making it accessible and enjoyable. 
             We're here to connect you to a healthier, happier you.

             Consider us your fitness architects. We make the journey to health less daunting, more achievable. 
             Together, we'll build a stronger you 💪🏽
          </div>
        </div>

        <div className="about-us-image">
          <img src='./about-us-banner-image.jpg' alt='#'/>
        </div>
      </div>
    </div>
  )
}

export default AboutusLandingPage
