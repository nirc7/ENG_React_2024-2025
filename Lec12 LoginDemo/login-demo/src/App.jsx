import './App.css';
import { Route, Routes } from 'react-router-dom';
import LoginPage from './Pages/LoginPage';
import RegistrationPage from './Pages/RegistrationPage';
import HomePage from './Pages/HomePage';

function App() {

  return ( 
    <>
      <div className="card">
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/registration" element={<RegistrationPage />} />
          <Route path="/home" element={<HomePage />} />
        </Routes>
      </div>
    </>
  )
}

export default App
