import Link from 'next/link';
import { ROUTES } from '@/constants/routes';

export default function CancellationPolicyPage() {
  return (
    <div className="container mx-auto max-w-4xl px-4 py-12">
      <div className="mb-8">
        <Link href={ROUTES.HOME} className="text-sm font-medium text-blue-600 hover:underline">
          ← Back to Home
        </Link>
      </div>

      <div className="rounded-2xl bg-white p-8 shadow-sm ring-1 ring-gray-200">
        <h1 className="text-3xl font-bold text-gray-900 mb-6">Cancellation Policy</h1>

        <div className="space-y-6 text-gray-700">
          <p>
            At RoadPass, we understand that travel plans can change. This policy explains when
            cancellations are allowed and how refunds are processed.
          </p>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-2">1. Cancellation Window</h2>
            <p>
              Tickets can be cancelled before the departure time shown on the booking confirmation.
              Cancellations requested after departure are generally not eligible for a refund.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-2">2. Refund Rules</h2>
            <p>
              Refund eligibility depends on the bus operator, fare type, and timing of the
              cancellation. In most cases, a partial refund may be issued if the cancellation is made
              sufficiently in advance.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-2">3. Non-Refundable Bookings</h2>
            <p>
              Certain discounted or promotional ticket bookings may be marked as non-refundable. Such
              terms are clearly shown at the time of booking.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-2">4. How to Cancel</h2>
            <p>
              You can cancel a booking from your account under My Bookings. Once processed, the refund
              is sent back to the original payment method as per the payment provider timelines.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-2">5. Support</h2>
            <p>
              For assistance with cancellations, please contact RoadPass support through the Help
              Centre or the support team listed in your booking confirmation.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
