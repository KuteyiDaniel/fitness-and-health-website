import React, {useState, useEffect, CSSProperties } from 'react'
import '../scss/IndexPage.scss'
import NavBar from '../components/NavBar'
import Banner from '../components/Banner'
import WelcomeSection from '../components/WelcomeSection'
import CategorySection from '../components/CategorySection'
import FAQ from '../components/FAQ'
import Footer from '../components/Footer'
import BackToTopButton from '../components/BackToTopButton'
import SocialMedia from '../components/SocialMedia'
//import ClipLoader from "react-spinners/ClipLoader";
import { MoonLoader } from 'react-spinners'
import Modal from '../components/Modal'



const IndexPage = () => {
      
    let [loading, setLoading] = useState<boolean>(false)

    useEffect(()=> {
      setLoading(true)
      setTimeout(() => {
        setLoading(false)
      }, 3000)

    }, [])

    const override: CSSProperties = {
      display: "block",
      margin: "0 auto",
      borderColor: "red",
    };
    
  return (
    <div className='App'>
      {
        loading ? 
        <MoonLoader
          color={'#6B5BFF'}
          loading={loading}
          cssOverride={override}
          size={50}
          aria-label="Loading Spinner"
          data-testid="loader"
        />

        :

        <div className='main-container'>
            <NavBar/>
            <Banner/>  
            <SocialMedia/>
            <WelcomeSection/>
            <CategorySection/>
            <FAQ/>
            <Footer/>
            <BackToTopButton/>
            <Modal/>
            
        </div>

        /*
         
          */
      }
     
    </div>
  )
}

export default IndexPage
