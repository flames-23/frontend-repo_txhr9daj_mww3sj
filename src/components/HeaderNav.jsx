import { useState } from 'react';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export default function HeaderNav({ onNavigate, onOpenSignIn, currentRoute }) {
  const [open, setOpen] = useState(false);

  return (
    <header className="w-full sticky top-0 z-50 bg-white/70 backdrop-blur supports-[backdrop-filter]:bg-white/60 border-b border-black/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-3">
            <div className="h-8 w-8 rounded-md bg-emerald-500/90 shadow-inner" />
            <button
              onClick={() => onNavigate('home')}
              className="text-xl sm:text-2xl font-bold tracking-tight text-gray-900"
            >
              Air Quality Predictor
            </button>
          </div>

          <nav className="flex items-center gap-2">
            <div className="relative">
              <button
                onClick={() => setOpen((v) => !v)}
                className={classNames(
                  'px-3 py-2 rounded-md text-sm font-medium transition',
                  open || currentRoute.startsWith('aqi-') ? 'bg-gray-900 text-white' : 'text-gray-700 hover:bg-gray-100'
                )}
              >
                Air Quality
              </button>
              {open && (
                <div className="absolute right-0 mt-2 w-72 rounded-xl shadow-2xl bg-white ring-1 ring-black/5 overflow-hidden">
                  <div className="grid grid-cols-1 divide-y divide-gray-100">
                    <button
                      onClick={() => { setOpen(false); onNavigate('aqi-ranking'); }}
                      className="flex items-center gap-3 p-4 hover:bg-gray-50 transition text-left"
                    >
                      <div className="h-12 w-12 rounded-lg bg-gradient-to-br from-emerald-400 to-cyan-500" />
                      <div>
                        <div className="font-semibold text-gray-900">AQI City Ranking</div>
                        <div className="text-xs text-gray-500">See which cities are healthiest right now</div>
                      </div>
                    </button>
                    <button
                      onClick={() => { setOpen(false); onNavigate('historical'); }}
                      className="flex items-center gap-3 p-4 hover:bg-gray-50 transition text-left"
                    >
                      <div className="h-12 w-12 rounded-lg bg-gradient-to-br from-indigo-500 to-fuchsia-500" />
                      <div>
                        <div className="font-semibold text-gray-900">Historical Trends</div>
                        <div className="text-xs text-gray-500">Explore past patterns and seasonality</div>
                      </div>
                    </button>
                  </div>
                </div>
              )}
            </div>

            <button
              onClick={() => onNavigate('news')}
              className={classNames(
                'px-3 py-2 rounded-md text-sm font-medium transition',
                currentRoute === 'news' ? 'bg-gray-900 text-white' : 'text-gray-700 hover:bg-gray-100'
              )}
            >
              News
            </button>

            <button
              onClick={onOpenSignIn}
              className="px-3 py-2 rounded-md text-sm font-medium bg-emerald-600 text-white hover:bg-emerald-700 transition"
            >
              Sign in
            </button>
          </nav>
        </div>
      </div>
    </header>
  );
}
