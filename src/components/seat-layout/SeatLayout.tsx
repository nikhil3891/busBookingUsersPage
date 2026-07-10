'use client';

export const SeatLayout = ({ busId }: { busId: string }) => {
  return (
    <div className="bg-white p-6 rounded-lg">
      <h2 className="text-xl font-bold mb-4">Select Your Seats</h2>
      <div className="grid grid-cols-5 gap-2">
        {/* Seat layout will be implemented here */}
        <p className="col-span-5 text-center text-gray-600">Loading seats...</p>
      </div>
    </div>
  );
};
