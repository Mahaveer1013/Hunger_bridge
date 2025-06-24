import Link from 'next/link';
import { EnvelopeIcon, LockClosedIcon } from '@heroicons/react/24/outline';

export default function LoginPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 via-slate-50 to-blue-200">
      <div className="bg-white p-8 rounded-2xl shadow-2xl w-full max-w-md relative">
        <div className="flex flex-col items-center mb-6">
          <img src="/logo.png" alt="Hunger Bridge Logo" className="w-16 mb-2" />
          <h2 className="text-2xl font-extrabold text-blue-700 mb-1">Login to Your Account</h2>
          <p className="text-gray-500 text-sm">Welcome back to Hunger Bridge!</p>
        </div>
        <form className="space-y-4">
          <div className="relative">
            <EnvelopeIcon className="w-5 h-5 text-blue-400 absolute left-3 top-3.5" />
            <input type="email" className="w-full border border-gray-300 rounded-md pl-10 pr-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-200" placeholder="you@email.com" required />
          </div>
          <div className="relative">
            <LockClosedIcon className="w-5 h-5 text-blue-400 absolute left-3 top-3.5" />
            <input type="password" className="w-full border border-gray-300 rounded-md pl-10 pr-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-200" placeholder="Password" required />
          </div>
          <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded-md font-bold hover:bg-blue-700 transition shadow">Login</button>
        </form>
        <div className="flex justify-between items-center mt-6 text-sm">
          <Link href="/" className="text-blue-500 hover:underline">&larr; Back to Home</Link>
          <span className="text-gray-400">|</span>
          <span>Don&apos;t have an account? <Link href="/auth/register" className="text-blue-600 underline font-medium">Register</Link></span>
        </div>
        <div className="text-center mt-4">
          <Link href="#" className="text-blue-400 hover:underline text-xs">Forgot password?</Link>
        </div>
      </div>
    </div>
  );
}
