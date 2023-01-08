
import Login from './components/LoginPage/Login'
import User from './components/FakeUserPage/User'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'


function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/User' element={<User />} />
      </Routes>
    </Router>
  );
}

export default App;