import React from 'react';
import '../../styles/review.css';
import Slider from 'react-slick';

import ava01 from '../../images/ava-1.png'
import ava02 from '../../images/ava-2.png'
import ava03 from '../../images/ava-3.png'

const Review = () => {

    const settings = {
        dots: false,
        infinite: true,
        speed: 1000,
        autoplay: true,
        autoplaySpeed: 2500,
        slidesToShow: 1,
        slidesToScroll: 1,
        swiperToSlide: true,
    }
    return (
        <section id='review' className='review'>
            <div className='container'>
                <div className='slider__content-top'>
                    {/* <h6 className='subtitle'>Review</h6> */}
                    <h2>Lifelong friendships as told by <span className='highlight'>1,000+ EventGeners</span>!</h2>
                </div>
                <div className='slider__wrapper'>
                    <Slider {...settings}>
                        <div className='slider__item'>
                            <p className='description'>The experience was great. The meetup was very friendly and spending a day there was a great idea. Everyone was very remarkable!</p>

                            <div className='customer__details'>
                                <div className='customer__img'>
                                    <img src={ava01} alt='' />
                                </div>

                                <div>
                                    <h5 className='customer__name'>Bae Ou</h5>
                                    <p className='description'>Gardener, Community Garden</p>
                                </div>
                            </div>
                        </div>

                        <div className='slider__item'>
                            <p className='description'>We now spend less time online and more time together. Thanks to the connection feature, all connection hassles are removed!</p>

                            <div className='customer__details'>
                                <div className='customer__img'>
                                    <img src={ava02} alt='' />
                                </div>

                                <div>
                                    <h5 className='customer__name'>Ngone Ou</h5>
                                    <p className='description'>Bartender, Malone's</p>
                                </div>
                            </div>
                        </div>

                        <div className='slider__item'>
                            <p className='description'>An excellent web application. I'm also very satisfied with creating an event feature! The interface is easy to navigate. All attendees were kind and made me feel very comfortable.</p>

                            <div className='customer__details'>
                                <div className='customer__img'>
                                    <img src={ava03} alt='' />
                                </div>

                                <div>
                                    <h5 className='customer__name'>Kyat Ou</h5>
                                    <p className='description'>Dog walker, Harbourview Park</p>
                                </div>
                            </div>
                        </div>
                    </Slider>
                </div>
            </div>
        </section>
    )
}

export default Review