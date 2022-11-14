import { useState, useEffect } from 'react';
import LoginModal from '../Header/LoginModal' // added
import SignupModal from '../Header/SignupModal';

function NewHeader() {
  const [LoginModalOpen, setLoginModalOpen] = useState(false) // added
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
      <div className='nav__wrapper mt-5 justify-content-start ms-5'>
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

      </div>

      {LoginModalOpen && <LoginModal setOpenModal={setLoginModalOpen} />}
      {SignupModalOpen && <SignupModal setOpenModal={setSignupModalOpen} />}
      {/* {false && <Hero theme={theme} />} */}
    

    </>
  );
}

export default NewHeader;