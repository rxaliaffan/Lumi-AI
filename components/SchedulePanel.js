export default function SchedulePanel() {
  return (
    <div className="card space-y-4">
      <div className="flex justify-between items-center">
        <h3 className="font-semibold text-gray-800">Today's Schedule</h3>
        <span className="text-sm text-blue-500 cursor-pointer">View all</span>
      </div>

      <div className="space-y-4 text-sm">
        <div className="flex justify-between items-center">
          <div>
            <p className="font-medium">8:00 AM</p>
            <p className="text-gray-500">Metformin 500mg</p>
          </div>
          <span className="text-green-600 bg-green-100 px-2 py-1 rounded-full text-xs">
            Taken
          </span>
        </div>

        <div className="flex justify-between items-center">
          <div>
            <p className="font-medium">1:00 PM</p>
            <p className="text-gray-500">Amoxicillin 500mg</p>
          </div>
          <span className="text-yellow-600 bg-yellow-100 px-2 py-1 rounded-full text-xs">
            Due
          </span>
        </div>

        <div className="flex justify-between items-center">
          <div>
            <p className="font-medium">8:00 PM</p>
            <p className="text-gray-500">Aspirin 75mg</p>
          </div>
          <span className="text-yellow-600 bg-yellow-100 px-2 py-1 rounded-full text-xs">
            Due
          </span>
        </div>
      </div>
    </div>
  );
}
