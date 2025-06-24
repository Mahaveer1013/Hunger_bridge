import { MapPinIcon, ClockIcon, CalendarIcon, PhotoIcon } from '@heroicons/react/24/outline';

export default function NewDonationPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <div className="bg-white rounded-xl shadow-md overflow-hidden border border-blue-100">
        {/* Header */}
        <div className="bg-blue-600 px-6 py-4">
          <h1 className="text-2xl font-bold text-white">New Food Donation</h1>
          <p className="text-blue-100">Help bridge hunger by sharing surplus food</p>
        </div>

        {/* Form */}
        <div className="p-6 space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Food Details */}
            <div className="space-y-4">
              <h2 className="text-lg font-semibold text-blue-800 border-b border-blue-100 pb-2">
                Food Information
              </h2>

              <div>
                <label className="block text-sm font-medium text-blue-700 mb-1">Food Type*</label>
                <input
                  type="text"
                  placeholder="e.g., Vegetable Biryani, Sandwiches"
                  className="w-full px-4 py-2 border border-blue-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-blue-700 mb-1">Quantity*</label>
                <div className="relative">
                  <input
                    type="number"
                    placeholder="Number of servings"
                    className="w-full px-4 py-2 border border-blue-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    min="1"
                    required
                  />
                  <span className="absolute right-3 top-2.5 text-blue-500">servings</span>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-blue-700 mb-1">Description</label>
                <textarea
                  placeholder="Ingredients, special notes..."
                  rows={3}
                  className="w-full px-4 py-2 border border-blue-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
            </div>

            {/* Pickup Details */}
            <div className="space-y-4">
              <h2 className="text-lg font-semibold text-blue-800 border-b border-blue-100 pb-2">
                Pickup Details
              </h2>

              <div>
                <label className="block text-sm font-medium text-blue-700 mb-1">Location*</label>
                <div className="relative">
                  <MapPinIcon className="absolute left-3 top-3 h-5 w-5 text-blue-400" />
                  <input
                    type="text"
                    placeholder="Enter address"
                    className="w-full pl-10 px-4 py-2 border border-blue-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    required
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-blue-700 mb-1">Ready Time*</label>
                  <div className="relative">
                    <ClockIcon className="absolute left-3 top-3 h-5 w-5 text-blue-400" />
                    <input
                      type="time"
                      className="w-full pl-10 px-4 py-2 border border-blue-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      required
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-blue-700 mb-1">Best Before*</label>
                  <div className="relative">
                    <CalendarIcon className="absolute left-3 top-3 h-5 w-5 text-blue-400" />
                    <input
                      type="date"
                      className="w-full pl-10 px-4 py-2 border border-blue-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      required
                    />
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-blue-700 mb-1">Food Photo</label>
                <div className="flex items-center justify-center w-full">
                  <label className="flex flex-col items-center justify-center w-full h-32 border-2 border-blue-300 border-dashed rounded-lg cursor-pointer bg-blue-50 hover:bg-blue-100">
                    <PhotoIcon className="w-10 h-10 text-blue-400" />
                    <p className="text-sm text-blue-500">Click to upload</p>
                    <input type="file" className="hidden" accept="image/*" />
                  </label>
                </div>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex justify-end space-x-4 pt-4">
            <button className="px-6 py-2 border border-blue-300 text-blue-600 rounded-lg hover:bg-blue-50 transition">
              Cancel
            </button>
            <button className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition font-medium shadow-md">
              Submit Donation
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
