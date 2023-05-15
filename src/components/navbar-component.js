import { FaBars, FaHeart, FaPhone, FaPhoneSquareAlt, FaPhoneVolume, FaSearch, FaShoppingBag, FaTruck, FaUser } from "react-icons/fa"
const Navbar = () => {
    return <>
        {/* header */}
        <header className=" shadow-sm bg-white">
            <div className="bg-black py-2">
                <div className=" container flex items-center justify-between  text-primary text-md">
                    <div className=" flex">
                        <span className=" flex items-center text-yellow-400 pr-2"> <FaTruck /></span>
                        <p> FREE Express Shipping on Order $570+</p>
                    </div>
                    <div className="flex gap-4 border-r-amber-50 ">
                        <span>English</span>
                        <span>USD</span>
                        <span>Setting</span>
                    </div>
                </div>
            </div>
            <div className="container flex items-center justify-between pt-6">
                {/* logo */}
                <a href="">
                    <img src="./logo.svg" alt="" className="w-32" />
                </a>

                {/* searchbar */}
                <div className="w-full max-w-xl flex">

                    <div className="w-full ">
                        <input type="text" className="w-full border border-secondary  px-5 py-2" placeholder="Search" />
                    </div>
                    <button className="bg-secondary border border-secondary text-white px-8  hover:text-secondary">
                        <span className=" left-4 top-3 text-lg text-white  ">
                            <FaSearch />
                        </span>
                    </button>
                </div>

                {/* icons */}
                <div className="flex items-center space-x-4">
                    <a href="#" className="text-center text-gray-700 hover:text-secondary transition relative">
                        <div className="text-2xl">
                            <FaHeart className="w-11" />
                        </div>
                        <div className="text-xs leading-3"> Wish List</div>
                        <span className="absolute right-0 -top-1 w-5 h-5 rounded-full flex items-center justify-center bg-secondary text-white text-xs ">8</span>
                    </a>
                    <a href="#" className="text-center text-gray-700 hover:text-secondary transition relative">
                        <div className="text-2xl">
                            <FaShoppingBag className="w-11" />
                        </div>
                        <div className="text-xs leading-3"> Cart</div>
                        <span className="absolute right-0 -top-1 w-5 h-5 rounded-full flex items-center justify-center bg-secondary text-white text-xs ">8</span>
                    </a>
                    <a href="#" className="text-center text-gray-700 hover:text-secondary transition relative">
                        <div className="text-2xl">
                            <FaUser className="w-11" />
                        </div>
                        <div className="text-xs leading-3"> Account</div>
                        <span className="absolute right-0 -top-1 w-5 h-5 rounded-full flex items-center justify-center bg-secondary text-white text-xs ">8</span>
                    </a>
                </div>
            </div>
        </header >
        {/* header end */}

        {/* navbar */}
        <nav className="bg-">
            <div className="container flex">
                {/* all category */}
                <div className="px-16 py-4 bg-secondary flex items-center cursor-pointer relative">
                    <span className="text-white">
                        <FaBars />
                    </span>
                    <span className="capitalize ml-2 text-white">All category</span>
                </div>

                {/* all category end */}
                {/* nav link */}
                <div className="flex items-center justify-between flex-grow pl-20">
                    <div className="flex items-center space-x-6 capitalize">
                        <a href="#" className="text-slate-800 font-semibold hover: text white transition">Home</a>
                        <a href="#" className="text-slate-800 font-semibold hover: text white transition">Shop</a>
                        <a href="#" className="text-slate-800 font-semibold hover: text white transition">Products</a>
                        <a href="#" className="text-slate-800 font-semibold hover: text white transition">Coupons</a>
                        <a href="#" className="text-slate-800 font-semibold hover: text white transition">Blog</a>
                        <a href="#" className="text-slate-800 font-semibold hover: text white transition">Contact</a>
                    </div>
                    <div className="flex items-center">
                        <i>
                            <FaPhoneVolume className="text-secondary w-10 h-7" />
                        </i>
                        <div className="block text-sm">
                            <h4 className="text-slate-600">Hotline:</h4>
                            <p className="font-semibold">(+402) 763 282 46</p>
                        </div>
                    </div>

                </div>
                {/* navbar end */}

            </div>
        </nav>

    </>
}

export default Navbar;