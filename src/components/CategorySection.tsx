import React, { useRef, useEffect } from 'react'
import '../scss/CategorySection.scss'
import { categoryArray } from '../types/interface'

const CategorySection = () => {
  let fitnessItems = useRef<HTMLElement[]>([])
  let maxAnimation = useRef(0)
  let elementData = useRef<HTMLElement | null>(null)

  function getElement(element: HTMLElement | null) {
    if (elementData) {
      elementData.current = element
    }
  }


  useEffect(() => {
    function animateItem(index = 0) {
      if (fitnessItems.current != null) {

        if (index === 0) {
          maxAnimation.current = fitnessItems.current.length
        }

        let item = fitnessItems.current[index]
        if (item) {
          item.classList.add('fade-item');

          if (index < maxAnimation.current) {
            setTimeout(() => {
              animateItem(index + 1)
            }, 300)
          }
        }
      }
    }

    let options = {
      rootMargin: "0px",
      threshold: .5,
    };

    let callback = (entries: IntersectionObserverEntry[], observer: IntersectionObserver) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          animateItem()

        }
      });
    }


    let observer = new IntersectionObserver(callback, options);
    console.log(observer)
    if (elementData.current) {
      observer.observe(elementData.current)
    }

  }, [])

  let categories: categoryArray[] = [
    {
      category: 'Cardio/HIIT',
      image: './cardio-man.jpg',
      details:
        " Cardiovascular exercise plays a vital role in maintaining a healthy lifestyle."
        + " It's not just about weight loss, but overall wellness.  Cardio strengthens your heart and lungs, enhances your immune system,"
        + " and boosts your mood by releasing endorphins, the body's natural feel-good hormones."
    },

    {
      category: 'Strength',
      image: './strength-man.jpg',
      details: "Strength exercises are key for building and maintaining muscle mass. They improve your body's physical strength,"
        + " enhance bone density, and even boost your metabolism. So, they're not just about getting stronger,"
        + " they're about overall health and wellness too!"
    },

    {
      category: 'Pilates',
      image: './pilates-man.jpg',
      details: "Pilates exercises are important as they enhance core strength and stability."
        + " They also improve posture and flexibility, contributing to overall body balance and control. "
        + " Plus, they can be done anywhere, making them a convenient choice for maintaining a consistent fitness routine."
    },

    {
      category: 'Stretching',
      image: './stretching-man.jpg',
      details: "Stretching exercises are vital for maintaining flexibility and range of motion in your joints. "
        + "They also help to relieve muscle tension and reduce post-workout soreness. And let's not forget, stretching can also be a great way to unwind and relax!"
    },

    {
      category: 'Plyometrics',
      image: './plyometrics-man.jpg',
      details: "Plyometric exercises are crucial as they enhance your muscle power, strength, and speed. "
        + "They also improve your body's ability to burn calories even at rest due to the intense nature of the exercises. "
        + " Lastly, they're fun and add variety to your workout routine!"
    },

    {
      category: 'Balance',
      image: './balance-man.jpg',
      details: "Balance exercises are key for maintaining stability and preventing falls. "
        + " They improve your body's proprioception, helping you to better control your movements."
        + " Plus, they can be beneficial in slowing down the loss of balance control that naturally occurs as we age."
    },



  ]
  return (
    <div className='category-page-width'>
      <header className='category-heading'> OUR TRAINING PROGRAMS </header>
      <div className="category-section" ref={element => getElement(element)}>

        <div className='category-gallery'>
          {
            categories.map((data, index) => {
              return <div key={index}
                ref={element => fitnessItems.current[index] = element as HTMLElement}
                className='category skill-set'
              >
                <img src={data.image} alt='#' className='category-image' />

                <div className='category-overlay'>
                  <header>{data.category}</header>
                  <p>{data.details}</p>
                </div>
              </div>
            })
          }
        </div>

      </div>
    </div>
  )
}

export default CategorySection
