import React from 'react'
import './WhatQPT.css'
import { Feature } from "../../components"


const WhatQPT = () => {
  return (<div className='qpt__outside
  'id='wqpt'><div className='qpt__whatqpt section__margin' id='wqpt'>
      <div className='qpt__whatqpt-feature'>
        <Feature title="What is QPT" text ="QPT, our AI bot, is like a digital buddy here to help out. Ask it anything—from random facts to real questions—and it's on it! But that's not all. QPT's got your back for to-do lists, scheduling, and brainstorming too. The cool part? The more you chat, the better QPT gets at understanding you. Think of it as your smart, friendly AI sidekick, making things smoother in your tech-savvy life."/>
      </div>
      <div className='qpt__whatqpt-heading'>
        <h1 className='gradient__text'>
          The possibilities are beyond your imagination
          </h1>
          <p>Explore The Library</p>
      </div>
      <div className='qpt__whatqpt-container'>
      <Feature title="Chatbots" text= "your dynamic companions, always available for a chat, offering assistance, and injecting a touch of awesomeness into your digital interactions."/>
      <Feature title="Knowledgebase" text= "Your treasure trove of information, just a click away, making learning delightful and easy."/>
      <Feature title="Education" text= "Your virtual classroom, expanding horizons through interactive lessons, quizzes, and endless learning possibilities."/>
      </div>
    </div></div>
    
  )
}

export default WhatQPT