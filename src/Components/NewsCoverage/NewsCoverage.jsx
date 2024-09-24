import React from 'react';
import TheEconomictimes from '../Assets/The-Economic-times.png';
import FinancialExpress from '../Assets/Financial-Express.png';
import fobes from '../Assets/Forbes.png'
import './NewsCoverage.css';
import Card2 from '../Card2/Card2';

const newsData = [
  {
    title: 'JUNE 2019 A special presentation complimentary with Forbes to Care24',
    content:
      'Forbes India Marquee, a marketing initiative, is a complimentary supplement for automation and the rise in health and wellness. Care24 was started in 2014 by IIT Kanpur alumni.',
    imageSrc: fobes,
    isFeatured: true
  },
  {
    title: 'Home caregiving thrives but talent needs to keep pace',
    content:
      'Proud to announce that Care24 is in a spree of market penetration as we have hired 3,000 – 5,000 caregiving staff in Mumbai and Delhi.',
    imageSrc: TheEconomictimes,
    isFeatured: true
  },
  {
    title: 'Mumbai-based healthcare start-up in talks with investors to raise funds',
    content:
      'Care24 operates in Mumbai and Delhi. It raised $350,000 from India Quotient in 2015 and $4 million from SAIF Partners in 2016 and till date has raised $4.5 million.',
    imageSrc: FinancialExpress,
    isFeatured: true
  }
];

const NewsCoverage = () => {
  return (
    <div className="news-coverage">
      <h2>Care24 News Coverage</h2>
      <p>
        Transforming home healthcare with quality home healthcare services in Mumbai, Delhi-NCR & Bangalore
      </p>
      <div className="news-grid">
        {newsData.map((news, index) => (
          <Card2
            key={index}
            title={news.title}
            content={news.content}
            imageSrc={news.imageSrc}
            isFeatured={news.isFeatured}
          />
        ))}
      </div>
    </div>
  );
};

export default NewsCoverage;
