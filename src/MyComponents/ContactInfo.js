import React from 'react'
import { MdPlace } from 'react-icons/md';
import './ContactInfo.css';

export default function ContactInfo({
    icon = <MdPlace/>,
    text = 'This is info',
}) {
  return (
   
    <div className='classinfo'>
       
        <div className='icon'>{icon}</div>
        <div className='info'>
            {text}
        </div>
        
    </div>
    
  )
}
