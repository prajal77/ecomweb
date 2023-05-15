import { FaArrowCircleRight } from 'react-icons/fa';

const SecondBannerComponent = () => {
    return <>
        <div className="container py-16 flex justify-between  ">
            <div className="flex items-center relative border rounded-lg">
                <div className="px-10 absolute">
                    <h4 className='text-lg font-sans text-gray-500 font-medium'>Sale 20% off all store</h4>
                    <h1 className='flex justify-start  text-2xl font-semibold w-[56%] font-poppins px-0'>Smartphone BLU G91 Pro 2022</h1>
                    <a className='flex items-center gap-1  text-black my-5 font-semibold   hover:text-secondary transition ' href='#'>
                        Shop Now
                        <FaArrowCircleRight />
                    </a>
                </div>
                <img src="./product-banner-1.jpg" alt="" />
            </div>

            <div className="flex items-center relative  border rounded-lg ">
                <div className="px-10 absolute">
                    <h1 className='flex justify-start  text-1xl font-semibold w-[70%] font-poppins px-0'>
                        HyperX Cloud II Wireless</h1>
                    <h4 className='text-md font-sans  font-medium'>Sale 35% off</h4>
                    <a className='flex items-center gap-1  text-black my-5 font-semibold   hover:text-secondary transition ' href='#'>
                        Shop Now
                        <FaArrowCircleRight />
                    </a>
                </div>
                <img src="./product-banner-2.jpg" alt="" />
            </div>

        </div>

    </>
}

export default SecondBannerComponent;