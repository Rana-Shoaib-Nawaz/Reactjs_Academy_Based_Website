import React from 'react'
import './ContactSection.css'
import ContactInfo from './ContactInfo'
import { MdEmail, MdLocalPhone } from 'react-icons/md';
import ContactForm from './ContactForm';
export default function ContactSection() {
  return (
    <div className='Section'>
      <div className='container'>
        <h1>Contact Us</h1>

        <div className="ContactSection__wrapper">
          <div className='left'>
            <ContactInfo icon={<MdLocalPhone />} text="064-2464777" />

            <ContactInfo icon={<MdEmail />} text="info@Kips.edu.pk" />

            <ContactInfo text=' KIPS Preparations Dera Ghazi Khan Block K Campus' />
          </div>
          <div className='right'>
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  );
}
