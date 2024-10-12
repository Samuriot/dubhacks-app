import { useEffect, useState } from 'react';
import { supabase } from '../supabaseClient'; // Import your Supabase client
import mockConcerts, { Concert } from '../app/data/mockConcerts';


const SpotifyRecommendations = ({ user }) => {
  const [concerts, setConcerts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchConcerts = async () => {
      setLoading(true);

      // Fetching concerts based on the user's Spotify preferences
      const { data, error } = await supabase
        .from('concert') // Your table name
        .select('*')
        .in('concertgenre', user.favoriteGenres) // Assuming 'favoriteGenres' is an array from the user's Spotify data
        .order('concertstarttime', { ascending: true });

      if (error) {
        console.error('Error fetching Spotify-based concerts:', error);
      } else {
        setConcerts(data);
      }

      setLoading(false);
    };

    if (user) {
      fetchConcerts(); // Fetch concerts if the user is logged in
    }
  }, [user]); // This effect will run whenever the 'user' changes

  return (
    <div>
      {loading ? (
        <p>Loading Spotify-based concerts...</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {concerts.map((concert) => (
            <div key={concert.concertid} className="card bg-base-100 shadow-xl">
              <figure>
                <img src={concert.image_url} alt={concert.concertname} />
              </figure>
              <div className="card-body">
                <h2 className="card-title">{concert.concertname}</h2>
                <p>{concert.venue}</p>
                <button className="btn btn-primary">Get Tickets</button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default SpotifyRecommendations;
