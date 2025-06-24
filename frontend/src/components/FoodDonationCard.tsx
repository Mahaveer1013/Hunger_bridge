import { FoodDonation } from '@/lib/types';
import { ClockIcon, CalendarIcon, UserIcon } from '@heroicons/react/24/outline';

export default function FoodDonationCard({ donation }: { donation: FoodDonation }) {
  return (
    <div className="border rounded-lg p-4 hover:shadow-md transition-shadow">
      <div className="flex justify-between items-start">
        <h3 className="text-lg font-medium">{donation.foodType}</h3>
        <span className={`px-2 py-1 rounded-full text-xs ${
          donation.status === 'available' ? 'bg-green-100 text-green-800' :
          donation.status === 'claimed' ? 'bg-blue-100 text-blue-800' :
          'bg-gray-100 text-gray-800'
        }`}>
          {donation.status.toUpperCase()}
        </span>
      </div>

      <p className="text-gray-600 mt-1">{donation.description}</p>

      <div className="mt-3 space-y-2">
        <div className="flex items-center text-sm">
          <CalendarIcon className="h-4 w-4 mr-2" />
          <span>Pickup by: {new Date(donation.pickupWindowEnd).toLocaleString()}</span>
        </div>
        <div className="flex items-center text-sm">
          <ClockIcon className="h-4 w-4 mr-2" />
          <span>{donation.quantity} servings available</span>
        </div>
      </div>
    </div>
  );
}
