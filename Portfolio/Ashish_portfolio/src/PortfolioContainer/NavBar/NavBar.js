import React, { useState } from 'react';
import './navbar.css';
import { FaFacebook, FaInstagram, FaBars, FaLinkedin, FaTimes } from 'react-icons/fa';
import { Link } from 'react-scroll'
const NavBar = () => {
    const [nav, setNav] = useState(false)
    const [slide, setSlide] = useState(false)


    const handleNav = () => {
        setNav(!nav)
        setSlide(!slide)
    }


    return (

        <div className='navbar'>
            <div className='navbar-container'>
                <div className={slide ? 'logo slide-right' : 'logo'}>
                    <h3>Portfolio.</h3>
                </div>
                <ul className={nav ? 'nav-menu active' : 'nav-menu'}>





                    <li><a href='/'><Link activeClass="active" to="home" spy={true} smooth={true} duration={500} >Home</Link></a></li>
                    <li><a href='/'><Link activeClass="active" to="about" spy={true} smooth={true} duration={500} >About</Link></a></li>
                    <li><a href='/'><Link activeClass="active" to="academic" spy={true} smooth={true} duration={500} >Academic</Link></a></li>
                    <li><a href='/'><Link activeClass="active" to="contact" spy={true} smooth={true} duration={500} >Contact</Link></a></li>
                 

                    <div className='mobile-menu'>
                        
                <a
                  href="ASHISH_RESUME_converted__2_-converted-converted.pdf"
                  download="Ashish ASHISH_RESUME_converted__2_-converted-converted.pdf"
                > 
                        <button>Resume</button>
                        </a>
                        <div className='social-icons'>
                        <a href="https://www.facebook.com/Ashishkarotiya7171">
                            <FaFacebook className='icons' />
                            </a>
                            <a href="https://www.instagram.com/Ashishkarotiya7171">
                            <FaInstagram className='icons' />
                            </a>
                            <a href="https://www.linkedin.com/in/ashish-kumar-31624a214">
                            <FaLinkedin className='icons' />
                            </a>

                        </div>
                    </div>

                </ul>

             
                <div className='hamburger' onClick={handleNav}>
                    {nav ? (<FaTimes size={20} style={{ color: 'white' }} />) : (<FaBars size={20} style={{ color: 'white' }} />)}
                </div>






            </div>

        </div>

    )
}

export default NavBar