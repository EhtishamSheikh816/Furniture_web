import React from "react";
import Image from "next/image";

const ProductListFeature = () => {
  return (
    <div className="bg-[#FAF4F4] px-6 py-12">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 justify-center items-center">
        {/* product 2 */}
        <div className="w-[605px] h-562px  grid grid-rows-[1fr,auto]">
          <div >
            <Image
              src="/sidetable.png"
              alt="Side Table"
              width={400}
              height={400}
              className="text-end"
            />
            <div className="-mt-14 ml-12">
              <h2 className=" text-xl font-semibold text-black ">Side table</h2>
              <a
                href="#"
                className="text-base text-black underline decoration-2 hover:text-gray-600 mt-2 inline-block"
              >
                View More
              </a>
            </div>
          </div>
        </div>
        {/* product 2 */}
        <div className="w-[605px] h-562px  grid grid-rows-[1fr,auto]">
          <div>
            <Image
              src="/sidetable2.png"
              alt="Side Table"
              width={400}
              height={400}
              className="text-end"
            />
            <div className="-mt-14 ml-12 ">
              <h2 className=" text-xl font-semibold text-black ">Side table</h2>
              <a
                href="#"
                className="text-base text-black underline decoration-2 hover:text-gray-600 mt-2 inline-block"
              >
                View More
              </a>
            </div>
          </div>
        </div>
              </div>
    </div>
  );
};

export default ProductListFeature
