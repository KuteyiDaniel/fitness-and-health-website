import React, { useState, useEffect } from 'react'
import '../scss/Slider.scss'
import { slideShow } from '../types/interface';

const Slider: React.FC = () => {

  let slideOutWords: slideShow[] = [
    {
      text: "Practice puts brains in your muscles.",
      mentionedBy: '~ Sam Snead'
    },

    {
      text: " Exercise should be regarded as tribute to the heart.  ",
      mentionedBy: ' ~ Gene Tunney'
    },

    {
      text: " The pain you feel today will be the strength you feel tomorrow. ",
      mentionedBy: '~ Ritu Ghatourey'
    },

    {
      text: " Blood, sweat and respect. First two you give. Last one you earn. ",
      mentionedBy: '~ Dwayne “THE ROCK” Johnson'
    },

    {
      text: "If it doesn’t challenge you, it won’t change you.",
      mentionedBy: '~ Fred Devito'
    }

  ]

  let [index, setIndex] = useState(0);
  let delay = 3000

  useEffect(() => {
    setTimeout(
      () =>
        setIndex((prevIndex) =>
          prevIndex === slideOutWords.length - 1 ? 0 : prevIndex + 1
        ),
      delay
    );

    return () => { };
  }, [index]);


  return (
    <div className="slideshow">
      <div
        className="slideshowSlider"
        style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}
      >
        {
          slideOutWords.map((quote, index) => {
            return <div className="slide" key={index}>
              <q className='quote'>{quote.text}</q>
              <p>{quote.mentionedBy}</p>
            </div>
          })
        }
      </div>

    </div>
  )
}

export default Slider
