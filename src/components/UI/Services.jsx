import React from 'react';
import '../../styles/services.css'

const serviceData = [
  {
    icon:'ri-basketball-fill',
    title: 'Kitsilano Beach Basketball',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.'
  },

  {
    icon:'ri-emotion-laugh-fill',
    title: 'Live Stand-Up Comedy',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.'
  },

  {
    icon:'ri-calendar-todo-fill',
    title: 'Dog and Cat Lovers Meetup',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.'
  },

  {
    icon:'ri-walk-fill',
    title: 'Stanley Park Trail run',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.'
  },
]

const Services = () => {
  return (
    <section id='service'>
        <div className='container'>
            <div className='services__top-content'>
                {/* <h6 className='subtitle'>Our Services</h6> */}
                <h2 style={{textAlign: 'left'}}>Popular Events in Vancouver</h2>
                {/* <h2 className='highlight'>Our best services</h2> */}
            </div>

            <div className='service__item-wrapper'>
              {
                serviceData.map((item, index)=> (
                  <div className='services__item key={index}'>
                <span className='service__icon'>
                  <i class={item.icon}></i>
                </span>
                <h3 className='service__title'>{item.title}</h3>
                <p className='description'>{item.desc}</p>
              </div>
                ))
              }
            </div>
        </div>
    </section>
  )
}

export default Services