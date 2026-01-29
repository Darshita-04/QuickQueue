import { Route, Routes } from 'react-router-dom'
import UserForm from './pages/UserForm'
import Home from './pages/Home'
// import ProtectedDashboard from './pages/ProtectedDashboard'
import ProtectedRoute from './components/ProtectedRoute'
import Signup from './pages/SignUp'
import Login from './pages/Login'
import Dashboard from './pages/Dashboard'

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/checkin" element={<UserForm />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/login" element={<Login />} />
      <Route
            path="/dashboard"
            element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            }
          />
    </Routes>
  )
}

export default App