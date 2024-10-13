// /components/Card.tsx

import React from 'react';

// Define the props for the Card component
interface CardProps {
  concertname: string;
  venue: string;
  image_url: string;
}

const Card: React.FC<CardProps> = ({ concertname, venue, image_url }) => {
  return (
    <div className="card bg-base-100 w-96 shadow-xl">
      <figure className = "max-h-60">
        <img src={image_url} alt={concertname} />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{concertname}</h2>
        <p>{venue}</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">Get Tickets</button>
        </div>
      </div>
    </div>
  );
};

export default Card;
