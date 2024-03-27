import React from 'react'
//import axios from 'axios'
//import { fetchExercises } from '../types/apiRequest'
import '../scss/TrainingSection.scss'
import { Difficulty } from '../types/interface'
import { AiOutlineArrowRight } from 'react-icons/ai'
import { NavLink } from 'react-router-dom'
//import { fetchExercises} from '../types/apiRequest'

const TrainingSection = () => {

    const trainingDifficulty:Difficulty[] = [
      {level: 'BEGINNER' , path: '/beginner'},
      {level: 'INTERMEDIATE', path: '/intermediate'},
      {level: 'ADVANCED', path:'/advanced'}
    ]
        
    //let [trainingData, setTrainingData] = React.useState<any[]>([])
    //let apiKey = 'nU3PPztOZYQvPD1BSEK/qg==ZJ9atLGH9uLUTyBK'
    /*
     {
            trainingData.map((data, index)=> {
              return <div key={index}>
                {data.name}
              </div>
            })
      }
    */


   /* React.useEffect(function(){
      fetchExercises()
      .then((response)=> { 
      setTrainingData(response.data)
      console.log(response.data)
      })
    }, [])*/
    
  return (
    <div className='training-section-page-width'>
      <div className="training-section">
        <header className='training-header'>SELECT A DIFFICULTY</header>

        <div className="training-difficulties">
          {
            trainingDifficulty.map((data, index)=>{
              return <>
                <NavLink to={data.path} className='nav-link'>
                  <div key={index} className='training-difficulty'>
                      <h2>{data.level}</h2>
                      <AiOutlineArrowRight/>
                  </div>
                </NavLink>
              </>
            })
          }
        </div>
      </div>
    </div>
  )
}

export default TrainingSection
