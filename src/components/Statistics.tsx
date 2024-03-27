import React from 'react'
import '../scss/Statistics.scss'
import { PiUserPlus } from 'react-icons/pi'
import { MdOutlineAlarmOn, MdStars, MdTrackChanges} from 'react-icons/md'
import { BiCustomize } from 'react-icons/bi'

const Statistics = () => {
  return (
    <div className='stats-page-width'>
      <div className="stats">
        <div className="image-section">
            <img src='./lady-yoga-laptop.jpg' alt='='/>
        </div>

        <div className="text-section">
            <header>WHY PRIMEFIT?</header>
            <ul className='stats-list'>
                <li> 
                  <PiUserPlus/>
                  50+ exercises available.
                </li>

                <li>
                  <MdStars/>
                  Recommended by fitness enthusiasts.
                </li>

                <li>
                  <BiCustomize/>
                  Personalised workout plans.
                </li>

                <li>
                  <MdTrackChanges/>
                  Track your progress.
                </li>

                <li>
                  <MdOutlineAlarmOn/>
                  Set a daily reminder.
                </li>
            </ul>
        </div>
      </div>
    </div>
  )
}

export default Statistics
