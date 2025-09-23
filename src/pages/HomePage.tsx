import React from 'react'
import Header from '../components/Header'
import Hero from '../components/Hero'
import FormSection from '../components/FormSection'
import ProcessSteps from '../components/ProcessSteps'
import ServiceTypes from '../components/ServiceTypes'
import ServicesOverview from '../components/ServicesOverview'
import TrustContact from '../components/TrustContact'
import Footer from '../components/Footer'

const HomePage: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <FormSection />
      <ProcessSteps />
      <ServiceTypes />
      <ServicesOverview />
      <TrustContact />
      <Footer />
    </div>
  )
}

export default HomePage