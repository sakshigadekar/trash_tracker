import React from "react"
import Heading from "../../common/heading/Heading"
import "./Hero.css"

const Hero = () => {
  return (
    <>
      <section className='hero'>
        <div className='container'>
          <div className='row'>
            <Heading subtitle='WELCOME TO DUMPBUSTER' title='Report Illegal Dumping Sites' />
            <p>Together, we can make a difference in our communities, protect our natural resources, and create a cleaner, healthier future for generations to come.</p>
            <div className='button'>
              <button className='primary-btn'>
              REPORT SITE <i className='fa fa-long-arrow-alt-right'></i>
              </button>
              <button>
               VIEW SITES <i className='fa fa-long-arrow-alt-right'></i>
              </button>
            </div>
          </div>
        </div>
      </section>
      <div className='margin'></div>
    </>
  )
}

export default Hero
