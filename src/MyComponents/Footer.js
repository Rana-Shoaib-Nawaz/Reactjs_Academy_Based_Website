import React from 'react'
import './Footer.css'
import { FaTelegram, FaPhone, FaEnvelope, FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';
export default function Footer() {
  return (
    <div className='main-Footer'>
      <div className='container'>
        <div className='row'>
          <div className='col'>
            <ul className='list-unstyled'>
              <li> <a href=""><img src="data:image/png;base64,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" width={60} height={60} alt="" /></a> KIPS ACADEMY</li>
              <li>We are committed to transform the lives of students, faculty and staff by providing them a Superior learning experience. Our plan EQ & IQ enables them to lead a meaningful & rewarding life.</li>
              <i><a href="https://www.facebook.com/kips.edu.pk" className='facebook'> <FaFacebook /> </a></i>
              <i><a href="https://www.instagram.com/kips.official/?hl=en" className='insta'> <FaInstagram /> </a></i>
              <i><a href="https://twitter.com/kipsofficial?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor" className='Twitter'><FaTwitter /></a> </i>
            </ul>
          </div>
          <div className='col'>
            <h4>Blogs&News</h4>
            <ul className='list-unstyled'>
              <li>Blogs</li>
              <li>Latest News</li>
            </ul>
          </div>
          <div className='col'>
            <h4>Information</h4>
            <ul className='list-unstyled'>
              <li >< FaTelegram /> KIPS Preparations Dera Ghazi Khan</li>
              <li><FaPhone /> 064-2464777</li>
              <li><FaEnvelope /> info@Kips.edu.pk</li>
            </ul>
          </div>

        </div>
        <div className='row'>
          <p className='col-sm'>
            &copy; Kips Academy All Right Reserved {new Date().getFullYear()}
          </p>
        </div>
      </div>

    </div>
  )
}

