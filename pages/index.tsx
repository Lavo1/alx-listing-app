import React from "react";
import { PROPERTYLISTINGSAMPLE } from "@/constants";
import { PropertyProps } from "@/interfaces";

// Example background image (replace with your local import if needed)
const heroBg =
  "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1920&q=80";

const filters = [
  "Top Villa",
  "Self Checkin",
  "Pet Friendly",
  "Luxury",
  "Beachfront",
  "Countryside"
];

const Pill: React.FC<{ label: string }> = ({ label }) => (
  <button className="px-4 py-2 rounded-full border text-sm text-gray-700 hover:bg-blue-100">
    {label}
  </button>
);

const IndexPage: React.FC = () => {
  return (
    <div>
      {/* Hero Section */}
      <section
        className="relative h-[60vh] flex flex-col justify-center items-center text-white text-center bg-cover bg-center"
        style={{ backgroundImage: `url(${heroBg})` }}
      >
        <div className="bg-black bg-opacity-40 p-6 rounded-lg">
          <h1 className="text-4xl font-bold mb-2">
            Find your favorite place here!
          </h1>
          <p className="text-lg">
            The best prices for over 2 million properties worldwide.
          </p>
        </div>
      </section>

      {/* Filter Section */}
      <section className="flex flex-wrap gap-3 justify-center py-6">
        {filters.map((f) => (
          <Pill key={f} label={f} />
        ))}
      </section>

      {/* Listing Section */}
      <section className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-8 py-10">
        {PROPERTYLISTINGSAMPLE.map((property: PropertyProps, idx: number) => (
          <div
            key={idx}
            className="border rounded-xl overflow-hidden shadow hover:shadow-lg transition"
          >
            <img
              src={property.image}
              alt={property.name}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h2 className="font-semibold text-lg">{property.name}</h2>
              <p className="text-gray-500 text-sm">
                {property.address.city}, {property.address.country}
              </p>
              <div className="flex justify-between items-center mt-3">
                <p className="text-blue-600 font-bold">${property.price}</p>
                <p className="text-yellow-500 font-semibold">
                  ⭐ {property.rating}
                </p>
              </div>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
};

export default IndexPage;
