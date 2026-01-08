import { Route, Routes } from 'react-router-dom'
import UserForm from './pages/UserForm'
import Home from './pages/Home'
import ThankYou from './pages/ThankYou'

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/checkin" element={<UserForm />} />
      <Route path="/thankyou/:userId" element={<ThankYou />} />
    </Routes>
  )
}

export default App