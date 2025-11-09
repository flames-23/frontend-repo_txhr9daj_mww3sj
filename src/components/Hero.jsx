import Spline from '@splinetool/react-spline';
import { useEffect, useRef, useState } from 'react';

export default function Hero({ onSearch }) {
  const [query, setQuery] = useState('');
  const containerRef = useRef(null);

  useEffect(() => {
    // Ensure the canvas always fills its container
    const el = containerRef.current;
    if (!el) return;
    const onResize = () => {
      el.style.height = `${Math.max(420, window.innerHeight * 0.65)}px`;
    };
    onResize();
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!query.trim()) return;
    onSearch(query.trim());
  };

  return (
    <section className="relative">
      <div ref={containerRef} className="relative w-full">
        <Spline
          scene="https://prod.spline.design/6tUXqVcUA0xgJugv/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent pointer-events-none" />
        <div className="absolute inset-0 flex items-center">
          <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div className="text-white">
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight drop-shadow">
                  Explore Your Air Quality
                </h1>
                <p className="mt-4 text-white/80 max-w-xl">
                  Search any city or country to see live AQI, pollutant breakdowns, and trends.
                </p>
              </div>
              <div className="">
                <form onSubmit={handleSubmit} className="bg-white/90 backdrop-blur rounded-2xl p-2 shadow-xl max-w-xl ml-auto">
                  <div className="flex items-center gap-2">
                    <input
                      type="text"
                      value={query}
                      onChange={(e) => setQuery(e.target.value)}
                      placeholder="Search city or country (e.g., Bangalore)"
                      className="flex-1 px-4 py-3 rounded-xl outline-none bg-white text-gray-800 placeholder:text-gray-400"
                      aria-label="Search city or country"
                    />
                    <button type="submit" className="px-5 py-3 rounded-xl bg-emerald-600 text-white font-semibold hover:bg-emerald-700 transition">
                      Search
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
