import Header from './components/Header'
import Hero from './components/Hero'
import SocialProof from './components/SocialProof'
import ProcessSteps from './components/ProcessSteps'
import Pricing from './components/Pricing'
import Testimonials from './components/Testimonials'
import CTA from './components/CTA'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <SocialProof />
      <ProcessSteps />
      <Pricing />
      <Testimonials />
      <CTA />
      <Footer />
    </div>
  )
}

export default App