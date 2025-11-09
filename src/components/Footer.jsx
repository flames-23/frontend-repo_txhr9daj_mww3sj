export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-8 text-sm">
          <div>
            <div className="text-white font-semibold mb-3">Air Quality Predictor</div>
            <p className="text-gray-400">Protecting lives through clean air.</p>
          </div>
          <div>
            <div className="text-white font-semibold mb-3">Discover</div>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-white">City Ranking</a></li>
              <li><a href="#" className="hover:text-white">Historical Trends</a></li>
              <li><a href="#" className="hover:text-white">Forecast</a></li>
            </ul>
          </div>
          <div>
            <div className="text-white font-semibold mb-3">Company</div>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-white">About</a></li>
              <li><a href="#" className="hover:text-white">Careers</a></li>
              <li><a href="#" className="hover:text-white">Contact</a></li>
            </ul>
          </div>
          <div>
            <div className="text-white font-semibold mb-3">Resources</div>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-white">Docs</a></li>
              <li><a href="#" className="hover:text-white">Blog</a></li>
              <li><a href="#" className="hover:text-white">API</a></li>
            </ul>
          </div>
          <div>
            <div className="text-white font-semibold mb-3">Legal</div>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-white">Terms</a></li>
              <li><a href="#" className="hover:text-white">Privacy</a></li>
              <li><a href="#" className="hover:text-white">Cookies</a></li>
            </ul>
          </div>
          <div>
            <div className="text-white font-semibold mb-3">Follow</div>
            <div className="flex items-center gap-3">
              <a href="#" aria-label="Twitter" className="hover:text-white">Twitter</a>
              <a href="#" aria-label="LinkedIn" className="hover:text-white">LinkedIn</a>
              <a href="#" aria-label="Instagram" className="hover:text-white">Instagram</a>
            </div>
          </div>
        </div>
        <div className="mt-8 border-t border-white/10 pt-6 text-xs text-gray-500">
          © {new Date().getFullYear()} Air Quality Predictor. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
