import React from 'react'
import '../scss/BeginnerPlans.scss'
//import { fetchExercises } from '../types/apiRequest'
import NavBar from '../components/NavBar'
import { NavLink } from 'react-router-dom'
import { categoryDifficulty } from '../types/interface'
import { AiTwotoneThunderbolt } from 'react-icons/ai'

const BeginnerPlans = () => {

   /* let [beginnerTrainingData, setBeginnerTrainingData] = React.useState<any[]>([])

    React.useEffect(function(){
        fetchExercises()
        .then((response)=> { 
        setBeginnerTrainingData(response.data)
        console.log(response.data)
        })
      }, [])*/

      
    const beginnerCategoryDifficulty:categoryDifficulty[] = [
        {
            category: 'ABS BEGINNER' ,
            path: '/abs-beginner',
            image: 'beginner-abs-workout.jpeg',
            //icon: <AiTwotoneThunderbolt/>
        },
        
        {
            category: 'CHEST BEGINNER',
            path: '/chest-beginner',
            image: 'beginner-chest-workout.jpeg',
            //icon: <AiTwotoneThunderbolt/>
        },

        {
            category: 'ARM BEGINNER',
            path:'/arm-beginner',
            image: 'beginner-arm-workout.jpeg',
            //icon: <AiTwotoneThunderbolt/>
        },

        {
            category: 'QUAD BEGINNER',
            path: 'quad-beginner',
            image: 'beginner-quad-workout.jpg',
            //icon: <AiTwotoneThunderbolt/>
          
        },

        
        {
            category: 'BACK BEGINNER',
            path: 'back-beginner',
            image: 'beginnner-back-workout.jpeg',
        }
    ]
          

  return (
    <div>
        <NavBar/>
      
        <div className="beginner-page-width">

            <div className="beginner-section">

            {
            beginnerCategoryDifficulty.map((data, index)=>{
              return <>
                <NavLink to={data.path} className='nav-link'>
                  <div key={index} className='category-difficulty'>
                     <div className="category-bcg">
                        <h2>{data.category}</h2>
                        <div className='category-icon-container'>
                        <span className='category-icon'><AiTwotoneThunderbolt/></span>
                        <span className='category-icon'><AiTwotoneThunderbolt/></span>
                        <span className='category-icon'><AiTwotoneThunderbolt/></span>
                        </div>

                     </div>

                     <img src={data.image} alt='#' className='category-image'/>

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

export default BeginnerPlans
