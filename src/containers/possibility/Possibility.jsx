import React from 'react'
import './Possibility.css'
import possibilityImage from '../../assets/possibility.png';


const Possibility = () => (
  <div className="qpt__possibility section__padding" id="possibility">
    <div className="qpt__possibility-image">
      <img src={possibilityImage} alt="possibility" />
    </div>
    <div className="qpt__possibility-content">
      <h4>Request Early Access to Get Started</h4>
      <h1 className="gradient__text">The possibilities are <br /> beyond your imagination</h1>
      <p>Dive into QPT's realm, where innovation and efficiency redefine possibilities. From swift answers to enhanced productivity, brace for the extraordinary.</p>
      <h4>Request Early Access to Get Started</h4>
    </div>
  </div>
);

export default Possibility