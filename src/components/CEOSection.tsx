import React, {useState, useEffect, useRef} from 'react'
import '../scss/CEOSection.scss'
import TextWriter from './TextWriter';
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa6";

const CEOSection = () => {
  let textWords = [
    " We're a team of dedicated fitness enthusiasts, committed to promoting a healthy lifestyle. Our journey began with a shared passion for staying fit amidst our busy lives. We understand the struggle of balancing work, life, and health. That's why we've created this platform - to provide effective workout plans and advice that fits into your schedule. We're here to inspire, motivate, and guide you on your fitness journey. Join us and let's get fit together!"
]

const [inView, updateInView] = useState<boolean>(false);

let contentRef = useRef<HTMLElement | null>(null);
useEffect(() => {
        let config = {
            threshold: .5,
        }

        let callback = (entries: IntersectionObserverEntry[], observer: IntersectionObserver) => {
            for (const entry of entries) {
                if (entry.isIntersecting) {
                    if (!inView) {
                        updateInView(true);
                        observer.unobserve(entry.target)
                    }
                }
            }
        }
        let target = contentRef.current as HTMLElement;
        let observer = new IntersectionObserver(callback, config);

        observer.observe(target);

        return () => {
            observer.unobserve(target);
        }
}, [inView])

  return (
    <div className='ceo-page-width'>
      <div className="ceo-section" ref={el => contentRef.current = el}>
       <img src='./half-circle-yellow.svg' alt='#'/>
       <header>OUR AIM</header>
       <div className='ceo-message'>
       <FaQuoteLeft/>
       {
          inView ? <>
            
            <TextWriter words={textWords}
                        cursorColor={"0, 0, 0"}
                        writingSpeed={35}
                        cursorWidth={4}
                        //onComplete={() => updateShowSlider(true)}
                        //className={styles.writerText}
                        className='message'
            />
      
              
          </> : <></>
        }
        <FaQuoteRight/>
        <div className='ceo-name'>
          <span>Anna Odiachi - Founder</span>
        </div>
       </div>
        
      </div>
    </div>
  )
}

export default CEOSection
