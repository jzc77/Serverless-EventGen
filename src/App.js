import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './components/UI/Home'
import Profile from "./components/UI/Profile";
import './App.css';
import Hero from './components/UI/Hero';
import LoginModal from './components/Header/LoginModal.jsx' // added


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
      {modalOpen && <LoginModal setOpenModal={setModalOpen} />}


      <Hero theme={theme} />
      {/* {false && <Hero theme={theme} />} */}
      {/* <Counter /> */}
      <Search />
      <Services />
      {/* <About /> */}
      {/* <Team /> */}
      {/* <Blog /> */}
      <Review />
      <Footer />
    </>
  );
}

export default App;