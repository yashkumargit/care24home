import React from 'react';
import './Highlights.css';
import Card from '../Card/Card';

const Highlights = () => {
  const cardData = [
    {
      title: 'PROFESSIONAL & COMPASSIONATE CAREGIVERS:',
      content: [
        '100% court & criminal verified*',
        'Certified to handle medical conditions*',
        'Medically trained by our professionals for 70 hrs*',
      ],
      icon: '🛡️',
    },
    {
      title: 'CONVENIENT AND PERSONALIZED SERVICES:',
      content: [
        '24hr dedicated care manager*',
        'Customized 8hr/10hr/12hr/24hr care plans*',
        '2000+ caregivers, attendants & nurse profiles',
      ],
      icon: '🔧',
    },
    {
      title: 'TRANSPARENT PRICING:',
      content: [
        'No Hidden Costs',
        'Competitively priced world-class healthcare services',
        'Refund on unsatisfactory service',
      ],
      icon: '💸',
    },
  ];

  return (
    <div className="highlights-container">
      <h2>Highlights of Care24</h2>
      <div className="cards-container">
        {cardData.map((data, index) => (
          <Card key={index} title={data.title} content={data.content} icon={data.icon} />
        ))}
      </div>
    </div>
  );
};

export default Highlights;
