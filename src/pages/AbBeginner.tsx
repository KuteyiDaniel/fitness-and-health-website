import React from 'react'
import NavBar from '../components/NavBar'
import '../scss/AbBeginner.scss'
import { fetchAbExercises } from '../types/apiRequest'
//import { IoFitness, IoGitNetworkOutline } from 'react-icons/io5'
//import { RxDotFilled } from 'react-icons/rx'
import { BiSolidCircleHalf } from 'react-icons/bi'
//import Line from '../components/Line'

const AbBeginner = () => {
    let [abdominalsTrainingData, setAbdominalsTrainingData] = React.useState<any[]>([])

    //let [state, setState] = React.useState([])


    React.useEffect(function(){
        fetchAbExercises()
        .then((response)=> { 
        setAbdominalsTrainingData(response.data)
        console.log(response.data)
        })
      }, [])


    
    
  return (
    <>
      <NavBar/>

      <div className='ab-beginner-page-width'>

        <div className="ab-beginner-cover">
          <img 
          src='./ab-beginner-cover-image.jpeg'
          alt='#'
          className='ab-beginner-cover-image'
          />

          <div className='ab-beginner-cover-overlay'>
            <header className='ab-section-header'>AB BEGINNER</header>
            <span className='ab-section-info' > <BiSolidCircleHalf/> 30 minutes | 10 workouts</span>
          </div>
        </div>
          
        {
          abdominalsTrainingData?.map((data, index)=>{
              return <div className='exercise-container'>
                <ul key={index} className='ab-exercises'>
                  <li className='ab-exercise'>{data.name}</li>
                  <div className='exercise-line'/>
                  <span className='number-of-exercise'>x20</span>
                </ul>

                <div className="exercise-illustration">
                  <img src='./exercise-illustration.jpg' alt='#'/>
                </div>
              </div>
              
           
          })
        }
      </div>
      

    </>
  )
}

export default AbBeginner
