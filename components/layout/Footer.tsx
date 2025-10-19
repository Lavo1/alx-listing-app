import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-100 text-center py-6 mt-10">
      <p className="text-gray-600">
        © {new Date().getFullYear()} ALX Listing App. All Rights Reserved.
      </p>
    </footer>
  );
};

export default Footer;
