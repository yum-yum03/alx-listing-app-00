import Image from "next/image";
import { PROPERTYLISTINGSAMPLE } from "@/constants";
import Pill from "@/components/Pill";

export default function Home() {
  const filters = [
    "Top Villa",
    "Self Checkin",
    "Beachfront",
    "Mountain View",
    "Pet Friendly"
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[400px] w-full">
        <Image
          src="/images/hero-bg.jpg"
          alt="Hero Background"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-white">
          <h1 className="text-4xl font-bold mb-2">
            Find your favorite place here!
          </h1>
          <p className="text-lg">
            The best prices for over 2 million properties worldwide.
          </p>
        </div>
      </section>

      {/* Filter Section */}
      <section className="flex space-x-3 p-6 overflow-x-auto">
        {filters.map((filter) => (
          <Pill key={filter} label={filter} />
        ))}
      </section>

      {/* Listing Section */}
      <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-6">
        {PROPERTYLISTINGSAMPLE.map((property) => (
          <div
            key={property.name}
            className="border rounded-lg overflow-hidden shadow hover:shadow-lg transition"
          >
            <img
              src={property.image}
              alt={property.name}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h2 className="text-lg font-bold">{property.name}</h2>
              <p className="text-sm text-gray-500">
                {property.address.city}, {property.address.country}
              </p>
              <div className="flex justify-between items-center mt-2">
                <span className="font-semibold">${property.price}/night</span>
                <span className="text-yellow-500">⭐ {property.rating}</span>
              </div>
            </div>
          </div>
        ))}
      </section>
    </>
  );
}

