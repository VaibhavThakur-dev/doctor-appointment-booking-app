import React from 'react'
import Dental from '../assets/Dental sciences.svg'
import Cardiology from '../assets/Cardiology.svg'
import ENT from '../assets/ENT.svg'
import General from '../assets/General Surgery.svg'
import Dermatology from '../assets/Dermatology.svg'
import ServiceCard from './UI/ServiceCard'

function Services() {
  return (
    <>
      <div id='services'  className='flex flex-col items-center justify-center py-16 md:py-24 gap-y-5 md:gap-y-24'>
      <h1 className='text-3xl font-bold '>Services</h1>
          <div className="flex flex-wrap justify-center flex-col md:flex-row md:gap-x-8 gap-y-10 px-8 md:p-0">
              <ServiceCard img ={Dental} name="Dental issue"/>
              <ServiceCard img ={Cardiology} name="Cardiology"/>
              <ServiceCard img ={ENT} name="ENT"/>
              <ServiceCard img ={General} name="General"/>
              <ServiceCard img ={Dermatology} name="Dermatology"/>
          </div>
      </div>
    </>
  )
}

export default Services



