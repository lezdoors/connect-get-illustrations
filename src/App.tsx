import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import RaccordementForm from './pages/RaccordementForm'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/enedis-raccordement" element={<RaccordementForm />} />
        {/* Add more routes as needed */}
      </Routes>
    </Router>
  )
}

export default App