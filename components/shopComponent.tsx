import React from "react";
import { Poppins } from "next/font/google";

const poppins4 = Poppins({
  subsets: ["latin"],
  weight: "400",
});
const poppins5 = Poppins({
  subsets: ["latin"],
  weight: "500",
});

function PaginationAndFeatures() {
  return (
    <div>
      {/* Pagination Section */}
      <div className="flex justify-center py-6 bg-white">
        <div className="flex items-center gap-4">
          <button className="px-4 py-2 bg-yellow-100 text-black rounded-md">
            1
          </button>
          <button className="px-4 py-2 bg-yellow-50 text-black rounded-md">
            2
          </button>
          <button className="px-4 py-2 bg-yellow-50 text-black rounded-md">
            3
          </button>
          <button className="px-4 py-2 bg-yellow-50 text-black rounded-md">
            Next
          </button>
        </div>
      </div>

      {/* Features Section */}
      <div className="bg-[#fdf6f7] py-12 ">
        <div className=" max-w-6xl mx-auto  px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Feature 1 */}
          <div className=" flex flex-col justify-start">
            <h3 className={`${poppins5.className} text-lg font-semibold text-black`}>
              Free Delivery
            </h3>
            <p className={`${poppins4.className} text-sm text-gray-600 mt-1`}>
              For all orders over $50, consectetur adipiscing elit.
            </p>
          </div>
          {/* Feature 2 */}
          <div className="flex flex-col justify-start">
            <h3 className={`${poppins5.className} text-lg font-semibold text-black`}>
              90 Days Return
            </h3>
            <p className={`${poppins4.className} text-sm text-gray-600 mt-1`}>
              If goods have problems, consectetur adipiscing elit.
            </p>
          </div>
          {/* Feature 3 */}
          <div className="flex flex-col justify-start">
            <h3 className={`${poppins5.className} text-lg font-semibold text-black`}>
              Secure Payment
            </h3>
            <p className={`${poppins4.className} text-sm text-gray-600 mt-1`}>
              100% secure payment, consectetur adipiscing elit.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PaginationAndFeatures;
