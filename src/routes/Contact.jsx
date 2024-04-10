import React from 'react'
import Contacts from '../assets/services.webp'
import ContactForm from '../components/ContactForm'
import Hero from '../components/Hero'
const Contact = () => {
  return (
    <div>
    <Hero
      cName="hero"
      heroImg={Contacts}
      title="Contact"
      text="Contact us and let us propose a plan adapted to your needs:"
    />
    <ContactForm/>
  </div>
  )
}

export default Contact
