import React from 'react'
import '../../styles/counter.css'

const counterData = [
    {
        number: '5k',
        icon:'ri-emotion-normal-fill',
        text: 'Client'
    },
    {
        number: 350,
        icon:'ri-building-2-line',
        text: 'Running Projects'
    },
    {
        number: 900,
        icon:'ri-key-fill',
        text: 'Projects Completed'
    },
]

const Counter = () => {
  return (
    <section className='counter' id='projects'>
      <div className='container'>
      <div className='counter__top-content'>
                <h6 className='subtitle'>Our Projects</h6>
                <h2>Business associates work to deliver</h2>
                <h2 className='highlight'>for our community</h2>
            </div>


         <div className='counter__wrapper'>
            {counterData.map((item,index)=>(
              <div className='counter__item' key={index}>
                <span className='service__icon'>
                  <i class={item.icon}></i>
                </span>
               <h3 className='counter__number'>{item.number}+</h3>
               <h4 className='counter__title'>{item.text}</h4>
              </div>
            ))
            }
         </div>
      </div>
    </section>
  )
}

export default Counter