
const SubscribeComponent = () => {
    return <>
        <div className=" bg-[#0989ff]  py-16">
            <div className=" container flex items-center justify-between ">
                <div className="">
                    <h6 className="text-lg font-sans text-white font-medium">
                        SALE 20% OFF ALL STORE
                    </h6>
                    <h1 className="flex justify-start text-white text-3xl font-bold font-poppins px-0">
                        Subscribe our Newsletter
                    </h1>
                </div>
                <div className="w-full max-w-md  flex">

                    <div className="w-full ">
                        <input type="text" className="w-full border rounded-l-lg border-secondary  px-5 py-2" placeholder="Enter Your Email" />
                    </div>
                    <button className="bg-black rounded-r-lg px-8 hover:text-secondary">
                        <span className=" left-4 top-3 text-lg text-white  ">
                            Subscribe
                        </span>
                    </button>
                </div>
            </div>

        </div>
    </>
}

export default SubscribeComponent;