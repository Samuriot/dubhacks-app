import Card from '../components/Card'; 

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <div
        className="hero min-h-screen"
        style={{
          backgroundImage: `url('/assets/images/hero.webp')`, // Ensure the correct relative path
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-neutral-content text-center">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">
              Discover Concerts You'll Love, Right Where You Are
            </h1>
            <p className="mb-5">
              Unlock personalized concert recommendations based on your favorite artists and genres.
            </p>
            <button className="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>

      {/* Add a margin or padding to separate the hero section and the card */}
      <div className="join-horizontal mt-12 flex justify-center gap-x-6">
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
}
