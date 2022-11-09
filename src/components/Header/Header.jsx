import React, { useState, useRef, useEffect } from 'react';
import './header.css';
// import Button from 'react-bootstrap/Button';
// import Modal from 'react-bootstrap/Modal';

// import App from './LoginModal';
//import LoginModal from './LoginModal.jsx' // added

const nav__links = [
  {
    path: '#home',
    display: 'Home'
  },

  {
    path: '#login',
    display: 'Log In'
  },

  {
    path: '#signup',
    display: 'Sign Up'
  }
]

const Header = ({ theme, toggleTheme }) => {

  const headerRef = useRef(null)

  const menuRef = useRef(null)

  const headerFunc = () => {
    if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
      headerRef.current.classList.add('header__shrink')
    } else {
      headerRef.current.classList.remove('header__shrink')
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', headerFunc)

    return () => window.removeEventListener('scroll', headerFunc)
  }, [])

  const handleClick = (e) => {
    console.log("this is clicked");
    e.preventDefault()

    const targetAttr = e.target.getAttribute('href')

    const location = document.querySelector(targetAttr).offsetTop;

    window.scrollTo({
      left: 0,
      top: location - 80,
    });
  };

  const toggleMenu = () => menuRef.current.classList.toggle('menu__active')
 
  return (
    <header className='header' ref={headerRef}>
      <div className='container'>
        <div className='nav__wrapper'>
          <div className='logo'>
            <h2>EventGen</h2>
          </div>

          {/* ============== navigation ============== */}
          <div className='navigation' ref={menuRef} onClick={toggleMenu}>
            <ul className='menu'>
              {nav__links.map((item, index) => (
                <li className='menu__item' key={index}>
                  <a href={item.path} onClick={handleClick} className='menu__link'>
                    {item.display}
                  </a>
                </li>
              ))}
            </ul>

          </div>

          {/* ============== Light mode ============== */}

          <span className='mobile__menu' onClick={toggleMenu}>
            <i class='ri-menu-line'></i>
          </span>
        </div>
      </div >
    </header >
  )
}

export default Header