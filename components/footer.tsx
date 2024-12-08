import { Poppins } from "next/font/google";

const poppins4 = Poppins({
  subsets: ["latin"],
  weight: "400",
});
const poppins5 = Poppins({
  subsets: ["latin"],
  weight: "500",
});

function Footer() {
  return (
    <footer className=" bg-white py-10 px-4 w-full max-w-6xl mx-auto">
      {/* Main container */}
      <div className="max-w-[1240px] mx-auto flex flex-col gap-10">
        {/* Upper section */}
        <div className="flex flex-wrap justify-between items-start gap-8">
          {/* Address */}
          <div className="w-full sm:w-auto">
            <p
              className={`${poppins4.className} text-sm text-[#9F9F9F] leading-relaxed`}
            >
              400 University Drive Suite 200 Coral Gables,
              <br />
              FL 33134 USA
            </p>
          </div>

          {/* Links */}
          <div className="flex flex-wrap justify-between gap-20">
            {/* Links Section */}
            <div className="flex flex-col gap-4">
              <h5
                className={`${poppins5.className} text-sm text-[#9F9F9F] uppercase`}
              >
                Links
              </h5>
              <ul className="flex flex-col gap-8">
                <li className={`${poppins5.className} text-[14px]`}>Home</li>
                <li className={`${poppins5.className} text-[14px]`}>Shop</li>
                <li className={`${poppins5.className} text-[14px]`}>About</li>
                <li className={`${poppins5.className} text-[14px]`}>Contact</li>
              </ul>
            </div>

            {/* Help Section */}
            <div className="flex flex-col gap-4">
              <h5
                className={`${poppins5.className} text-sm text-[#9F9F9F] uppercase`}
              >
                Help
              </h5>
              <ul className="flex flex-col gap-8">
                <li className={`${poppins5.className} text-[14px]`}>
                  Payment Options
                </li>
                <li className={`${poppins5.className} text-[14px]`}>Returns</li>
                <li className={`${poppins5.className} text-[14px]`}>
                  Privacy Policies
                </li>
              </ul>
            </div>
          </div>

          {/* Newsletter */}
          <div className="flex flex-col gap-4 w-full sm:w-auto">
            <h5
              className={`${poppins5.className} text-sm text-[#9F9F9F] uppercase`}
            >
              Newsletter
            </h5>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="Enter Your Email Address"
                className={`${poppins4.className} flex-1 border-b border-black text-sm p-1`}
              />
              <button
                className={`${poppins5.className} text-sm border-b border-black`}
              >
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Bottom section */}
        <div className="border-t pt-4 text-center sm:text-left">
          <p
            className={`${poppins4.className} text-sm text-[#9F9F9F]`}
          >
            2022 Meubel House. All rights reserved
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
