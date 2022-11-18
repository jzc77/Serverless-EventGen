import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './components/UI/Home'
import Profile from "./components/UI/Profile";
import './App.css';
import Hero from './components/UI/Hero';
import LoginModal from './components/Header/LoginModal.jsx' // added
import SignupModal from './components/Header/SignupModal';
import { Account } from "./components/auth/Account"


function App() {
  const [LoginModalOpen, setLoginModalOpen] = useState(false); // added
  const [SignupModalOpen, setSignupModalOpen] = useState(false); // added
  const [theme, setTheme] = useState('')

  const toggleTheme = () => {
    theme === '' ? setTheme('light-theme') : setTheme('')
  }

  useEffect(() => {
    document.body.className = theme
  }, [theme])

  return (
    <>
      
        {LoginModalOpen && <LoginModal setOpenModal={setLoginModalOpen} />}
        {SignupModalOpen && <SignupModal setOpenModal={setSignupModalOpen} />}
        

      {false && <Hero theme={theme} />}

      <div className="App">
        <Account>
        
        <BrowserRouter>
        {/* <Status />? */}
          <Routes>
            <Route
              exact path="/"
              element={<Home />}
            />
            <Route
              path="/profile"
              element={<Profile />}
            />
          </Routes>

        </BrowserRouter>
        </Account>
      </div>
    </>
  );
}

export default App;