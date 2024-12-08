import Image from "next/image";

const InstagramBanner = () => {
  return (
    <div className="relative bg-[#FAF4F480] py-20 px-6 flex items-center justify-center">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/insta.png" // Replace with your background image path
          alt="Background"
          className="w-full h-full object-cover "
          width={1000}
          height={1000}
        />
      </div>

      {/* Content */}
      <div className="relative text-center">
        <h1 className="text-4xl font-bold text-black mb-2">Our Instagram</h1>
        <p className="text-gray-500 text-lg mb-6">
          Follow our store on Instagram
        </p>
        <button className="px-6 py-3 bg-white text-black font-semibold rounded-lg shadow-md hover:bg-gray-100">
          Follow Us
        </button>
      </div>
    </div>
  );
};

export default InstagramBanner;
