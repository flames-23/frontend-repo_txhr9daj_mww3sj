import { useEffect } from 'react';

export default function AuthModal({ open, onClose }) {
  useEffect(() => {
    const handler = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [onClose]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center">
      <div className="absolute inset-0 bg-black/50" onClick={onClose} />
      <div className="relative w-full max-w-md mx-auto bg-white rounded-3xl shadow-2xl overflow-hidden">
        <div className="p-8">
          <div className="text-center">
            <div className="mx-auto h-12 w-12 rounded-xl bg-emerald-600" />
            <h3 className="mt-4 text-2xl font-bold text-gray-900">Welcome back</h3>
            <p className="text-sm text-gray-500">Sign in to Air Quality Predictor</p>
          </div>

          <div className="mt-8 space-y-3">
            <button className="w-full py-3 rounded-xl border border-black/10 bg-white hover:bg-gray-50 transition flex items-center justify-center gap-3">
              <img src="https://www.svgrepo.com/show/475656/google-color.svg" alt="Google" className="h-5 w-5" />
              <span className="font-medium text-gray-800">Continue with Google</span>
            </button>
            <div className="relative text-center">
              <span className="px-2 text-xs text-gray-500 bg-white relative z-10">or</span>
              <div className="absolute left-0 right-0 top-1/2 -translate-y-1/2 border-t border-gray-200" />
            </div>
            <form className="space-y-3">
              <input type="email" placeholder="Email address" className="w-full px-4 py-3 rounded-xl border border-black/10 focus:outline-none focus:ring-2 focus:ring-emerald-500" />
              <input type="password" placeholder="Password" className="w-full px-4 py-3 rounded-xl border border-black/10 focus:outline-none focus:ring-2 focus:ring-emerald-500" />
              <button type="submit" className="w-full py-3 rounded-xl bg-emerald-600 text-white font-semibold hover:bg-emerald-700 transition">Continue</button>
            </form>
          </div>

          <p className="mt-6 text-xs text-gray-500 text-center">By continuing you agree to our Terms and Privacy Policy.</p>
        </div>
      </div>
    </div>
  );
}
