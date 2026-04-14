import React from 'react'
import Hero from '../components/Hero'
import Card from '../components/Card'
import Collections from '../components/Collections'
import BestSeller from '../components/BestSeller'
import OurPolicy from '../components/OurPolicy'
import NewsLetter from '../components/NewsLetter'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <div>
     <Hero/>
    <Collections/>
     <BestSeller/>
     <OurPolicy/>
     <NewsLetter/>
     <Footer/>
    </div>
  )
}

export default Home
