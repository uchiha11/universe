import React from 'react';
import TourDateItem from './TourDateItem';

const TourDates: React.FC = () => {
  const tourDates = [
    {
      date: "Dec 13",
      year: "2025",
      venue: "Chennai - YMCA nandanam"
    },
    {
      date: "Mar 22",
      year: "2026",
      venue: "Bangalore - Palace Grounds"
    },
    {
      date: "Apr 5",
      year: "2026",
      venue: "Mumbai - MMRDA Grounds"
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
              year={tour.year}
              venue={tour.venue}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TourDates;