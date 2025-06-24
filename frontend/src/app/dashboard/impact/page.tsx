import { ChartBarIcon, UsersIcon, TruckIcon, GlobeAltIcon } from '@heroicons/react/24/outline';

export default function ImpactPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-blue-800">Your Impact</h1>
        <p className="text-blue-600">See how your contributions are making a difference</p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <div className="bg-white rounded-xl shadow-sm border border-blue-100 p-6">
          <div className="flex items-center gap-4">
            <div className="p-3 rounded-full bg-blue-100 text-blue-600">
              <ChartBarIcon className="w-6 h-6" />
            </div>
            <div>
              <p className="text-sm text-blue-500">Total Donations</p>
              <p className="text-2xl font-bold text-blue-800">24</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-blue-100 p-6">
          <div className="flex items-center gap-4">
            <div className="p-3 rounded-full bg-green-100 text-green-600">
              <UsersIcon className="w-6 h-6" />
            </div>
            <div>
              <p className="text-sm text-blue-500">People Fed</p>
              <p className="text-2xl font-bold text-blue-800">1,240</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-blue-100 p-6">
          <div className="flex items-center gap-4">
            <div className="p-3 rounded-full bg-purple-100 text-purple-600">
              <TruckIcon className="w-6 h-6" />
            </div>
            <div>
              <p className="text-sm text-blue-500">Meals Shared</p>
              <p className="text-2xl font-bold text-blue-800">3,850</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-blue-100 p-6">
          <div className="flex items-center gap-4">
            <div className="p-3 rounded-full bg-orange-100 text-orange-600">
              <GlobeAltIcon className="w-6 h-6" />
            </div>
            <div>
              <p className="text-sm text-blue-500">CO₂ Saved</p>
              <p className="text-2xl font-bold text-blue-800">1.2T</p>
            </div>
          </div>
        </div>
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        <div className="bg-white rounded-xl shadow-sm border border-blue-100 p-6">
          <h3 className="font-semibold text-blue-800 mb-4">Monthly Donations</h3>
          <div className="h-64 bg-blue-50 rounded-lg flex items-center justify-center text-blue-400">
            <p>Chart visualization placeholder</p>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-blue-100 p-6">
          <h3 className="font-semibold text-blue-800 mb-4">Food Type Distribution</h3>
          <div className="h-64 bg-blue-50 rounded-lg flex items-center justify-center text-blue-400">
            <p>Pie chart visualization placeholder</p>
          </div>
        </div>
      </div>

      {/* Recent Activity */}
      <div className="bg-white rounded-xl shadow-sm border border-blue-100 p-6">
        <h3 className="font-semibold text-blue-800 mb-4">Recent Impact</h3>
        <div className="space-y-4">
          {[...Array(3)].map((_, i) => (
            <div key={i} className="flex items-start gap-4 pb-4 border-b border-blue-50 last:border-0">
              <div className="p-2 rounded-full bg-blue-100 mt-1">
                <UsersIcon className="w-5 h-5 text-blue-600" />
              </div>
              <div>
                <p className="text-blue-800">
                  <span className="font-medium">Your donation</span> fed 45 children at Hope Foundation yesterday
                </p>
                <p className="text-sm text-blue-500 mt-1">2 days ago</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
