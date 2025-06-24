import { ClockIcon, MapPinIcon, UserIcon, ArrowRightIcon } from '@heroicons/react/24/outline';

const requests = [
  {
    id: 1,
    ngo: "Hope Foundation",
    meals: 60,
    time: "Today, 3 PM",
    location: "Nungambakkam",
    status: "pending"
  },
  {
    id: 2,
    ngo: "Children First",
    meals: 40,
    time: "Tomorrow, 11 AM",
    location: "Anna Nagar",
    status: "accepted"
  }
];

export default function RequestsPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-2xl font-bold text-blue-800">Food Requests</h1>
          <p className="text-blue-600">Manage incoming requests from NGOs</p>
        </div>
        <div className="flex space-x-2">
          <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition font-medium">
            New Request
          </button>
        </div>
      </div>

      <div className="space-y-4">
        {requests.map((request) => (
          <div key={request.id} className="bg-white rounded-xl shadow-sm border border-blue-100 p-6 hover:shadow-md transition">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <UserIcon className="w-5 h-5 text-blue-500" />
                  <h3 className="font-semibold text-blue-800">{request.ngo}</h3>
                  <span className={`px-2 py-1 rounded-full text-xs ${
                    request.status === 'accepted' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'
                  }`}>
                    {request.status === 'accepted' ? 'Accepted' : 'Pending'}
                  </span>
                </div>

                <div className="flex flex-wrap gap-x-4 gap-y-2 text-sm">
                  <div className="flex items-center text-blue-600">
                    <ClockIcon className="w-4 h-4 mr-1" />
                    <span>{request.time}</span>
                  </div>
                  <div className="flex items-center text-blue-600">
                    <MapPinIcon className="w-4 h-4 mr-1" />
                    <span>{request.location}</span>
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="text-center">
                  <p className="text-2xl font-bold text-blue-700">{request.meals}</p>
                  <p className="text-xs text-blue-500">meals needed</p>
                </div>
                <button className="flex items-center gap-1 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition text-sm">
                  View Details
                  <ArrowRightIcon className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
