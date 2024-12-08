const MyAccount = () => {
    return (
      <div className="w-full px-4 py-8 max-w-6xl mx-auto">
          
        {/* Login and Register Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 h-[430px]">
          {/* Login Form */}
          <div className="flex flex-col justify-between border border-gray-200 rounded-lg  p-6 bg-white">
            <h2 className="text-xl font-semibold mb-4">Log In</h2>
            <form className="flex-grow flex flex-col justify-between">
              <div>
                <div className="mb-4">
                  <label
                    htmlFor="username"
                    className="block text-gray-600 text-sm mb-2"
                  >
                    Username or email address
                  </label>
                  <input
                    type="text"
                    id="username"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-400"
                    placeholder="Enter your username or email"
                  />
                </div>
                <div className="mb-4">
                  <label
                    htmlFor="password"
                    className="block text-gray-600 text-sm mb-2"
                  >
                    Password
                  </label>
                  <input
                    type="password"
                    id="password"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-400"
                    placeholder="Enter your password"
                  />
                </div>
              </div>
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center">
                    <input type="checkbox" id="remember" className="mr-2" />
                    <label htmlFor="remember" className="text-gray-600 text-sm">
                      Remember me
                    </label>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                <button
                  type="submit"
                  className="h-[64px] w-[205px] border hover:text-white py-2 rounded-lg hover:bg-gray-800 transition duration-300"
                  >
                  Log In
                </button>
                    <p className="text-sm text-gray-500 hover:underline">Lost your password?</p>
                </div>
              </div>
            </form>
          </div>
  
          {/* Register Form */}
          <div className="flex flex-col justify-between border border-gray-200 rounded-lg  p-6 bg-white">
            <h2 className="text-xl font-semibold mb-4">Register</h2>
            <form className="flex-grow flex flex-col justify-between">
              <div>
                <div className="mb-4">
                  <label
                    htmlFor="email"
                    className="block text-gray-600 text-sm mb-2"
                  >
                    Email address
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-400"
                    placeholder="Enter your email"
                  />
                </div>
                <p className="text-gray-500 text-sm mb-4">
                  A link to set a new password will be sent to your email address.
                  Your personal data will be used to manage your account and for
                  purposes described in our{" "}
                  <a href="#" className="text-blue-600 hover:underline">
                    privacy policy
                  </a>
                  .
                </p>
              </div>
              <div>
                <button
                  type="submit"
                  className="w-[205px] border hover:text-white py-2 rounded-lg hover:bg-gray-800 transition duration-300 h-[64px]"
                >
                  Register
                </button>
              </div>
            </form>
          </div>
        </div>
  
        {/* Features Section */}
        
      </div>
    );
  };
  
  export default MyAccount;
  