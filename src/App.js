import React, { useState, useEffect } from 'react';

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
      {/* <Header theme={theme} toggleTheme={toggleTheme} /> */}
      <div className='container'>
        <div className='nav__wrapper'>
          <div className="App">
            <div className='logo' style={{ display: "flex" }}>
              <h2>EventGen</h2>
              <button
                className="openModalBtn"
                style={{ marginLeft: "auto" }}
                onClick={() => {
                  setLoginModalOpen(true);
                }}
              >
                Log In
              </button>
              <button
                className="openModalBtn"
                style={{ marginLeft: "auto" }}
                onClick={() => {
                  setSignupModalOpen(true);
                }}
              >
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </div>
      {LoginModalOpen && <LoginModal setOpenModal={setLoginModalOpen} />}
      {SignupModalOpen && <SignupModal setOpenModal={setSignupModalOpen} />}

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
