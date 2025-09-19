import React from 'react';

interface TourDateItemProps {
  date: string;
  year?: string;
  venue: string;
}

const TourDateItem: React.FC<TourDateItemProps> = ({ date, year, venue }) => {
  return (
    <div className="tour-date-item">
      <div className="date-info">
        <span className="date">{date}</span>
        {year && <span className="year">{year}</span>}
      </div>
      <div className="venue-info">
        <h3>{venue}</h3>
      </div>
    </div>
  );
};

export default TourDateItem;