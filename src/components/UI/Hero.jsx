import React from 'react'
import '../../styles/hero.css'

import heroDarkImg from '../../images/pic-main-calendar.png'
import lightImg from '../../images/light-hero-bg.png'

const Hero = ({theme}) => {
  return (
    <section className='hero__section' id='home'>
        <div className='container'>
            <div className='hero__wrapper'>
                <div className='hero__content'>
                    <div>
                    <h2>Connect with your community through discovering events</h2>
                    {/* <h2>through discovering events</h2> */}
                    <h2 className='highlight'>Find. Meet. Grow!</h2>
                    </div>
                    <p className='description'id="main-slogan">Finding interesting events and making friends in Vancouver is easier than ever before with EventGen.</p>
                    <div className='hero__btns'>
                        <button className='primary__btn'>Get Started Now</button>
                        <button className='secondary__btn'>Discover Events</button>
                    </div>
                </div>
                <div className='hero__img'>
                  <img 
                    src={theme === 'light-theme' ? lightImg : heroDarkImg} 
                    alt='pic-main-calendar'
                  />
                </div>
            </div>
        </div>
    </section>
  )
}

export default Hero