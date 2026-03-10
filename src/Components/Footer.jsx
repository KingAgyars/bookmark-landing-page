import React from 'react'
import logo from '../assets/images/logo-bookmark.svg'
import facebook from '../assets/images/icon-facebook.svg'
import twitter from '../assets/images/icon-twitter.svg'


const Footer = () =>{

    return (
        <>
     
        <footer className='foot'>
          <div className='foot-style'>

               <div className="foot-logo">
            <img src= {logo} alt="bookamrk-logo" />
            <div className="foot-nav">
            <nav className='foot-nav-list'>
                <ul>
                    <li><a href="#">FEATURES</a></li>
                    <li><a href="#">PRICING</a></li>
                    <li><a href="#">CONTACT</a></li>
                </ul>
            </nav>
          </div>
            
          </div>
          

          <div className="foot-handles">
            
            <a href='https://www.facebook.com'>
            <img src={facebook} alt="fb-logo"/>
            </a>
            <a href='https://www.twitter.com'>
            <img src={twitter} alt="fb-logo"/>
            </a>
          </div>
          </div>
         
        </footer>
        
        
        </>
    )
}


export default Footer;