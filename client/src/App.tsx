import { Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Fleet from './components/Fleet'
import Capabilities from './components/Capabilities'
import Brain from './components/Brain'
import Trust from './components/Trust'
import ReserveForm from './components/ReserveForm'
import Footer from './components/Footer'
import Login from './pages/Login'
import Dashboard from './pages/Dashboard'
import Admin from './pages/Admin'
import { ProtectedRoute, AdminRoute } from './components/ProtectedRoute'

function Landing() {
  return (
    <div className="min-h-screen bg-[#05060a] text-white">
      <Navbar />
      <Hero />
      <Fleet />
      <Capabilities />
      <Brain />
      <Trust />
      <ReserveForm />
      <Footer />
    </div>
  )
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/login" element={<Login />} />
      <Route
        path="/dashboard"
        element={
          <ProtectedRoute>
            <Dashboard />
          </ProtectedRoute>
        }
      />
      <Route
        path="/admin"
        element={
          <AdminRoute>
            <Admin />
          </AdminRoute>
        }
      />
    </Routes>
  )
}

export default App
