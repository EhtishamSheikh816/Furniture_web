import Image from "next/image";
import Link from "next/link";

const ProductPage = () => {
  return (
    <div className="container mx-auto px-4 py-8">
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
        <div>
          <div className="rounded-lg overflow-hidden mb-4">
            <Image
              src="/images/asgaard-main.jpg"
              alt="Asgaard Sofa"
              width={800}
              height={800}
              className="w-full"
            />
          </div>
          <div className="grid grid-cols-5 gap-2">
            {[1, 2, 3, 4, 5].map((_, index) => (
              <Image
                key={index}
                src={`/images/asgaard-thumbnail-${index + 1}.jpg`}
                alt={`Thumbnail ${index + 1}`}
                width={100}
                height={100}
                className="rounded-lg cursor-pointer"
              />
            ))}
          </div>
        </div>

        {/* Product Details */}
        <div>
          <h1 className="text-3xl font-semibold mb-2">Asgaard Sofa</h1>
          <p className="text-xl text-gray-700 font-medium mb-4">Rs. 250,000.00</p>
          <div className="flex items-center mb-4">
            <div className="text-yellow-500 flex items-center space-x-1">
              {[...Array(5)].map((_, i) => (
                <span key={i}>⭐</span>
              ))}
            </div>
            <span className="text-sm text-gray-500 ml-2">5 Customer Reviews</span>
          </div>
          <p className="text-gray-600 mb-4">
            Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero...
          </p>

          {/* Size Options */}
          <div className="mb-4">
            <h3 className="text-sm text-gray-700 mb-2">Size</h3>
            <div className="flex space-x-2">
              {["L", "XL", "XS"].map((size) => (
                <button
                  key={size}
                  className="border border-gray-300 px-4 py-2 rounded hover:border-black"
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          {/* Color Options */}
          <div className="mb-4">
            <h3 className="text-sm text-gray-700 mb-2">Color</h3>
            <div className="flex space-x-2">
              {["black", "blue", "gold"].map((color, index) => (
                <div
                  key={index}
                  className={`w-8 h-8 rounded-full bg-${color} border border-gray-300 cursor-pointer`}
                ></div>
              ))}
            </div>
          </div>

          {/* Add to Cart */}
          <div className="flex items-center space-x-4">
            <div className="flex items-center border border-gray-300 rounded">
              <button className="px-3 py-2">-</button>
              <span className="px-4">1</span>
              <button className="px-3 py-2">+</button>
            </div>
            <button className="bg-black text-white px-6 py-2 rounded hover:bg-gray-800">
              Add To Cart
            </button>
          </div>
        </div>
      </div>

      {/* Product Info */}
      <div className="mt-8 border-t pt-4">
        <p className="text-sm text-gray-500">
          <span className="font-semibold">SKU:</span> SS001
        </p>
        <p className="text-sm text-gray-500">
          <span className="font-semibold">Category:</span> Sofas
        </p>
        <p className="text-sm text-gray-500">
          <span className="font-semibold">Tags:</span> Sofa, Chair, Home, Shop
        </p>
        <div className="flex space-x-4 mt-4">
          <a href="#" className="text-gray-500 hover:text-gray-800">🔗 Facebook</a>
          <a href="#" className="text-gray-500 hover:text-gray-800">🔗 LinkedIn</a>
          <a href="#" className="text-gray-500 hover:text-gray-800">🔗 Twitter</a>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
