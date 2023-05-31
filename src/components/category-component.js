import Link from "next/link";

const CategroyComponent = () => {
    return <>
        <div className="container py-8">
            <h2 className="text-2xl font-medium text-gray-800 uppercase mb-6"> Category</h2>
            <div className="grid grid-cols-5 gap-10  ">
                <div className="col-span-1  bg-white  rounded overflow-hidden">
                    {/* category image */}

                    <div className=" flex justify-center bg-blue-200/50  p-14 rounded-full ">
                        <Link href={`/products/category/id`}>
                            <img src="./product-cat-1.png" alt="" className="h-28 " />
                        </Link>

                    </div>
                    {/* category image end */}

                    {/* category content */}
                    <div className="pt-4 pb-3 px-4">
                        <Link href={`/products/category/id`}>
                            <h4 className="uppercase font-medium text-xl  text-gray-800 hover:text-secondary transition text-center">
                                Headphones
                            </h4>
                        </Link>
                        <h6 className="text-center text-gray-400">20 Products</h6>
                    </div>

                    {/* category content end */}

                </div>

                <div className="col-span-1 bg-white  rounded overflow-hidden ">
                    {/* category image */}
                    <div className="flex items-center justify-center relative bg-blue-200/50 rounded-full p-14">
                        <img src="./product-cat-2.png" alt="" className="h-28" />
                    </div>
                    {/* category image end */}

                    {/* category content */}
                    <div className="pt-4 pb-3 px-4">
                        <a href="#">
                            <h4 className="uppercase font-medium text-xl
                             text-gray-800 hover:text-secondary transition text-center">
                                Mobile Phone</h4>
                        </a>
                        <h6 className="text-center text-gray-400">40 Products</h6>
                    </div>

                    {/* category content end */}

                </div>
                <div className="col-span-1 bg-white  rounded overflow-hidden ">
                    {/* category image */}
                    <div className="flex items-center justify-center relative bg-blue-200/50 rounded-full p-14">
                        <img src="./product-cat-3.png" alt="" className="h-28" />
                    </div>
                    {/* category image end */}

                    {/* category content */}
                    <div className="pt-4 pb-3 px-4">
                        <a href="#">
                            <h4 className="uppercase font-medium text-xl
                             text-gray-800 hover:text-secondary transition text-center">
                                CPU Heat Pipes</h4>
                        </a>
                        <h6 className="text-center text-gray-400">30 Products</h6>

                    </div>

                    {/* category content end */}

                </div>

                <div className="col-span-1 bg-white  rounded overflow-hidden ">
                    {/* category image */}
                    <div className="flex items-center justify-center relative bg-blue-200/50 rounded-full p-14">
                        <img src="./product-cat-4.png" alt="" className="h-28" />
                    </div>
                    {/* category image end */}

                    {/* category content */}
                    <div className="pt-4 pb-3 px-4">
                        <a href="#">
                            <h4 className="uppercase font-medium text-xl
                             text-gray-800 hover:text-secondary transition text-center">
                                Smart Watch</h4>
                        </a>
                        <h6 className="text-center text-gray-400">50 Products</h6>
                    </div>

                    {/* category content end */}

                </div>
                <div className="col-span-1 bg-white  rounded overflow-hidden ">
                    {/* category image */}
                    <div className="flex items-center justify-center relative bg-blue-200/50 rounded-full p-14">
                        <img src="./product-cat-5.png" alt="" className="h-28" />
                    </div>
                    {/* category image end */}

                    {/* category content */}
                    <div className="pt-4 pb-3 px-4">
                        <a href="#">
                            <h4 className="uppercase font-medium text-xl
                             text-gray-800 hover:text-secondary transition text-center">
                                With Bluetooth</h4>
                        </a>
                        <h6 className="text-center text-gray-400">20 Products</h6>
                    </div>

                    {/* category content end */}

                </div>


            </div>



        </div>
    </>
}

export default CategroyComponent;
