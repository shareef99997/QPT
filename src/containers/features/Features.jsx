import React from 'react';
import Feature from '../../components/feature/Feature';
import './Features.css';

const featuresData = [
  {
    title: 'Instant Answers',
    text: "QPT provides lightning-fast responses to your questions, whether they're about facts, trivia, or everyday curiosities. It's like having a knowledgeable friend always by your side.",
  },
  {
    title: 'Personalized Assistance',
    text: "QPT adapts to your preferences and learns from your interactions, tailoring its responses to your unique style. It's your personal AI buddy that understands you better over time.",
  },
  {
    title: 'Productivity Boost',
    text: " Need help with tasks? QPT assists with organizing schedules, setting reminders, and even brainstorming ideas. It's a multitasking marvel that simplifies your life.",
  },
  {
    title: 'Educational Hub',
    text: "Explore QPT's educational feature, offering interactive lessons, quizzes, and a wealth of information. It's your virtual classroom, fostering learning and growth.",
  },
];

const Features = () => (
  <div className="qpt__features section__padding" id="features">
    <div className="qpt__features-heading">
      <h1 className="gradient__text">The Future is Between Your Hands and You Just Need to Realize It. Step into Future Today. & Make it Happen.</h1>
      <p>Request Early Access to Get Started</p>
    </div>
    <div className="qpt__features-container">
      {featuresData.map((item, index) => (
        <Feature title={item.title} text={item.text} key={item.title + index} />
      ))}
    </div>
  </div>
);

export default Features