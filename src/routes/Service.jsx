import React from 'react'
import Services from '../assets/new-service.jpg'
import Hero from '../components/Hero'
import Trip from '../components/Trip'
const Service = () => {
  return (
    <div>
         <Hero
        cName="hero"
        heroImg={Services}
        title="Service"
        text="Choose your favourite Destination"
      />
      <Trip/>
    </div>
  )
}

export default Service
