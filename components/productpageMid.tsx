"use client"
import Image from "next/image";
import { useState } from "react";

const ProductDetails = () => {
  const [activeTab, setActiveTab] = useState("Description");

  const tabs = ["Description", "Additional Information", "Reviews [5]"];

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Tabs */}
      <div className="text-[24px] text-[#9f9f9f] flex justify-center space-x-6 border-gray-200 mb-6">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`pb-2 text-sm font-medium ${
              activeTab === tab
                ? "text-black border-b-2 border-black"
                : "text-gray-500"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Content */}
      {activeTab === "Description" && (
        <div className="space-y-6 max-w-[700px] mx-auto text-base">
          <p className="text-gray-700">
            Embodying the raw, wayward spirit of rock ‘n’ roll, the Kilburn
            portable active stereo speaker takes the unmistakable look and sound
            of Marshall, unplugs the chords, and takes the show on the road.
          </p>
          <p className="text-gray-700">
            Weighing in under 7 pounds, the Kilburn is a lightweight piece of
            vintage styled engineering. Setting the bar as one of the loudest
            speakers in its class, the Kilburn is a compact, stout-hearted hero
            with a well-balanced audio which boasts a clear midrange and
            extended highs for a sound that is both articulate and pronounced.
          </p>
        </div>
      )}

      {/* Image Grid */}
      <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-3">
        {/* Sofa Image 1 */}
        <div className="bg-[#FBEBB5] rounded-lg overflow-hidden">
          <Image
            src="/sofa.png"
            alt="Sofa 1"
            width={800}
            height={800}
            className="w-full object-cover"
          />
        </div>
        {/* Sofa Image 2 */}
        <div className="bg-[#FBEBB5] rounded-lg overflow-hidden">
          <Image
            src="/sofa.png"
            alt="Sofa 2"
            width={800}
            height={800}
            className="w-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
