import { useEffect, useMemo, useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

// Simple AQI category helper
function aqiCategory(aqi) {
  if (aqi <= 50) return { label: 'Good', color: 'bg-emerald-500' };
  if (aqi <= 100) return { label: 'Moderate', color: 'bg-yellow-400' };
  if (aqi <= 150) return { label: 'Unhealthy (Sensitive)', color: 'bg-orange-500' };
  if (aqi <= 200) return { label: 'Unhealthy', color: 'bg-red-500' };
  if (aqi <= 300) return { label: 'Very Unhealthy', color: 'bg-purple-600' };
  return { label: 'Hazardous', color: 'bg-rose-700' };
}

// Fallback demo data until backend is wired
const demoData = [
  { city: 'Bangalore', country: 'India', lat: 12.9716, lon: 77.5946, aqi: 118, pm25: 42, pm10: 76, no2: 21, so2: 8, co: 0.7, o3: 12 },
  { city: 'Delhi', country: 'India', lat: 28.7041, lon: 77.1025, aqi: 210, pm25: 96, pm10: 144, no2: 34, so2: 11, co: 1.2, o3: 9 },
  { city: 'San Francisco', country: 'USA', lat: 37.7749, lon: -122.4194, aqi: 45, pm25: 10, pm10: 18, no2: 9, so2: 3, co: 0.3, o3: 20 },
  { city: 'Beijing', country: 'China', lat: 39.9042, lon: 116.4074, aqi: 165, pm25: 72, pm10: 110, no2: 29, so2: 15, co: 1.1, o3: 5 },
];

export default function AQIMapAndCard({ searchQuery }) {
  const [results, setResults] = useState(demoData);
  const [selected, setSelected] = useState(null);

  useEffect(() => {
    if (!searchQuery) return;
    const q = searchQuery.toLowerCase();
    const found = demoData.find(
      (d) => d.city.toLowerCase() === q || d.country.toLowerCase() === q
    );
    setSelected(found || null);
  }, [searchQuery]);

  const center = useMemo(() => {
    if (selected) return [selected.lat, selected.lon];
    return [20, 0]; // world view
  }, [selected]);

  return (
    <section className="bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          <div className="lg:col-span-1">
            <div className="rounded-2xl border border-black/10 shadow-sm p-6">
              {selected ? (
                <CityAQICard data={selected} />
              ) : (
                <div className="text-gray-600">
                  <div className="text-lg font-semibold">Search a location</div>
                  <p className="text-sm mt-1">Try cities like Bangalore, Delhi, or San Francisco.</p>
                </div>
              )}
            </div>
          </div>

          <div className="lg:col-span-2 space-y-4">
            <div className="h-[420px] w-full rounded-2xl overflow-hidden border border-black/10">
              <MapContainer center={center} zoom={selected ? 7 : 2} scrollWheelZoom className="h-full w-full">
                <TileLayer
                  attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                {results.map((d) => (
                  <Marker position={[d.lat, d.lon]} key={`${d.city}-${d.country}`} eventHandlers={{ click: () => setSelected(d) }}>
                    <Popup>
                      <div className="text-sm">
                        <div className="font-semibold">{d.city}, {d.country}</div>
                        <div>AQI: <span className="font-medium">{d.aqi}</span></div>
                      </div>
                    </Popup>
                  </Marker>
                ))}
              </MapContainer>
            </div>

            <div className="rounded-xl bg-gray-800 text-white p-4 text-sm">
              Air pollution has cost an estimated 7 million deaths each year.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function CityAQICard({ data }) {
  const cat = aqiCategory(data.aqi);
  const items = [
    { key: 'PM2.5', value: data.pm25 },
    { key: 'PM10', value: data.pm10 },
    { key: 'NO₂', value: data.no2 },
    { key: 'SO₂', value: data.so2 },
    { key: 'CO', value: data.co },
    { key: 'O₃', value: data.o3 },
  ];

  return (
    <div>
      <div className="flex items-center justify-between">
        <div>
          <div className="text-xl font-bold">{data.city}</div>
          <div className="text-sm text-gray-500">Air Quality Index</div>
        </div>
        <div className={`px-3 py-1 rounded-full text-white text-xs font-semibold ${cat.color}`}>
          {cat.label}
        </div>
      </div>

      <div className="mt-4">
        <div className="text-5xl font-extrabold tracking-tight text-gray-900">{data.aqi}</div>
        <div className="text-xs text-gray-500 mt-1">Based on latest measurements</div>
      </div>

      <div className="mt-6 grid grid-cols-2 gap-3">
        {items.map((i) => (
          <div key={i.key} className="rounded-lg border border-black/10 p-3">
            <div className="text-xs text-gray-500">{i.key}</div>
            <div className="text-lg font-semibold text-gray-900">{i.value}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
