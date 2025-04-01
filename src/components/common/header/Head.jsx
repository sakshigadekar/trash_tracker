import React from "react"

import { useAuth0 } from "@auth0/auth0-react";

const Head = () => {
  const { loginWithRedirect, logout, isAuthenticated, user } = useAuth0()
  return (
    <>
      <section className='head'>
        <div className='container flexSB'>
          <div className='logo'>
            <h1>DUMPBUSTER</h1>
            <span>Reporting, Resolving, and Reclaiming a Cleaner Tomorrow</span>
          </div>
          

          <div className='social'>
            <i className='fab fa-facebook-f icon'></i>
            <i className='fab fa-instagram icon'></i>
            <i className='fab fa-twitter icon'></i>
            <i className='fab fa-youtube icon'></i>
          </div>
          <li>{
                        isAuthenticated && <p> {user.email}</p>
                    }
                    </li>
                    {
                        isAuthenticated ? (
                            <li>
                                <button className="login-button" onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>
                                    Log Out
                                </button>
                            </li>
                        )
                            : (
                                <li>
                                    <button className="login-button" onClick={() => loginWithRedirect()}>Log In</button>
                                </li>
                            )
                    }
        </div>
        
      </section>
      
    </>
  )
}

export default Head
