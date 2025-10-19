import React from "react";

const Header: React.FC = () => {
  const types = ["Rooms", "Mansion", "Countryside", "Beachfront", "Apartments"];

  return (
    <header className="flex flex-col items-center bg-white shadow-md py-4">
      <div className="w-full flex justify-between items-center px-8">
        <h1 className="text-2xl font-bold text-blue-600">🏠 ALX Listing</h1>

        <div className="flex gap-3 items-center">
          <input
            type="text"
            placeholder="Search properties..."
            className="border rounded-full px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
            Sign In
          </button>
          <button className="border border-blue-600 text-blue-600 px-4 py-2 rounded-lg hover:bg-blue-50">
            Sign Up
          </button>
        </div>
      </div>

      <div className="flex gap-4 mt-3">
        {types.map((type) => (
          <button
            key={type}
            className="text-gray-700 hover:text-blue-600 font-medium"
          >
            {type}
          </button>
        ))}
      </div>
    </header>
  );
};

export default Header;
