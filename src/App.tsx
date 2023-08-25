import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './style/App.css';
import Login from '../src/components/Login/Login';
import Profile from '../src/components/Profile/Profile'; 
import Header from './components/Header/Header';
import FormStepTwo from './components/formStepTwo/formStepTwo';
import NewEditProfile from './components/edit_profile/newEditProfile';
import RegisterForm from './components/RegisterForm';


const App: React.FC = () => {
  const [isLoggedIn, setIsLoggedIn] = React.useState(false);

  const handleLoginSuccess = () => {
    setIsLoggedIn(true);
  };

  return (

    <Router>
      <div className="App">
        <Header isLoggedIn={isLoggedIn} />
        <Routes>
          <Route path="/" element={<Login onLoginSuccess={handleLoginSuccess} />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/newEditProfile" element={<newEditProfile />} />
          <Route path="/registertwo" element={<FormStepTwo />} />
          <Route path="/RegisterForm" element={<RegisterForm/>} />

        </Routes>
      </div>
    </Router>

  );
};

export default App;

