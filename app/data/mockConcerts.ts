// /data/mockConcerts.ts

// Define the Concert interface
export interface Concert {
  concertid: string;
  concertname: string;
  venue: string;
  concertgenre: string;
  concertstarttime: string; // You can also use 'Date' here if you're dealing with Date objects
  image_url: string;
}

// Create mock concert data using the Concert interface
const mockConcerts: Concert[] = [
  {
    concertid: '1',
    concertname: 'Rock Fest',
    venue: 'Madison Square Garden',
    concertgenre: 'rock',
    concertstarttime: '19:00',
    image_url: '/assets/images/hero.webp',
  },
  {
    concertid: '2',
    concertname: 'Jazz Night',
    venue: 'Blue Note Jazz Club',
    concertgenre: 'jazz',
    concertstarttime: '20:00',
    image_url: '/assets/images/hero.webp',
  },
  {
    concertid: '3',
    concertname: 'Jazz Night 2',
    venue: 'Blue Note Jazz Club',
    concertgenre: 'jazz',
    concertstarttime: '20:00',
    image_url: '/assets/images/hero.webp',
  },
  {
    concertid: '1',
    concertname: 'Rock Fest',
    venue: 'Madison Square Garden',
    concertgenre: 'rock',
    concertstarttime: '19:00',
    image_url: '/assets/images/hero.webp',
  },
  {
    concertid: '2',
    concertname: 'Jazz Night',
    venue: 'Blue Note Jazz Club',
    concertgenre: 'jazz',
    concertstarttime: '20:00',
    image_url: '/assets/images/hero.webp',
  },
  {
    concertid: '3',
    concertname: 'Jazz Night 2',
    venue: 'Blue Note Jazz Club',
    concertgenre: 'jazz',
    concertstarttime: '20:00',
    image_url: '/assets/images/hero.webp',
  },
  
  // Add more mock data as needed
];

export default mockConcerts;
