import React, { useEffect , /*useRef*/} from 'react'
import '../scss/Modal.scss'
//import {BsFire} from "react-icons/bs";
//import { FcCancel } from 'react-icons/fc';
import { MdCancelPresentation } from 'react-icons/md';
const Modal = () => {

  let [displayModal, setDisplayModal] = React.useState<boolean>(false)
//  let  dialogue = useRef<HTMLDialogElement|null>(null)
  
  useEffect(()=> {
    setTimeout(()=> {
      setDisplayModal(!displayModal)
     // dialogue.current?.showModal()
    }, 6000)
  }, [])

  function closeModal(){
   setDisplayModal(false)
    console.log('clicked')
  }

  return (
    <div className='modal' style={{display : displayModal ? 'block' : 'none'}}>
      

        <div className='modal-content'>
        <div className="close-modal-button" onClick={() => closeModal()}>
          <MdCancelPresentation/>
        </div>

        <header className='modal-header'>Stay hydrated, Eat balanced meals, Mix up workouts, and Rest well for optimal fitness </header>

        <p className='modal-text'>Balance workouts with a busy schedule, try different exercises for progress, and discover your optimal workout time for motivation!</p>
        <p className='modal-text'> PrimeFit's reminders ensure you don't skip your workouts amidst a busy day!</p>

        <button className="modal-button">
          Set a Reminder
        </button>


        </div>  
      
      </div>
   
  
  
  )
}

export default Modal

