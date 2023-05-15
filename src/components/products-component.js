import { FaStar } from "react-icons/fa";


const ProductsComponent = () => {
    return <>
        <div className="container pb-16">
            <h2 className="text-2xl font-medium text-gray-800 uppercase mb-6"> top new arrival Products</h2>

            <div className="grid grid-cols-4 gap-6">
                <div className="bg-white shadow rounded overflow-hidden">
                    {/* product image */}
                    <div className="relative">
                        <img src="./product-1.jpg" alt="" className="w-full" />
                    </div>
                    {/* product image end */}

                    {/* product content */}
                    <div className="pt-4 pb-3 px-4">
                        <a href="#">
                            <h4 className="uppercase font-medium text-xl mb-2 text-gray-800 hover:text-secondary transition">Galaxy Tab S6 Lite  Android Tablet 128GB.</h4>
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
                <div className="bg-white shadow rounded overflow-hidden">
                    {/* product image */}
                    <div className="relative">
                        <img src="./product-2.jpg" alt="" className="w-full" />
                    </div>
                    {/* product image end */}

                    {/* product content */}
                    <div className="pt-4 pb-3 px-4">
                        <a href="#">
                            <h4 className="uppercase font-medium text-xl mb-2 text-gray-800 hover:text-secondary transition">Tracker  Pedometer Smart watch.</h4>
                        </a>
                        <div className="flex items-baseline mb-1 space-x-2">
                            <p className="text-xl text-secondary font-semibold">$45.00</p>
                            <p className="text-xl text-gray-400 font-semibol line-through">$55.00</p>
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

                <div className="bg-white shadow rounded overflow-hidden">
                    {/* product image */}
                    <div className="relative">
                        <img src="./product-3.jpg" alt="" className="w-full" />
                    </div>
                    {/* product image end */}

                    {/* product content */}
                    <div className="pt-4 pb-3 px-4">
                        <a href="#">
                            <h4 className="uppercase font-medium text-xl mb-2 text-gray-800 hover:text-secondary transition">Cancelling Headphones Wireless.</h4>
                        </a>
                        <div className="flex items-baseline mb-1 space-x-2">
                            <p className="text-xl text-secondary font-semibold">$45.00</p>
                            <p className="text-xl text-gray-400 font-semibol line-through">$55.00</p>
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
                <div className="bg-white shadow rounded overflow-hidden">
                    {/* product image */}
                    <div className="relative">
                        <img src="./product-4.jpg" alt="" className="w-full" />
                    </div>
                    {/* product image end */}

                    {/* product content */}
                    <div className="pt-4 pb-3 px-4">
                        <a href="#">
                            <h4 className="uppercase font-medium text-xl mb-2 text-gray-800 hover:text-secondary transition">Professional Camera 4K Digital Video Camera.</h4>
                        </a>
                        <div className="flex items-baseline mb-1 space-x-2">
                            <p className="text-xl text-secondary font-semibold">$45.00</p>
                            <p className="text-xl text-gray-400 font-semibol line-through">$55.00</p>
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
            </div>
        </div>
    </>
}

export default ProductsComponent;