import React, { useState } from "react"
import { Link } from "react-router-dom"
import Head from "./Head"
import { useAuth0 } from "@auth0/auth0-react";
import "./header.css"

const Header = () => {
  
  const [click, setClick] = useState(false)

  return (
    <>
      <Head />
      <header>
        <nav className='flexSB'>
          <ul className={click ? "mobile-nav" : "flexSB "} onClick={() => setClick(false)}>
            <li>
              <Link to='/'>Home</Link>
            </li>
            <li>
              <Link to='/courses'>Report Site</Link>
            </li>
            <li>
              <Link to='/about'>About</Link>
            </li>
            {/* <li>
              <Link to='/team'>Team</Link>
            </li> */}
            <li>
              <Link to='/rewards'>Rewards</Link>
            </li>
            <li>
              <Link to='/journal'>Blogs</Link>
            </li>
            <li>
              <Link to='/contact'>Contact</Link>
            </li>

           
          </ul>
          <div className='start'>
            <div className='button'>Share on Social Media</div>
          </div>
          <button className='toggle' onClick={() => setClick(!click)}>
            {click ? <i className='fa fa-times'> </i> : <i className='fa fa-bars'></i>}
          </button>
        </nav>
      </header>
    </>
  )
}

export default Header
