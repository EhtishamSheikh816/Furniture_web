import ProductGridList from "@/components/product";
import ProductDetails from "@/components/productpageMid";
import Image from "next/image";
import Link from "next/link";

const ProductPage = () => {
  return (
    <div className="container mx-auto px-4 py-8 max-w-6xl ">
      {/* Breadcrumb */}
      <nav className="text-sm text-gray-500 mb-4">
        <ol className="list-reset flex space-x-2">
          <li><Link href="/" className="hover:text-gray-800">Home</Link></li>
          <li>/</li>
          <li><Link href="/shop" className="hover:text-gray-800">Shop</Link></li>
          <li>/</li>
          <li className="text-gray-800">Asgaard Sofa</li>
        </ol>
      </nav>

      {/* Main Content */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Image Gallery */}
        <div className="flex">
          {/* Thumbnails */}
          <div className="flex flex-col space-y-2 mr-4">
            {["sofa.png", "sofa_3.png", "sofa_4.png"].map((val, index) => (
              <Image
                key={index}
                src={`/${val}`}
                alt={`Thumbnail ${index + 1}`}
                width={80}
                height={80}
                className="rounded-lg cursor-pointer border border-gray-300 hover:border-black"
              />
            ))}
          </div>

          {/* Main Image */}
          <div className="rounded-lg overflow-hidden">
            <Image
              src="/sofa.png"
              alt="Asgaard Sofa"
              width={800}
              height={800}
              className="w-full"
            />
          </div>
        </div>
{/* Product Details */}
<div>
  <h1 className="text-3xl font-bold mb-2">Asgaard Sofa</h1>
  <p className="text-2xl text-gray-800 font-semibold mb-4">Rs. 250,000.00</p>

  {/* Reviews */}
  <div className="flex items-center mb-4">
    <div className="text-yellow-500 flex space-x-1">
      {[...Array(5)].map((_, i) => (
        <span key={i}>⭐</span>
      ))}
    </div>
    <span className="text-sm text-gray-500 ml-3">5 Customer Reviews</span>
  </div>

  {/* Product Description */}
  <p className="text-gray-600 leading-relaxed mb-6">
    Setting the bar as one of the loudest speakers in its class, the Kilburn is
    a compact, stout-hearted hero with a well-balanced audio that boasts a
    clear midrange and extended highs for exceptional sound quality.
  </p>

  {/* Size Options */}
  <div className="mb-6">
    <h3 className="text-base font-medium mb-2">Size</h3>
    <div className="flex space-x-3">
      {["L", "XL", "XS"].map((size) => (
        <button
          key={size}
          className="border border-gray-300 px-5 py-2 rounded-lg hover:border-black focus:ring-2 focus:ring-black"
        >
          {size}
        </button>
      ))}
    </div>
  </div>

  {/* Color Options */}
  <div className="mb-6">
    <h3 className="text-base font-medium mb-2">Color</h3>
    <div className="flex space-x-4">
      {["#000000", "#6B46C1", "#D69E2E"].map((color, index) => (
        <div
          key={index}
          className="w-8 h-8 rounded-full cursor-pointer border-2 border-gray-300 hover:border-black"
          style={{ backgroundColor: color }}
        ></div>
      ))}
    </div>
  </div>

  {/* Add to Cart */}
  <div className="flex items-center space-x-6 mb-8">
    {/* Quantity Selector */}
    <div className="flex items-center border border-gray-300 rounded-lg">
      <button className="px-4 py-2 font-bold text-lg">-</button>
      <span className="px-6 text-base font-medium">1</span>
      <button className="px-4 py-2 font-bold text-lg">+</button>
    </div>

    {/* Add to Cart Button */}
    <button className="bg-black text-white px-8 py-3 rounded-lg font-semibold hover:bg-gray-800 transition duration-300">
      Add To Cart
    </button>
  </div>

  {/* Additional Info */}
  <div className="mt-8 text-sm text-gray-600 space-y-1">
    <p>
      <span className="font-semibold">SKU:</span> SS001
    </p>
    <p>
      <span className="font-semibold">Category:</span> Sofas
    </p>
    <p>
      <span className="font-semibold">Tags:</span> Sofa, Chair, Home, Shop
    </p>
  </div>

  {/* Social Sharing */}
  <div className="mt-6 flex space-x-4 text-gray-500">
    <a href="#" className="hover:text-gray-800">🔗 Facebook</a>
    <a href="#" className="hover:text-gray-800">🔗 LinkedIn</a>
    <a href="#" className="hover:text-gray-800">🔗 Twitter</a>
  </div>
</div>

      </div>
      <ProductDetails/>
      <ProductGridList/>
    </div>
  );
};

export default ProductPage;
