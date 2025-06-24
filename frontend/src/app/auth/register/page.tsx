import Link from 'next/link';
import { UserIcon, EnvelopeIcon, LockClosedIcon, UsersIcon, BuildingStorefrontIcon, HandRaisedIcon } from '@heroicons/react/24/outline';

export default function RegisterPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 via-slate-50 to-blue-200">
      <div className="bg-white p-8 rounded-2xl shadow-2xl w-full max-w-md relative">
        <div className="flex flex-col items-center mb-6">
          <img src="/logo.png" alt="Hunger Bridge Logo" className="w-16 mb-2" />
          <h2 className="text-2xl font-extrabold text-blue-700 mb-1">Create an Account</h2>
          <p className="text-gray-500 text-sm">Join Hunger Bridge and help bridge the gap!</p>
        </div>
        <form className="space-y-4">
          <div className="relative">
            <UserIcon className="w-5 h-5 text-blue-400 absolute left-3 top-3.5" />
            <input type="text" className="w-full border border-gray-300 rounded-md pl-10 pr-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-200" placeholder="Your Name" required />
          </div>
          <div className="relative">
            <EnvelopeIcon className="w-5 h-5 text-blue-400 absolute left-3 top-3.5" />
            <input type="email" className="w-full border border-gray-300 rounded-md pl-10 pr-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-200" placeholder="you@email.com" required />
          </div>
          <div className="relative">
            <LockClosedIcon className="w-5 h-5 text-blue-400 absolute left-3 top-3.5" />
            <input type="password" className="w-full border border-gray-300 rounded-md pl-10 pr-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-200" placeholder="Password" required />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Role</label>
            <div className="flex gap-2">
              <button type="button" className="flex-1 flex items-center justify-center gap-1 bg-blue-50 border border-blue-400 text-blue-700 font-semibold rounded-md py-2 hover:bg-blue-100 transition"><BuildingStorefrontIcon className="w-5 h-5" />Venue</button>
              <button type="button" className="flex-1 flex items-center justify-center gap-1 bg-blue-50 border border-green-400 text-green-700 font-semibold rounded-md py-2 hover:bg-green-100 transition"><UsersIcon className="w-5 h-5" />NGO</button>
              <button type="button" className="flex-1 flex items-center justify-center gap-1 bg-blue-50 border border-orange-400 text-orange-700 font-semibold rounded-md py-2 hover:bg-orange-100 transition"><HandRaisedIcon className="w-5 h-5" />Volunteer</button>
            </div>
          </div>
          <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded-md font-bold hover:bg-blue-700 transition shadow">Register</button>
        </form>
        <div className="flex justify-between items-center mt-6 text-sm">
          <Link href="/" className="text-blue-500 hover:underline">&larr; Back to Home</Link>
          <span className="text-gray-400">|</span>
          <span>Already have an account? <Link href="/auth/login" className="text-blue-600 underline font-medium">Login</Link></span>
        </div>
      </div>
    </div>
  );
}
