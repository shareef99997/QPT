import React from 'react';
import qptLogo from '../../assets/logo.svg';
import './Footer.css';

const Footer = () => (
  <div className="qpt__footer section__padding">
    <div className="qpt__footer-heading">
      <h1 className="gradient__text">Do you want to step in to the future before others</h1>
    </div>

    <div className="qpt__footer-btn">
      <p>Request Early Access</p>
    </div>

    <div className="qpt__footer-links">
      <div className="qpt__footer-links_logo">
        <img src={qptLogo} alt="qpt_logo" /><br />
        <p>Riyadh,Saudi Arabia <br /> <br /> <br /> <br /> <br /> All Rights Reserved</p>
      </div>
      <div className="qpt__footer-links_div">
        <h4 className='gradient__text'>Get in touch</h4>
        <p>Shareef.99997@gmail.com</p>
        <p>0582635947</p>
        <a href="https://www.linkedin.com/in/shareef-ali-706488213?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3B%2Feujb4HkT8OUIMuouM30tQ%3D%3D" target='_blank' rel="noopener noreferrer"><p>https://www.linkedin.com/in/shareef-ali-706488213?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3B%2Feujb4HkT8OUIMuouM30tQ%3D%3D</p></a>
      </div>
      <div className="qpt__footer-links_div">
        <h4 className='gradient__text'>Links</h4>
        <p>Social Media</p>
        <p>Contact</p>
      </div>
      <div className="qpt__footer-links_div">
        <h4 className='gradient__text'>Company</h4>
        <p>Terms & Conditions </p>
        <p>Privacy Policy</p>
        <p>Contact</p>
      </div>
    </div>

    <div className="qpt__footer-copyright">
      <p>@2023 QPT. All rights reserved.</p>
    </div>
  </div>
);

export default Footer;
