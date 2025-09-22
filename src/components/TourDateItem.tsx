import React from 'react';

interface TourDateItemProps {
  date: string;
  year?: string;
  venue: string;
  desc?: string;
}

const TourDateItem: React.FC<TourDateItemProps> = ({ date, year, venue, desc }) => {
  return (
    <div className="tour-date-item">
      <div className="date-info">
        <span className="date">{date}</span>
        {year && <span className="year">{year}</span>}
      </div>
      <div className="venue-info">
        <h3>{venue}</h3>
        {desc && <p className="venue-desc">{desc}</p>}
      </div>
    </div>
  );
};

export default TourDateItem;