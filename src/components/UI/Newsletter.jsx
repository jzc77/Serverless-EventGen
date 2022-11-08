import React from 'react'
import '../../styles/newsletter.css'

const Search = () => {
  return (
    <section className='newsletter'>
        <div className='container'>
            <div className='newsletter__wrapper'>
                <div className='newsletter__content'>
                    <h6 className='subtitle'>Vancouver is awesome!</h6>
                    <h2>What event do you want to <span className='highlight'>explore?</span></h2>
                </div>

                <div className='newsletter__form'>
                   <input type='email' placeholder='Search for "hiking"' />
                   <button className='secondary__btn subscribe__btn'>Search</button> 
                </div>
            </div>
        </div>
    </section>
  )
}

export default Search