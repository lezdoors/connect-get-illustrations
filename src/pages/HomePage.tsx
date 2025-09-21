import React from 'react'
import Header from '../components/Header'
import Hero from '../components/Hero'
import ProcessSteps from '../components/ProcessSteps'
import ServicesOverview from '../components/ServicesOverview'
import TrustContact from '../components/TrustContact'
import Footer from '../components/Footer'

const HomePage: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <ProcessSteps />
      <ServicesOverview />
      <TrustContact />
      <Footer />
    </div>
  )
}

export default HomePage