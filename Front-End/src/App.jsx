
import Login from './components/LoginPage/Login'
import User from './components/FakeUserPage/User'
import CatImage from './components/HTTPStatusCodePage/StatusCode';
import DogCode from './components/DogPage/DogCode';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'


function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/User' element={<User />} />
        <Route path='/CatImage' element={<CatImage />} />
        <Route path='/DogCode' element={<DogCode />} />
      </Routes>
    </Router>
  );
}

export default App;