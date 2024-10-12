// /components/LocalConcerts.tsx

import React from 'react';
import mockConcerts, { Concert } from '../app/data/mockConcerts';
import Card from './Card'; // Import the reusable Card component

const LocalConcerts: React.FC = () => {
  return (
    <div className="container mx-auto p-4 mt-5">
      <h1 className="text-5xl font-bold text-base-content text-left mb-8 pl-4">Concerts Near You</h1>
      <div className = "flex justify-start pl-4">
        <label className="input input-bordered flex items-center gap-2 w-64">
            <input type="text" className="grow" placeholder="Search" />
            <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="h-4 w-4 opacity-70">
                <path
                fillRule="evenodd"
                d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                clipRule="evenodd" />
            </svg>
            </label>
        </div>
        <div className="flex flex-wrap justify-center mt-4 gap-8">
        {mockConcerts.map((concert: Concert) => (
            <Card
            key={concert.concertid}
            concertname={concert.concertname}
            venue={concert.venue}
            image_url={concert.image_url}
            />
        ))}
        </div>
    </div>
  );
};

export default LocalConcerts;
