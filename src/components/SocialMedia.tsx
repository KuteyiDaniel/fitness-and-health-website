import React from 'react'
import '../scss/SocialMedia.scss'
import { GrInstagram} from "react-icons/gr";
import { GrFacebook} from "react-icons/gr";
import { SiGmail} from "react-icons/si";

const SocialMedia = () => {
  return (
    <div className='media-content'>  
        <SiGmail/>
        <GrFacebook/>
        <GrInstagram/>
    </div>
  )
}

export default SocialMedia
