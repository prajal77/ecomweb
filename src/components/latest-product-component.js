import Carousel from "@christian-martins/react-grid-carousel";
import { FaStar } from "react-icons/fa";

const LatestProducts = () => {
    return <>
        <div className="container pb-16">
            <h2 className="text-2xl font-medium text-gray-800 uppercase mb-6"> Latest Arrival</h2>
            <Carousel cols={4} rows={1} gap={10} loop={true}>
                <Carousel.Item>
                    <div className="bg-white shadow rounded overflow-hidden">
                        {/* product image */}
                        <div className="relative">
                            <img src="/product-6.jpg" alt="" className="w-full" />
                        </div>
                        {/* product image end */}

                        {/* product content */}
                        <div className="pt-4 pb-3 px-4">
                            <a href="#">
                                <h4 className="uppercase font-medium text-xl mb-2 text-gray-800 hover:text-secondary transition">
                                    Fast Charger 6.5A Type-C Cable For OPPO Find X3 Pro
                                </h4>
                            </a>
                            <div className="flex items-baseline mb-1 space-x-2">
                                <p className="text-xl text-secondary font-semibold">$45.00</p>
                                <p className="text-xl text-gray-400 font-semibold line-through ">$55.00</p>
                            </div>
                            <div className="flex items-center ">
                                <div className="flex gap-1 text-sm text-yellow-500">
                                    <span> <FaStar /> </span>
                                    <span> <FaStar /> </span>
                                    <span> <FaStar /> </span>
                                    <span> <FaStar /> </span>
                                    <span> <FaStar /> </span>
                                </div>
                                <div className="text-xs text-gray-500 ml-3">(150)</div>
                            </div>
                        </div>
                        <a href="#" className="block w-full py-1 text-center text-white bg-secondary border border-secondary rounded-b hover:bg-transparent hover:text-secondary transition">
                            Add to Cart
                        </a>
                        {/* product content end */}

                    </div>
                </Carousel.Item>
                <Carousel.Item>
                    <div className="bg-white shadow rounded overflow-hidden">
                        {/* product image */}
                        <div className="relative">
                            <img src="/product-7.jpg" alt="" className="w-full" />
                        </div>
                        {/* product image end */}

                        {/* product content */}
                        <div className="pt-4 pb-3 px-4">
                            <a href="#">
                                <h4 className="uppercase font-medium text-xl mb-2 text-gray-800 hover:text-secondary transition">
                                    True Wireless Noise Cancelling Earbuds with Apple.                                </h4>
                            </a>
                            <div className="flex items-baseline mb-1 space-x-2">
                                <p className="text-xl text-secondary font-semibold">$45.00</p>
                                <p className="text-xl text-gray-400 font-semibold line-through ">$55.00</p>
                            </div>
                            <div className="flex items-center ">
                                <div className="flex gap-1 text-sm text-yellow-500">
                                    <span> <FaStar /> </span>
                                    <span> <FaStar /> </span>
                                    <span> <FaStar /> </span>
                                    <span> <FaStar /> </span>
                                    <span> <FaStar /> </span>
                                </div>
                                <div className="text-xs text-gray-500 ml-3">(150)</div>
                            </div>
                        </div>
                        <a href="#" className="block w-full py-1 text-center text-white bg-secondary border border-secondary rounded-b hover:bg-transparent hover:text-secondary transition">
                            Add to Cart
                        </a>
                        {/* product content end */}

                    </div>
                </Carousel.Item>

                <Carousel.Item>
                    <div className="bg-white shadow rounded overflow-hidden">
                        {/* product image */}
                        <div className="relative">
                            <img src="/product-8.jpg" alt="" className="w-full" />
                        </div>
                        {/* product image end */}

                        {/* product content */}
                        <div className="pt-4 pb-3 px-4">
                            <a href="#">
                                <h4 className="uppercase font-medium text-xl mb-2 text-gray-800 hover:text-secondary transition">
                                    Galaxy Tab S6 Lite 10.4-inch Android Tablet 128GB.
                                </h4>
                            </a>
                            <div className="flex items-baseline mb-1 space-x-2">
                                <p className="text-xl text-secondary font-semibold">$45.00</p>
                                <p className="text-xl text-gray-400 font-semibold line-through ">$55.00</p>
                            </div>
                            <div className="flex items-center ">
                                <div className="flex gap-1 text-sm text-yellow-500">
                                    <span> <FaStar /> </span>
                                    <span> <FaStar /> </span>
                                    <span> <FaStar /> </span>
                                    <span> <FaStar /> </span>
                                    <span> <FaStar /> </span>
                                </div>
                                <div className="text-xs text-gray-500 ml-3">(150)</div>
                            </div>
                        </div>
                        <a href="#" className="block w-full py-1 text-center text-white bg-secondary border border-secondary rounded-b hover:bg-transparent hover:text-secondary transition">
                            Add to Cart
                        </a>
                        {/* product content end */}

                    </div>
                </Carousel.Item>
                <Carousel.Item>
                    <div className="bg-white shadow rounded overflow-hidden">
                        {/* product image */}
                        <div className="relative">
                            <img src="/product-9.jpg" alt="" className="w-full" />
                        </div>
                        {/* product image end */}

                        {/* product content */}
                        <div className="pt-4 pb-3 px-4">
                            <a href="#">
                                <h4 className="uppercase font-medium text-xl mb-2 text-gray-800 hover:text-secondary transition">
                                    Galaxy Tab S6 Lite 10.4-inch Android Tablet 128GB
                                </h4>
                            </a>
                            <div className="flex items-baseline mb-1 space-x-2">
                                <p className="text-xl text-secondary font-semibold">$45.00</p>
                                <p className="text-xl text-gray-400 font-semibold line-through ">$55.00</p>
                            </div>
                            <div className="flex items-center ">
                                <div className="flex gap-1 text-sm text-yellow-500">
                                    <span> <FaStar /> </span>
                                    <span> <FaStar /> </span>
                                    <span> <FaStar /> </span>
                                    <span> <FaStar /> </span>
                                    <span> <FaStar /> </span>
                                </div>
                                <div className="text-xs text-gray-500 ml-3">(150)</div>
                            </div>
                        </div>
                        <a href="#" className="block w-full py-1 text-center text-white bg-secondary border border-secondary rounded-b hover:bg-transparent hover:text-secondary transition">
                            Add to Cart
                        </a>
                        {/* product content end */}

                    </div>
                </Carousel.Item>
                <Carousel.Item>
                    <div className="bg-white shadow rounded overflow-hidden">
                        {/* product image */}
                        <div className="relative">
                            <img src="/product-10.jpg" alt="" className="w-full" />
                        </div>
                        {/* product image end */}

                        {/* product content */}
                        <div className="pt-4 pb-3 px-4">
                            <a href="#">
                                <h4 className="uppercase font-medium text-xl mb-2 text-gray-800 hover:text-secondary transition">

                                    Galaxy Tab S6 Lite 10.4-inch Android Tablet 128GB.
                                </h4>
                            </a>
                            <div className="flex items-baseline mb-1 space-x-2">
                                <p className="text-xl text-secondary font-semibold">$45.00</p>
                                <p className="text-xl text-gray-400 font-semibold line-through ">$55.00</p>
                            </div>
                            <div className="flex items-center ">
                                <div className="flex gap-1 text-sm text-yellow-500">
                                    <span> <FaStar /> </span>
                                    <span> <FaStar /> </span>
                                    <span> <FaStar /> </span>
                                    <span> <FaStar /> </span>
                                    <span> <FaStar /> </span>
                                </div>
                                <div className="text-xs text-gray-500 ml-3">(150)</div>
                            </div>
                        </div>
                        <a href="#" className="block w-full py-1 text-center text-white bg-secondary border border-secondary rounded-b hover:bg-transparent hover:text-secondary transition">
                            Add to Cart
                        </a>
                        {/* product content end */}

                    </div>
                </Carousel.Item>

            </Carousel>
        </div>
    </>
}
export default LatestProducts;

