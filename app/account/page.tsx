import MyAccount from '@/components/myAccount'
import Image from 'next/image'

const Page = () => {
  return (
    <div>
      <div className="relative w-full h-60 bg-cover bg-center" style={{ backgroundImage: 'url("/bg-shop.png")' }}>
        <div className="absolute inset-0 bg-white bg-opacity-50 flex flex-col justify-center items-center">
          <Image src="/logo.png" alt="logo" width={100} height={100} className="h-[77px] w-[77px]"/>
          <h1 className={` text-3xl text-black`}>Shop</h1>
          <p className={` text-sm text-black`}>
            Home &gt; Shop
          </p>
        </div>
      </div>
        <MyAccount/>
        <div className="bg-[#fdf6f7] py-12  my-8">
        <div className=" my-4 max-w-6xl mx-auto  px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Feature 1 */}
          <div className=" flex flex-col justify-start">
            <h3 className={` text-lg font-semibold text-black`}>
              Free Delivery
            </h3>
            <p className={` text-sm text-gray-600 mt-1`}>
              For all orders over $50, consectetur adipiscing elit.
            </p>
          </div>
          {/* Feature 2 */}
          <div className="flex flex-col justify-start">
            <h3 className={` text-lg font-semibold text-black`}>
              90 Days Return
            </h3>
            <p className={` text-sm text-gray-600 mt-1`}>
              If goods have problems, consectetur adipiscing elit.
            </p>
          </div>
          {/* Feature 3 */}
          <div className="flex flex-col justify-start">
            <h3 className={` text-lg font-semibold text-black`}>
              Secure Payment
            </h3>
            <p className={` text-sm text-gray-600 mt-1`}>
              100% secure payment, consectetur adipiscing elit.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Page