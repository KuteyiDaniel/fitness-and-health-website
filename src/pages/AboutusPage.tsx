import React from 'react'
import NavBar from '../components/NavBar'
import AboutusLandingPage from '../components/AboutusLandingPage'
import Line from '../components/Line'
import CEOSection from '../components/CEOSection'
import Testimonials from '../components/Testimonials'
import BackToTopButton from '../components/BackToTopButton'
import Statistics from '../components/Statistics'
import Footer from '../components/Footer'
import SocialMedia from '../components/SocialMedia'

const AboutusPage = () => {
  return (
    <div>
      <NavBar/>
      <SocialMedia/>
      <AboutusLandingPage/>
      <Line/>
      <CEOSection/>
      <Line/>
      <Testimonials/> 
      <Line/>
      <Statistics/>
      <BackToTopButton/>
      <Footer/>
    </div>
  )
}

export default AboutusPage
