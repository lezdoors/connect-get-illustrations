import Header from './components/Header'
import Hero from './components/Hero'
import ProcessSteps from './components/ProcessSteps'
import ServicesOverview from './components/ServicesOverview'
import TrustContact from './components/TrustContact'
import Footer from './components/Footer'

function App() {
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

export default App