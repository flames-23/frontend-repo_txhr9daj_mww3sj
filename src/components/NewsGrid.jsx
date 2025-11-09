import { useEffect, useState } from 'react';

const demoNews = [
  {
    title: 'Global efforts intensify to combat urban air pollution',
    image: 'https://images.unsplash.com/photo-1588623731810-171b80f3c55e?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxHbG9iYWwlMjBlZmZvcnRzJTIwaW50ZW5zaWZ5JTIwdG98ZW58MHwwfHx8MTc2MjY4NjA5Nnww&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80',
    excerpt: 'Cities worldwide are adopting stricter emissions standards and incentivizing cleaner transport to reduce particulate matter.',
    link: '#'
  },
  {
    title: 'Breakthrough sensors offer real-time AQI at street level',
    image: 'https://images.unsplash.com/photo-1495446815901-a7297e633e8d?q=80&w=1200&auto=format&fit=crop',
    excerpt: 'New low-cost sensors enable fine-grained monitoring, helping communities respond faster to pollution spikes.',
    link: '#'
  },
  {
    title: 'Air quality and health: what the latest research shows',
    image: 'https://images.unsplash.com/photo-1631778446713-df8957e0fa85?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxBaXIlMjBxdWFsaXR5JTIwYW5kJTIwaGVhbHRoJTNBfGVufDB8MHx8fDE3NjI2ODYwOTZ8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80',
    excerpt: 'Long-term exposure to PM2.5 continues to be linked with cardiovascular and respiratory issues, even at moderate levels.',
    link: '#'
  }
];

export default function NewsGrid() {
  const [items, setItems] = useState(demoNews);

  useEffect(() => {
    // Placeholder for future backend fetch
  }, []);

  return (
    <section className="bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">Latest Air Quality News</h2>
        <p className="text-gray-600 mt-1">Curated highlights from trusted sources.</p>
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((n) => (
            <article key={n.title} className="group rounded-2xl overflow-hidden bg-white border border-black/5 shadow-sm hover:shadow-xl transition">
              <div className="aspect-[16/10] overflow-hidden">
                <img src={n.image} alt="" className="w-full h-full object-cover group-hover:scale-105 transition duration-300" />
              </div>
              <div className="p-5">
                <h3 className="font-semibold text-gray-900 group-hover:text-emerald-700 transition">{n.title}</h3>
                <p className="mt-2 text-sm text-gray-600">{n.excerpt}</p>
                <a href={n.link} className="inline-block mt-3 text-emerald-700 font-medium hover:underline">Read more</a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
