import React from "react";
import Image from "next/image";

const BlogGrid = () => {
  return (
    <div className="bg-white px-6 py-12">
      {/* Heading Section */}
      <div className="text-center mb-8">
        <h2 className="text-3xl font-semibold text-black">Our Blogs</h2>
        <p className="text-gray-500 mt-2">
          Find a bright idea to suit your taste with our great selection
        </p>
      </div>

      {/* Blog Grid */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {[
          {
            id: 1,
            title: "Going all-in with millennial design",
            image: "/blog1.png", // Replace with actual image paths
            readTime: "5 min",
            date: "12th Oct 2022",
          },
          {
            id: 2,
            title: "Going all-in with millennial design",
            image: "/blog2.png", // Replace with actual image paths
            readTime: "5 min",
            date: "12th Oct 2022",
          },
          {
            id: 3,
            title: "Going all-in with millennial design",
            image: "/blog3.png", // Replace with actual image paths
            readTime: "5 min",
            date: "12th Oct 2022",
          },
        ].map((blog) => (
          <div
            key={blog.id}
            className="flex flex-col items-center text-center bg-gray-50 rounded-lg shadow-md overflow-hidden"
          >
            {/* Image Section */}
            <div className="relative w-[393px] h-[393px]">
              <Image
                src={blog.image}
                alt={blog.title}
                fill
                className="object-cover "
              />
            </div>

            {/* Content Section */}
            <div className="px-6 py-4">
              <h3 className="text-lg font-medium">{blog.title}</h3>
              <p className="mt-4  font-semibold underline decoration-2">
                Read More
              </p>
              <div className="flex items-center justify-center gap-4 mt-4 text-sm text-gray-500">
                <span className="flex items-center gap-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 8c-2.21 0-4 1.79-4 4 0 2.21 1.79 4 4 4s4-1.79 4-4-1.79-4-4-4z"
                    />
                  </svg>
                  {blog.readTime}
                </span>
                <span className="flex items-center gap-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 12h14m-7-7v14"
                    />
                  </svg>
                  {blog.date}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* View All Post Button */}
      <div className="text-center mt-12">
        <a
          href="#"
          className="text-black text-lg underline decoration-2 hover:text-gray-600"
        >
          View All Post
        </a>
      </div>
    </div>
  );
};

export default BlogGrid;
