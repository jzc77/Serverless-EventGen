import React, { useState, useEffect } from 'react';
import { BrowserRouter, Router, Routes, Route, Switch } from "react-router-dom";
import Home from './components/UI/Home'
import Profile from "./components/UI/Profile";
import './App.css';
import Header from './components/Header/Header';
import Hero from './components/UI/Hero';
// import Counter from './components/UI/Counter';
import Services from './components/UI/Services';
// import About from './components/UI/About';
// import Team from './components/UI/Team';
// import Blog from './components/UI/Blog';
import Review from './components/UI/Review';
import Search from './components/UI/Newsletter';
import Footer from './components/Footer/Footer';

import LoginModal from './components/Header/LoginModal.jsx' // added
import SignupModal from './components/Header/SignupModal';

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
      {/* <div className='nav__wrapper mt-5 justify-content-start ms-5'>
        <div className='logo d-flex align-items-center justify-content-around' style={{ width: '100%' }}>
          <h2>EventGen</h2>
          <div className='d-flex ms-2'>
            <a
              className='menu__link ms-4'

              onClick={() => {
                setLoginModalOpen(true);
              }}
            >
              Log In
            </a>
            <a
              className='menu__link ms-4'
              onClick={() => {
                setSignupModalOpen(true);
              }}
            >
              Sign Up
            </a>
          </div>

        </div>

      </div> */}

      {LoginModalOpen && <LoginModal setOpenModal={setLoginModalOpen} />}
      {SignupModalOpen && <SignupModal setOpenModal={setSignupModalOpen} />}
      {false && <Hero theme={theme} />}
    
      <div className="App">
        <BrowserRouter>
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
      </div>
    </>
  );
}

export default App;