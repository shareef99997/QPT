import React from 'react'
import './Header.css'
import people from '../../assets/people.png';
import ai from '../../assets/ai.png';


const Header = () => {
  return (
    <div className='qpt__header section__margin' id='home'>
      <div className='qpt__header-content'>
        <h1 className='gradient__text'>
          Let’s Build Something amazing with QPT OpenAI
        </h1>
        <p>
        Are you ready to experience the future? Welcome to QPT, your very own AI-powered virtual assistant! Our cutting-edge technology brings you a new way to interact with information, get things done, and have fun. Let us introduce you to the exciting world of AI assistance.
        </p>
        <div className='qpt__header-content__input'>
          <input type="email" placeholder='Your Email Address' />
          <button type='button'>Get Started</button>
        </div>
        <div className='qpt__header-content__people'>
          <img src={people} alt="people" />
          <p>1,600 people requested access a visit in last 24 hours</p>
        </div>
      </div>
        <div className='qpt__header-image'>
          <img className='qpt__header-img' src={ai} alt="ai" />
        </div>
    </div>
  )
}

export default Header