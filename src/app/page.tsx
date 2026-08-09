import { SearchForm } from '@/components/search-form/SearchForm';

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h1 className="text-5xl font-bold mb-4">Welcome to RoadPass</h1>
        <p className="text-xl text-gray-600">Book affordable bus tickets online</p>
      </div>

      <SearchForm />

      <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="text-center">
          <div className="text-4xl mb-4">🚌</div>
          <h3 className="text-xl font-bold mb-2">Wide Selection</h3>
          <p className="text-gray-600">Choose from thousands of buses across the country</p>
        </div>
        <div className="text-center">
          <div className="text-4xl mb-4">💰</div>
          <h3 className="text-xl font-bold mb-2">Best Prices</h3>
          <p className="text-gray-600">Get the best deals and discounts on every journey</p>
        </div>
        <div className="text-center">
          <div className="text-4xl mb-4">✅</div>
          <h3 className="text-xl font-bold mb-2">Safe & Secure</h3>
          <p className="text-gray-600">100% safe and secure booking experience</p>
        </div>
      </div>
    </div>
  );
}
