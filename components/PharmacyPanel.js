export default function PharmacyPanel() {
  return (
    <div className="bg-white rounded-2xl shadow p-5 space-y-4">
      <div className="flex justify-between items-center">
        <h3 className="font-semibold text-gray-800">Nearby Pharmacies</h3>
        <span className="text-sm text-blue-500 cursor-pointer">View all</span>
      </div>

      <div className="space-y-4 text-sm">
        <div>
          <p className="font-medium">HealthPlus Pharmacy</p>
          <p className="text-gray-500">0.5 km away</p>
          <p className="text-green-600 text-xs">Open 24 hours</p>
        </div>

        <div>
          <p className="font-medium">LifeCare Pharmacy</p>
          <p className="text-gray-500">0.8 km away</p>
          <p className="text-red-500 text-xs">Closes at 10 PM</p>
        </div>

        <div>
          <p className="font-medium">CarePoint Pharmacy</p>
          <p className="text-gray-500">1.2 km away</p>
          <p className="text-green-600 text-xs">Open 24 hours</p>
        </div>
      </div>
    </div>
  );
}
