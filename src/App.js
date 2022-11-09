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
import { EventPage } from './pages/events/eventPage';

function App() {
  const [modalOpen, setModalOpen] = useState(false); // added
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
                  setModalOpen(true);
                }}
              >
                Log In
              </button>
              <button
                className="openModalBtn"
                style={{ marginLeft: "auto" }}
                onClick={() => {
                  setModalOpen(true);
                }}
              >
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </div>
      {modalOpen && <LoginModal setOpenModal={setModalOpen} />}


      <Hero theme={theme} />
      {/* {false && <Hero theme={theme} />} */}
      {/* <Counter /> */}
      <Search />
      <EventPage />
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
