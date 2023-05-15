
const CategroyComponent = () => {
    return <>
        <div className="container pb-16">
            <h2 className="text-2xl font-medium text-gray-800 uppercase mb-6"> Category</h2>
            <div className="grid grid-cols-5 gap-2 ">
                <div className="bg-white  rounded overflow-hidden ">
                    {/* category image */}
                    <div className="flex items-center justify-center relative bg-blue-200 rounded-full p-16">
                        <img src="./product-cat-1.png" alt="" className="h-28" />
                    </div>
                    {/* category image end */}

                    {/* category content */}
                    <div className="pt-4 pb-3 px-4">
                        <a href="#">
                            <h4 className="uppercase font-medium text-xl mb-2
                             text-gray-800 hover:text-secondary transition text-center">
                                Headphones</h4>
                        </a>
                    </div>

                    {/* category content end */}

                </div>

                <div className="bg-white  rounded overflow-hidden ">
                    {/* category image */}
                    <div className="flex items-center justify-center relative bg-blue-200 rounded-full p-16">
                        <img src="./product-cat-2.png" alt="" className="h-28" />
                    </div>
                    {/* category image end */}

                    {/* category content */}
                    <div className="pt-4 pb-3 px-4">
                        <a href="#">
                            <h4 className="uppercase font-medium text-xl mb-2
                             text-gray-800 hover:text-secondary transition text-center">
                                Mobile Phone</h4>
                        </a>
                    </div>

                    {/* category content end */}

                </div>
                <div className="bg-white  rounded overflow-hidden ">
                    {/* category image */}
                    <div className="flex items-center justify-center relative bg-blue-200 rounded-full p-16">
                        <img src="./product-cat-3.png" alt="" className="h-28" />
                    </div>
                    {/* category image end */}

                    {/* category content */}
                    <div className="pt-4 pb-3 px-4">
                        <a href="#">
                            <h4 className="uppercase font-medium text-xl mb-2
                             text-gray-800 hover:text-secondary transition text-center">
                                CPU Heat Pipes</h4>
                        </a>
                    </div>

                    {/* category content end */}

                </div>

                <div className="bg-white  rounded overflow-hidden ">
                    {/* category image */}
                    <div className="flex items-center justify-center relative bg-blue-200 rounded-full p-16">
                        <img src="./product-cat-4.png" alt="" className="h-28" />
                    </div>
                    {/* category image end */}

                    {/* category content */}
                    <div className="pt-4 pb-3 px-4">
                        <a href="#">
                            <h4 className="uppercase font-medium text-xl mb-2
                             text-gray-800 hover:text-secondary transition text-center">
                                Smart Watch</h4>
                        </a>
                    </div>

                    {/* category content end */}

                </div>
                <div className="bg-white  rounded overflow-hidden ">
                    {/* category image */}
                    <div className="flex items-center justify-center relative bg-blue-200 rounded-full p-16">
                        <img src="./product-cat-5.png" alt="" className="h-28" />
                    </div>
                    {/* category image end */}

                    {/* category content */}
                    <div className="pt-4 pb-3 px-4">
                        <a href="#">
                            <h4 className="uppercase font-medium text-xl mb-2
                             text-gray-800 hover:text-secondary transition text-center">
                                With Bluetooth</h4>
                        </a>
                    </div>

                    {/* category content end */}

                </div>
            </div>



        </div>
    </>
}

export default CategroyComponent;