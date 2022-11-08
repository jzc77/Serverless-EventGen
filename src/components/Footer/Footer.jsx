import React from 'react'
import './footer.css'


const quickLinks01 =[
    {
        path: '#',
        display: 'Sign up'
    },
    {
        path: '#',
        display: 'Log in'
    },
    {
        path: '#',
        display: 'Help'
    },
]

const quickLinks02 =[
    {
        path: '#',
        display: 'Groups'
    },
    {
        path: '#',
        display: 'Calendar'
    },
    {
        path: '#',
        display: 'Topics'
    },
]

const quickLinks03 =[
    {
        path: '#about',
        display: 'About'
    },
    {
        path: '#',
        display: 'Jobs'
    },
    {
        path: '#blog',
        display: 'Blog'
    },
]

const Footer = () => {

    const year = new Date().getFullYear()
  return (
    <footer className='footer'>
        <div className='container'>
            <div className='footer__wrapper'>
                <div className='footer__logo'>
                    <h2>EventGen</h2>
                    <p className='description'>Find. Meet. Grow!</p>
                    <p className='small__text description'>Vancouverites use EventGen to make lifelong friends through common events. Let's get you connected.</p>
                </div>

                <div className='footer__quick-links'>
                    <h3 className='quick__links-title'>Your Account</h3>
                    <ul className='quick__links'>
                        { quickLinks01.map((item,index) => (
                           <li className='quick__link-item' key={index}>
                             <a href={item.path}>{item.display}</a>
                           </li>
                        ))}
                    </ul>
                </div>

                <div className='footer__quick-links'>
                    <h3 className='quick__links-title'>Discover</h3>
                    <ul className='quick__links'>
                        { quickLinks02.map((item,index) => (
                           <li className='quick__link-item' key={index}>
                             <a href={item.path}>{item.display}</a>
                           </li>
                        ))}
                    </ul>
                </div>

                <div className='footer__quick-links'>
                    <h3 className='quick__links-title'>Company</h3>
                    <ul className='quick__links'>
                        { quickLinks03.map((item,index) => (
                           <li className='quick__link-item' key={index}>
                             <a href={item.path}>{item.display}</a>
                           </li>
                        ))}
                    </ul>
                </div>
            </div>

            <p className='copyright'>Copyright {year} EventGen. All rights reserved.{''}</p>
        </div>
    </footer>
  )
}

export default Footer