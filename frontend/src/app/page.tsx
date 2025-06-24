import Link from 'next/link';
import {
  UserGroupIcon,
  BellAlertIcon,
  TruckIcon,
  ChartBarIcon,
  SparklesIcon,
  ArrowRightIcon,
  CheckCircleIcon,
  HeartIcon
} from '@heroicons/react/24/outline';

export default function Home() {
  const stats = [
    { value: "10,000+", label: "Meals Shared" },
    { value: "500+", label: "Active Donors" },
    { value: "200+", label: "Partner NGOs" },
    { value: "1,000+", label: "Volunteers" }
  ];

  const features = [
    {
      icon: <UserGroupIcon className="w-8 h-8 text-blue-500" />,
      title: "Share Surplus Food",
      description: "Restaurants, caterers and individuals can easily list available surplus food items with just a few taps."
    },
    {
      icon: <BellAlertIcon className="w-8 h-8 text-orange-400" />,
      title: "Instant Notifications",
      description: "NGOs and volunteers nearby get real-time alerts about available food donations."
    },
    {
      icon: <TruckIcon className="w-8 h-8 text-green-500" />,
      title: "Seamless Coordination",
      description: "Our system helps schedule safe and timely pickups with tracking and verification."
    },
    {
      icon: <ChartBarIcon className="w-8 h-8 text-purple-500" />,
      title: "Impact Tracking",
      description: "See exactly how your contributions are making a difference with detailed analytics."
    }
  ];

  const testimonials = [
    {
      quote: "Hunger Bridge helped us redirect 200+ meals weekly from our wedding hall to nearby shelters.",
      author: "Rajesh Kumar, Chennai Wedding Hall"
    },
    {
      quote: "As a small NGO, this platform has been a game-changer for our daily meal programs.",
      author: "Priya Nair, Hope Foundation"
    }
  ];

  return (
    <main className="relative min-h-screen bg-gradient-to-br from-blue-50 via-slate-50 to-blue-100 overflow-x-hidden">
      {/* Fixed Contribute Button */}
      <a
        href="https://github.com/Mahaveer1013/Hunger_bridge"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed top-4 right-4 z-50"
        aria-label="Contribute on GitHub"
      >
        <button className="flex items-center gap-2 bg-gray-100 hover:bg-gray-200 text-gray-800 border-2 border-gray-300 rounded-full px-4 py-2 text-base font-semibold shadow-lg hover:shadow-xl transition-all">
          {/* GitHub Icon */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-6 h-6"
          >
            <path d="M12 2C6.477 2 2 6.484 2 12.021c0 4.428 2.865 8.184 6.839 9.504.5.092.682-.217.682-.483 0-.237-.009-.868-.014-1.703-2.782.605-3.369-1.342-3.369-1.342-.454-1.157-1.11-1.465-1.11-1.465-.908-.62.069-.608.069-.608 1.004.07 1.532 1.032 1.532 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.339-2.221-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.295 2.748-1.025 2.748-1.025.546 1.378.202 2.397.1 2.65.64.7 1.028 1.595 1.028 2.688 0 3.847-2.337 4.695-4.566 4.944.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.749 0 .268.18.579.688.481C19.138 20.2 22 16.447 22 12.021 22 6.484 17.523 2 12 2z" />
          </svg>
          <span className="hidden sm:inline">Contribute</span>
        </button>
      </a>

      {/* Hero Section */}
      <section className="relative z-10 max-w-6xl mx-auto px-6 py-20 md:py-28">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2 space-y-6">
            <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-600 px-4 py-2 rounded-full">
              <SparklesIcon className="w-5 h-5" />
              <span className="font-medium">Join the movement</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-blue-900 leading-tight">
              Bridging <span className="text-blue-600">Hunger</span> with Humanity
            </h1>
            <p className="text-lg text-blue-800">
              Connecting surplus food with those who need it most. Together, we can reduce waste and fight hunger in our communities.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <Link href="/auth/register">
                <button className="flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg px-6 py-3 text-lg font-semibold shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-0.5">
                  Get Started
                  <ArrowRightIcon className="w-5 h-5" />
                </button>
              </Link>
              <Link href="/dashboard">
                <button className="flex items-center justify-center gap-2 bg-white hover:bg-blue-50 text-blue-600 border-2 border-blue-600 rounded-lg px-6 py-3 text-lg font-semibold shadow-lg hover:shadow-xl transition-all">
                  Go to Dashboard
                </button>
              </Link>
            </div>
            <p className="text-blue-600 text-sm">
              Already have an account?{' '}
              <Link href="/auth/login" className="font-semibold underline hover:text-blue-800">
                Login here
              </Link>
            </p>
          </div>
          <div className="lg:w-1/2">
            <div className="bg-white/90 rounded-3xl shadow-xl overflow-hidden border border-blue-100">
              <img
                src="/images/hero-image.png"
                alt="People sharing food"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-blue-600 py-12">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <div key={index} className="text-center text-white">
                <p className="text-3xl font-bold mb-2">{stat.value}</p>
                <p className="text-blue-100">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-blue-900 mb-4">
              <SparklesIcon className="w-8 h-8 inline mr-2 text-blue-400" />
              How It Works
            </h2>
            <p className="text-blue-700 max-w-2xl mx-auto">
              Our simple process makes food sharing efficient and impactful
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-blue-50 rounded-xl p-6 shadow-sm hover:shadow-md transition-all border border-blue-100 hover:border-blue-200"
              >
                <div className="bg-white rounded-full w-14 h-14 flex items-center justify-center mb-4 shadow-sm">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-blue-800 mb-3">{feature.title}</h3>
                <p className="text-blue-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-blue-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-blue-900 mb-4">
              <HeartIcon className="w-8 h-8 inline mr-2 text-red-400" />
              Stories of Impact
            </h2>
            <p className="text-blue-700 max-w-2xl mx-auto">
              Hear from our community of donors, NGOs and volunteers
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-8 shadow-sm hover:shadow-md transition-all border border-blue-100"
              >
                <div className="flex items-start mb-4">
                  <CheckCircleIcon className="w-6 h-6 text-green-500 mr-3 mt-1 flex-shrink-0" />
                  <p className="text-blue-800 italic text-lg">"{testimonial.quote}"</p>
                </div>
                <p className="text-blue-600 font-medium text-right">— {testimonial.author}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-blue-700">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Ready to make a difference?</h2>
          <p className="text-blue-100 mb-8 text-lg">
            Join Hunger Bridge today and be part of the solution to food waste and hunger in our community.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/auth/register">
              <button className="bg-white hover:bg-blue-50 text-blue-600 rounded-lg px-8 py-3 text-lg font-semibold shadow-lg hover:shadow-xl transition-all">
                Sign Up Now
              </button>
            </Link>
            <Link href="/about">
              <button className="bg-transparent hover:bg-blue-800 text-white border-2 border-white rounded-lg px-8 py-3 text-lg font-semibold hover:shadow-lg transition-all">
                Learn More
              </button>
            </Link>
            <a href="https://github.com/Mahaveer1013/Hunger_bridge" target="_blank" rel="noopener noreferrer">
              <button className="bg-gray-100 hover:bg-gray-200 text-gray-800 border-2 border-gray-300 rounded-lg px-8 py-3 text-lg font-semibold shadow-lg hover:shadow-xl transition-all flex items-center gap-2">
                Contribute
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75A2.25 2.25 0 0014.25 4.5h-7.5A2.25 2.25 0 004.5 6.75v10.5A2.25 2.25 0 006.75 19.5h10.5a2.25 2.25 0 002.25-2.25v-7.5A2.25 2.25 0 0017.25 7.5H13.5" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 15.75h7.5M8.25 12.75h7.5M8.25 9.75h4.5" />
                </svg>
              </button>
            </a>
          </div>
        </div>
      </section>

      <footer className="bg-blue-900 text-blue-100 py-8">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <p className="text-xl font-bold">Hunger Bridge</p>
              <p className="text-sm">Bridging Hunger with Humanity</p>
              <p className="text-xs mt-2">Built with <span className="text-red-400">♥</span> by <a href="https://mahaveer.dev" target="_blank" rel="noopener noreferrer" className="underline hover:text-blue-200">Mahveer A</a></p>
            </div>
            <div className="flex flex-col md:items-end gap-2">
              <div className="text-sm">&copy; {new Date().getFullYear()} Hunger Bridge. All rights reserved.</div>
              <a href="https://github.com/Mahaveer1013/Hunger_bridge" target="_blank" rel="noopener noreferrer" className="text-xs underline hover:text-blue-200">View on GitHub</a>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
