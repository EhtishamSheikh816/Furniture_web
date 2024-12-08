const Checkout = () => {
  return (
    <div className="w-full px-4 py-8 max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
      {/* Billing Details Section */}
      <div className="border border-gray-200 rounded-lg p-6 bg-white">
        <h2 className="text-xl font-semibold mb-4">Billing details</h2>
        <form className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label htmlFor="first-name" className="block text-sm text-gray-600 mb-1">
              First Name
            </label>
            <input
              type="text"
              id="first-name"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-400"
              placeholder="Enter your first name"
            />
          </div>
          <div>
            <label htmlFor="last-name" className="block text-sm text-gray-600 mb-1">
              Last Name
            </label>
            <input
              type="text"
              id="last-name"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-400"
              placeholder="Enter your last name"
            />
          </div>
          <div className="md:col-span-2">
            <label htmlFor="company-name" className="block text-sm text-gray-600 mb-1">
              Company Name (Optional)
            </label>
            <input
              type="text"
              id="company-name"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-400"
              placeholder="Enter your company name"
            />
          </div>
          <div className="md:col-span-2">
            <label htmlFor="country" className="block text-sm text-gray-600 mb-1">
              Country / Region
            </label>
            <select
              id="country"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-400"
            >
              <option>Sri Lanka</option>
              {/* Add more options here */}
            </select>
          </div>
          <div className="md:col-span-2">
            <label htmlFor="street-address" className="block text-sm text-gray-600 mb-1">
              Street address
            </label>
            <input
              type="text"
              id="street-address"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-400"
              placeholder="Enter your street address"
            />
          </div>
          <div>
            <label htmlFor="city" className="block text-sm text-gray-600 mb-1">
              Town / City
            </label>
            <input
              type="text"
              id="city"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-400"
              placeholder="Enter your city"
            />
          </div>
          <div>
            <label htmlFor="province" className="block text-sm text-gray-600 mb-1">
              Province
            </label>
            <select
              id="province"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-400"
            >
              <option>Western Province</option>
              {/* Add more options here */}
            </select>
          </div>
          <div>
            <label htmlFor="zip" className="block text-sm text-gray-600 mb-1">
              ZIP code
            </label>
            <input
              type="text"
              id="zip"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-400"
              placeholder="Enter your ZIP code"
            />
          </div>
          <div>
            <label htmlFor="phone" className="block text-sm text-gray-600 mb-1">
              Phone
            </label>
            <input
              type="text"
              id="phone"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-400"
              placeholder="Enter your phone number"
            />
          </div>
          <div className="md:col-span-2">
            <label htmlFor="email" className="block text-sm text-gray-600 mb-1">
              Email address
            </label>
            <input
              type="email"
              id="email"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-400"
              placeholder="Enter your email address"
            />
          </div>
          <div className="md:col-span-2">
            <label htmlFor="additional-info" className="block text-sm text-gray-600 mb-1">
              Additional information
            </label>
            <textarea
              id="additional-info"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-400"
              placeholder="Enter any additional information"
            ></textarea>
          </div>
        </form>
      </div>

      {/* Order Summary Section */}
      <div className="border border-gray-200 rounded-lg p-6 bg-white">
        <h2 className="text-xl font-semibold mb-4">Product</h2>
        <div className="mb-4">
          <div className="flex justify-between mb-2">
            <span>Asgard sofa x 1</span>
            <span>Rs. 250,000.00</span>
          </div>
          <div className="flex justify-between">
            <span>Subtotal</span>
            <span>Rs. 250,000.00</span>
          </div>
          <div className="flex justify-between font-semibold text-lg">
            <span>Total</span>
            <span className="text-[#B88E2F]">Rs. 250,000.00</span>
          </div>
        </div>

        <div className="mb-4">
          <h3 className="text-lg font-medium mb-2">Payment Method</h3>
          <div>
            <label className="flex items-center mb-2">
              <input type="radio" name="payment-method" className="mr-2" />
              Direct Bank Transfer
            </label>
            <p className="text-sm text-gray-500 mb-2">
              Make your payment directly into our bank account. Please use your Order ID as the payment reference. Your order will not be shipped until the funds have cleared in our account.
            </p>
            <label className="flex items-center mb-2">
              <input type="radio" name="payment-method" className="mr-2" />
              Cash on Delivery
            </label>
          </div>
        </div>

        <button className="h-[64px] w-[205px] border hover:text-white py-2 rounded-lg hover:bg-gray-800 transition duration-300"
 >
          Place order
        </button>
      </div>
    </div>
  );
};

export default Checkout;
