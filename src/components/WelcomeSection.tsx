import React, {useState, useEffect, useRef}from 'react'
import '../scss/WelcomeSection.scss'
import { IoBarbellSharp } from "react-icons/io5";

const WelcomeSection:React.FC = () => {
    let elementData = useRef<HTMLElement|null>(null)

    function getElement(element:HTMLElement|null){
      if (element){
          elementData.current = element
      }
    }
  
    let [visibility, setVisibility] = useState(false)
    
    useEffect(()=> {
      let options = {
        rootMargin: "0px",
        threshold: 0.5,
      };
    
       let callback = (entries:IntersectionObserverEntry[], observer:IntersectionObserver) =>  {
        entries.forEach(entry => {
          if (entry.isIntersecting){
            setVisibility(true)
            
          }
        });
      }
    
      let observer = new IntersectionObserver(callback, options);
      console.log(observer)
      if (elementData.current){
        observer.observe(elementData.current)
      }
    
    }, [])


  return (
    <div className='page-width'>
        <div className="welcome-section" ref={element => getElement(element)}>
            
              <div className={`welcome-section-text ${visibility ? 'animate-text': ''}`}>
               {
                visibility ?
                <>
                    <header className='welcome-section-header'>
                    DISCOVER THE POWER OF A HEALTHIER YOU
                    <IoBarbellSharp/>
                    </header>

                    <p>
                        Step into the world of <b>PRIME FIT</b>, your one-stop destination for all things fitness!
                        Whether you're just starting out or a seasoned pro, we're here to guide you on your path to peak fitness. We
                        believe that everyone, regardless of their fitness level or background, should have accesss to quality fitness
                        resources. 
                    </p>


                    <p>
                        Our health and wellness blog is filled with informative articles to keep you updated on the latest
                        in fitness and nutrition. Explore personalized workouts and join a community of fitness enthusiasts.
                        Your journey to a healthier, fitter you starts here!
                    </p> 
                </>

                : ''
               
               }
               </div>
            

            <div className="welcome-section-image">
                <img src='./primefit-athlete.png' alt='#athlete'/>
            </div>
        </div>
    </div>
  )
}
    
export default WelcomeSection
