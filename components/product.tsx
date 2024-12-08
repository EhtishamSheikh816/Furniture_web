import React from "react";
import Image from "next/image";

const ProductGridList = () => {
  return (
    <div className="bg-white px-6 py-12">
      {/* Heading Section */}
      <div className="text-center mb-8">
        <h2 className="text-3xl font-semibold text-black">Top Picks For You</h2>
        <p className="text-gray-500 mt-2">
          Find a bright idea to suit your taste with our great selection of suspension, floor, and table lights.
        </p>
      </div>

      {/* Product Grid */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {/* Product Card */}
        {[
          {
            id: 1,
            name: "Trenton modular sofa_3",
            price: "Rs. 25,000.00",
            image: "/sofa_3.png", // Replace with actual image paths
          },
          {
            id: 2,
            name: "Granite dining table with dining chair",
            price: "Rs. 25,000.00",
            image: "/dining.png", // Replace with actual image paths
          },
          {
            id: 3,
            name: "Outdoor bar table and stool",
            price: "Rs. 25,000.00",
            image: "/bar.png", // Replace with actual image paths
          },
          {
            id: 4,
            name: "Plain console with teak mirror",
            price: "Rs. 25,000.00",
            image: "/teak.png", // Replace with actual image paths
          },
        ].map((product) => (
          <div
            key={product.id}
            className="w-[287px] h-[372px] mx-auto flex flex-col items-center text-center rounded-lg"
          >
            {/* Image Container */}
            <div className="w-[287px] h-[200px] overflow-hidden rounded-md">
              <Image
                src={product.image}
                alt={product.name}
                width={287}
                height={200}
                className="w-full h-full object-cover"
              />
            </div>
            {/* Product Details */}
            <div className="grid grid-rows-2 gap-2 mt-4 w-full px-2">
              <h3 className="text-start text-[16px] font-medium">{product.name}</h3>
              <p className="text-start text-[16px] font-semibold">{product.price}</p>
            </div>
          </div>
        ))}
      </div>

      {/* View More Button */}
      <div className="text-center">
        <a
          href="#"
          className="text-black text-lg underline decoration-2 hover:text-gray-600"
        >
          View More
        </a>
      </div>
    </div>
  );
};

export default ProductGridList;
