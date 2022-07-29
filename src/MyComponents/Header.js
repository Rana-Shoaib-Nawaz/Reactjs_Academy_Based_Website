import { FaPhone, FaEnvelope, FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { Navbar, Nav, NavDropdown, Container } from 'react-bootstrap';
import './Header.css'

const Header = () => {
  return (
    <div>
      <Navbar bg="dark" variant={"dark"} expand="lg">
        <Container fluid>
        
        <li ><a href="https://docs.google.com/forms/d/e/1FAIpQLSdVGhhYAP25WhrJwRREPcfcZaYh8q3iOB1Fkesprg54rwFvug/viewform?usp=sf_link" className='some my-4 mx-2'>Apply Now</a></li>
          <Link className='some my-3 mx-2' to="/">Home</Link>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav>
              <NavDropdown className='some my-3 mx-2' to='Academics'  title="Academics" id="navbarScrollingDropdown">

                <Link className='some' to='/MatricPreMed'>    <NavDropdown.Item href="1">Matric Pre-Medical </NavDropdown.Item></Link>
                <Link className='some' to='/MatricPreEng'>  <NavDropdown.Item href="2">Matric Pre-Engineering</NavDropdown.Item></Link>
                <Link className='some' to='/FscPreMed'> <NavDropdown.Item href="3">F.SC Pre-Med</NavDropdown.Item></Link>
                <Link className='some' to='/FscPreEng'>  <NavDropdown.Item href="4">F.Sc Pre-Eng</NavDropdown.Item></Link>
                <Link className='some' to='/Ics'> <NavDropdown.Item href="5">I.C.S</NavDropdown.Item></Link>
                <Link className='some' to='/Fa'> <NavDropdown.Item href="6">F.A</NavDropdown.Item></Link>
                <Link className='some' to='/Icom'> <NavDropdown.Item href="#action4">I.Com</NavDropdown.Item></Link>

              </NavDropdown>
              <Link className='some my-4 mx-2' to="/Contact">Contact Us</Link>
              <Link className='some my-4 mx-2' to="/LMS">LMS</Link>
              <Link className='some my-4 mx-2' to="/About">About Us</Link><br />
              <Link className='some my-4 mx-2' to="/LifeAtCampus ">Life At Campus</Link>
              
            </Nav>

            <li><a href='/'  className='white'><FaPhone />064-2464777</a></li>
            <li ><a href="/" className='white'><FaEnvelope />info@Kips.edu.pk</a></li>
            <li><a href='https://www.facebook.com/kips.edu.pk' className='facebook'><FaFacebook /></a></li>
            <li><a href="https://www.instagram.com/kips.official/?hl=en" className='insta'><FaInstagram /></a></li>
            <li ><a href="https://twitter.com/kipsofficial?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor" className='Twitter'><FaTwitter /></a></li> 

          </Navbar.Collapse>
        </Container>
      </Navbar>




    </div>


  );
}
export default Header
