import { useMemo, useState } from 'react';
import HeaderNav from './components/HeaderNav';
import Hero from './components/Hero';
import AQIMapAndCard from './components/AQIMapAndCard';
import NewsGrid from './components/NewsGrid';
import AuthModal from './components/AuthModal';
import Footer from './components/Footer';

function BannerQuote() {
  return (
    <section className="relative">
      <div className="relative">
        <div
          className="h-[340px] w-full bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1502301197179-65228ab57f78?q=80&w=2400&auto=format&fit=crop')",
          }}
        />
        <div className="absolute inset-0 bg-black/60 flex items-center">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
            <blockquote className="text-xl sm:text-2xl lg:text-3xl font-semibold leading-relaxed">
              “Every year, 7 million people die from air pollution and billions suffer unnecessarily from the effects of poor air quality. We are working to change this.”
            </blockquote>
            <div className="mt-3 text-white/80">– Protecting lives through clean air</div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function App() {
  const [route, setRoute] = useState('home');
  const [query, setQuery] = useState('');
  const [authOpen, setAuthOpen] = useState(false);

  const onSearch = (q) => setQuery(q);

  const Page = useMemo(() => {
    if (route === 'news') return () => <NewsGrid />;
    if (route === 'aqi-ranking')
      return () => (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <h2 className="text-3xl font-bold text-gray-900">AQI City Ranking</h2>
          <p className="text-gray-600 mt-1">Top cities by current AQI (sample data)</p>
          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { city: 'San Francisco', aqi: 45 },
              { city: 'Bangalore', aqi: 118 },
              { city: 'Delhi', aqi: 210 },
              { city: 'Beijing', aqi: 165 },
              { city: 'Tokyo', aqi: 70 },
              { city: 'Paris', aqi: 60 },
            ].map((c) => (
              <div key={c.city} className="rounded-xl border border-black/10 p-5 bg-white">
                <div className="text-sm text-gray-500">City</div>
                <div className="text-xl font-semibold">{c.city}</div>
                <div className="mt-3 text-sm text-gray-500">AQI</div>
                <div className="text-3xl font-extrabold">{c.aqi}</div>
              </div>
            ))}
          </div>
        </div>
      );
    if (route === 'historical')
      return () => (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <h2 className="text-3xl font-bold text-gray-900">Historical Trends</h2>
          <p className="text-gray-600 mt-1">Explore seasonal patterns and long-term changes. This will connect to your Prophet and RNN models.</p>
          <div className="mt-6 rounded-2xl border border-black/10 p-6 bg-white">
            <div className="h-64 grid place-items-center text-gray-500">Interactive charts coming soon.</div>
          </div>
        </div>
      );
    return () => (
      <>
        <Hero onSearch={onSearch} />
        <AQIMapAndCard searchQuery={query} />
        <BannerQuote />
      </>
    );
  }, [route, query]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      <HeaderNav onNavigate={setRoute} onOpenSignIn={() => setAuthOpen(true)} currentRoute={route} />
      <main>
        <Page />
      </main>
      <Footer />
      <AuthModal open={authOpen} onClose={() => setAuthOpen(false)} />
    </div>
  );
}
