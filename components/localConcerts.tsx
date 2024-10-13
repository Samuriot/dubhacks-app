// /components/LocalConcerts.tsx
"use client"; // Ensure this is a Client Component

import React, { useEffect, useState } from 'react';
import { supabase } from '../app/supabase'; // Import the Supabase client
import Card from './Card'; // Import the reusable Card component

interface Concert {
    concertid: string;
    venuename: string;
    mediaid: string;
    concerttype: string;
    concertgenre: string;
    concertstarttime: string;
    performername: string;
    performerid: string;
    performerimage: string;
  }

const LocalConcerts: React.FC = () => {
    const [concerts, setConcerts] = useState<Concert[]>([]);
    const [loading, setLoading] = useState(true);

    // Fetch concerts from Supabase when the component mounts
    useEffect(() => {
        const fetchConcerts = async () => {
            setLoading(true);

        // Fetch data from the 'concert' table without 'image_url'
        const { data, error } = await supabase
            .from('concert') // Replace with your actual table name
            .select(`
                concertid,
                venueid,
                mediaid,
                concerttype,
                concertgenre,
                concertstarttime,
                venue:venueid (venuename),
                performer:performerid (performername, performerimage)
              `);

        console.log("Supabase Data:", data);
        console.log("Supabase Error:", error);

        if (error) {
            console.error('Error fetching concerts:', error);
        } else {
            // Format the result so it's easier to use
            const formattedConcerts = data.map((concert: any) => ({
                concertid: concert.concertid,
                venueid: concert.venueid,
                venuename: concert.venue.venuename,
                mediaid: concert.mediaid,
                concerttype: concert.concerttype,
                concertgenre: concert.concertgenre,
                concertstarttime: concert.concertstarttime,
                performername: concert.performer.performername,
                performerid: concert.performerid,
                performerimage: concert.performer.performerimage || '../assets/images/hero.webp',
            }));

            setConcerts(formattedConcerts || []);
        }

        setLoading(false); // Stop loading
    };

    fetchConcerts();
}, []);

    if (loading) {
        return <p className="text-center">Loading concerts...</p>; // Show loading message while fetching
    }

    return (
        <div className="container mx-auto p-4 mt-5">
            <h1 className="text-5xl font-bold text-base-content text-left mb-8 pl-4">Concerts Near You</h1>
      
             {/* Display concerts */}
            <div className="flex flex-wrap justify-center mt-4 gap-8">
            {concerts.length > 0 ? (
            concerts.map((concert: Concert) => (
            <Card
                key={concert.concertid}
                concertname={concert.performername}
                venue={concert.venuename}
                image_url={concert.performerimage}
            />
        ))
        ) : (
            <p className="text-center">No concerts found.</p>
        )}
        </div>
    </div>
    );
};

export default LocalConcerts;
