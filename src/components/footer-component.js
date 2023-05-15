const { FaFacebook, FaInstagram, FaTwitch, FaTwitter, FaLinkedin, FaMailBulk, FaLocationArrow, FaSearchLocation } = require("react-icons/fa")

const FooterComponent = () => {
    return <>
        <footer className="bg-white pt-16 pb-12 border-t border-gray-100">
            <div className="container grid grid-cols-4">
                {/* text start */}
                <div className="col-span-1 space-y-8 gap-4">
                    <img src="./logo.svg" className="w-30" />
                    <p className="text-gray-500">
                        We are a team of designers and developers that create high quality WordPress
                    </p>
                    <div className="flex space-x-6">
                        <a href="#">
                            <FaFacebook className="text-black-400 hover:text-secondary" />
                        </a>
                        <a href="#">
                            <FaInstagram className="text-black-400 hover:text-secondary" />
                        </a>
                        <a href="#">
                            <FaTwitter className="text-black-400 hover:text-secondary" />
                        </a>
                        <a href="#">
                            <FaLinkedin className="text-black-400 hover:text-secondary" />
                        </a>
                    </div>
                </div>
                {/* text End */}

                {/* Footer link */}
                <div className="col-span-2 grid grid-cols-2 gap-2 ">

                    <div className="px-4">
                        <h3 className="text-sm font-semibold text-black-400 uppercase tracking-wider">My Account</h3>
                        <div className="mt-4 space-y-4">
                            <a href="#" className="text-base text-black-500 hover:text-black-900 block">
                                Track Orders
                            </a>
                            <a href="#" className="text-base text-black-500 hover:text-black-900 block">
                                Shipping                                </a>
                            <a href="#" className="text-base text-black-500 hover:text-black-900 block">
                                Wishlist
                            </a>
                            <a href="#" className="text-base text-black-500 hover:text-black-900 block">
                                My Account
                            </a>
                            <a href="#" className="text-base text-black-500 hover:text-black-900 block">
                                Order History
                            </a>
                            <a href="#" className="text-base text-black-500 hover:text-black-900 block">
                                Returns
                            </a>
                        </div>
                    </div>
                    <div>
                        <h3 className="text-sm font-semibold text-black-400 uppercase tracking-wider">Information</h3>
                        <div className="mt-4 space-y-4">
                            <a href="#" className="text-base text-black-500 hover:text-gray-900 block">
                                Our Story
                            </a>
                            <a href="#" className="text-base text-black-500 hover:text-black-900 block">
                                Careers
                            </a>
                            <a href="#" className="text-base text-black-500 hover:text-black-900 block">
                                Privacy Policy
                            </a>
                            <a href="#" className="text-base text-black-500 hover:text-black-900 block">
                                Terms & Conditions
                            </a>
                            <a href="#" className="text-base text-black-500 hover:text-black-900 block">
                                Latest News
                            </a>
                            <a href="#" className="text-base text-black-500 hover:text-gray-900 block">
                                Contact Us
                            </a>
                        </div>
                    </div>

                </div>


                {/* Footer link End */}
                <div className="col-span-1 space-y-2  ">
                    <h6 className="text-sm font-semibold text-black uppercase tracking-wider">
                        Talk To Us
                    </h6>
                    <div>
                        <p className="text-gray-500">
                            Got Questions? Call us
                        </p>
                        <span className=" text-lg font-semibold">
                            +670 413 90 762
                        </span>
                    </div>

                    <div className="flex gap-2 items-center">
                        <FaMailBulk />
                        <a href="#">
                            shofy@support.com
                        </a>
                    </div>
                    <div className="flex gap-2 items-center">
                        <FaSearchLocation className="flex " />
                        <a href="" className="w-[70%]">
                            79 Sleepy Hollow St.
                            Jamaica, New York 1432
                        </a>
                    </div>

                </div>
            </div>

        </footer>
    </>
}
export default FooterComponent; 