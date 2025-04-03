import React from 'react'
import Landing from './components/landing/Landing'
import Markets from './components/Markets/Markets'
import OurServices from './components/OurServices/OurServices'
import Audiences from './components/Audiences/Audiences'
import Platforms from './components/Platforms/Platforms'
import Channels from './components/Channels/Channels'
import Brands from './components/Brands/Brands'
import CaseStudies from './components/CaseStudies/CaseStudies'
import ContactUs from './components/ContactUs/ContactUs'


const Home = () => {
  
  return (
    <div>
      <Landing/>
      <OurServices/>
      <Markets/>
      <Audiences/>
      <Platforms/>
      <Channels/>
      <Brands/>
      <CaseStudies/>
      <ContactUs/>
    </div>
  )
}

export default Home
