import React from 'react'
import './Header.css'
import Image from '../Image/Image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faHome } from '@fortawesome/free-solid-svg-icons';
export default function Header() {
  return (
    <header>
        <div className='header-Main-Div'>    
            <div className='header-Top-Div'>
                <div className='header-top-left-Div'>
                    {/* mail Image */}
                    <div className='mail-div'>
                        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#5f6368"><path d="M160-160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h640q33 0 56.5 23.5T880-720v480q0 33-23.5 56.5T800-160H160Zm320-280L160-640v400h640v-400L480-440Zm0-80 320-200H160l320 200ZM160-640v-80 480-400Z"/></svg>
                        <p className='ashish-Mail'>ashish@ashish.com</p>
                    </div>
                    {/* time image */}
                    <div className='time-div'>
                        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#5f6368"><path d="m612-292 56-56-148-148v-184h-80v216l172 172ZM480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-400Zm0 320q133 0 226.5-93.5T800-480q0-133-93.5-226.5T480-800q-133 0-226.5 93.5T160-480q0 133 93.5 226.5T480-160Z" className='time-svg'/></svg>
                        <p>Mon - Sat 9:00am - 6:00pm</p>
                    </div>
                </div>

                <div className='header-top-right-Div'>
                    <div className='facebook-svg-div'>
                        <FontAwesomeIcon icon={faFacebookF}  className='facebook-fontAwesome'/>
                    </div>
                    <div className='twitter-svg-div'>
                        <FontAwesomeIcon icon={faTwitter} className='twitter-fontAwesome' />
                    </div>
                    <div className='indeed-svg-div'>
                        <FontAwesomeIcon icon={faLinkedin} className='linkedin-fontAwesome' />
                    </div>
                </div>
            </div>
            <div className='header-Bottom-Div'>
                
                <div className='logo-Div'>
                    <Image src={'/Divisense_Technologies_Png.png'} className='logo-png'/>
                </div>

                <div className='header-Bottom-right-div'>
                    <div className='header-Bottom-inner-list-Div'>
                        <ul className='header-Bottom-inner-list-Ul'>
                            <li>Home</li>
                            <li>About Us</li>
                            <li>Product & Services</li>
                            <li>Services</li>
                            <li>Blog</li>
                        </ul>
                    </div>
                    
                    <div className='header-Bottom-inner-ContactUs-Button-Div'>
                        <button className='header-Bottom-inner-ContactUs-Button'>Contact Us</button>
                    </div>
                </div>
            </div>
        </div>
    </header>
  )
}

