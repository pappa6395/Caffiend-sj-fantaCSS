import React from 'react'
import { FaInfoCircle } from "react-icons/fa";

const Hero = () => {


  return (

    <div>
        <h1>Coffee Tracking for Coffee <abbr title="An enthusiast or 
        dedevotee">Fiends</abbr>!</h1>
        <div className='benefit-list'>
            <h3 className='font-bolder'>Try <span 
            className='text-gradient'>Caffiend</span> and start ...</h3>
            <p>✅ tracking ever coffee</p>
            <p>✅ Measuring your blood caffiend levels</p>
            <p>✅ Costing and quanitifying your addition</p>
        </div>
        <div className='card info-card'>
          <div>
            <FaInfoCircle />
            <h3>Did you know...</h3>
          </div>
          <h5>That caffiene&apos;s half-life is about 5 hours?</h5>
          <p>This means that after 5 hours, half the caffiene you consumed
            is still in your system, keeping you alert longer! So if you 
            drink a cup of coffee with 200 mg of caffiene, 5 hours, later, 
            you&apos;ll still have about 100 mg of caffiene in your system.
          </p>
        </div>
    </div>
  )
}

export default Hero