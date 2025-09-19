import React from 'react';
import TourDateItem from './TourDateItem';

const TourDates: React.FC = () => {
  const tourDates = [
    {
      date: 'Dec 13',
      year: '2025',
      venue: 'Chennai - YMCA nandanam'
    }
  ];

  return (
    <section id="shows" className="tour-section">
      <div className="container">
        <h2 className="section-title">Upcoming Shows</h2>
        
        <div className="tour-dates">
          {tourDates.map((tour, index) => (
            <TourDateItem
              key={index}
              date={tour.date}
              year={tour?.year}
              venue={tour.venue}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TourDates;