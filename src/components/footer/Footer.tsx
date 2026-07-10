'use client';

export const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white p-8 mt-12">
      <div className="container mx-auto">
        <div className="grid grid-cols-3 gap-8">
          <div>
            <h3 className="font-bold mb-4">About</h3>
            <p>Bus Booking platform for affordable travel</p>
          </div>
          <div>
            <h3 className="font-bold mb-4">Contact</h3>
            <p>Email: info@busbooking.com</p>
          </div>
          <div>
            <h3 className="font-bold mb-4">Follow</h3>
            <p>Social media links here</p>
          </div>
        </div>
        <div className="border-t mt-8 pt-4 text-center">
          <p>&copy; 2024 BusBooking. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};
