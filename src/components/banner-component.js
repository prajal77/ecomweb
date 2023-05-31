// import AwesomeSlider from 'react-awesome-slider';
// import withAutoplay from 'react-awesome-slider/dist/autoplay';
import { FaArrowCircleRight } from 'react-icons/fa';
import { Carousel } from 'react-responsive-carousel';
const BannerComponent = () => {
    return <>

        <Carousel autoPlay={true} infiniteLoop={true} showThumbs={false} className='bg-[#115061] h-full'>
            {/* start */}
            <div className='container flex justify-between items-center'>
                <section className='text-white'>
                    <h6 className='flex justify-start text-lg '>
                        Starting at $274.00
                    </h6>

                    {/* <h1 className='flex justify-start  text-5xl font-bold w-[51%] font-poppins px-0'>
                        The best tablet Collection 2023
                    </h1> */}
                    <h1 className='flex justify-center text-start text-5xl font-bold w-[51%] font-poppins px-0'>
                        The best tablet Collection 2023
                    </h1>
                    <h4 className='flex gap-1  font-oregano text-2xl py-2'>
                        Exclusive offer
                        <span className='text-[#ffd43a] '>
                            -35%
                            <svg width="94" height="20" viewBox="0 0 94 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M74.8576 4.63367L78.6048 5.11367C80.9097 5.35155 82.8309 5.75148 84.4483 5.97993L86.6581 6.31091L88.4262 6.63948C89.4684 6.81761 90.2699 6.9312 90.8805 6.99186C93.3213 7.24888 92.7011 6.63674 92.8183 6.12534C92.9355 5.61394 93.7175 5.37081 91.3267 4.45886C90.73 4.24001 89.9345 3.97481 88.8826 3.65818L87.1034 3.12577L84.8643 2.63282C83.236 2.28025 81.2402 1.82307 78.8684 1.52138L75.0177 0.981633C73.6188 0.823014 72.1417 0.730003 70.5389 0.582533C63.0297 0.0282543 55.4847 0.193022 48.0068 1.07459C39.9065 2.04304 31.9328 3.87384 24.2213 6.53586C18.0824 8.61764 12.1674 11.3089 6.56479 14.5692C4.88189 15.5255 3.25403 16.5756 1.68892 17.7145C0.568976 18.5077 -0.00964231 18.9932 0.0547097 19.0858C0.388606 19.6584 10.6194 13.1924 25.151 8.99361C32.789 6.72748 40.6283 5.20536 48.5593 4.44848C55.8569 3.76455 63.1992 3.69678 70.5082 4.24591L74.8223 4.62335" fill="currentColor"></path>
                            </svg>
                        </span>
                        Off this week
                    </h4>

                    <a className='flex items-center gap-1 bg-white text-black border w-[20%] rounded text-md h-[110%]  p-3 my-2 font-semibold   hover:text-secondary transition text-center' href='#'>
                        Shop Now
                        <FaArrowCircleRight />
                    </a>

                </section>
                <div className='flex items-center justify-center py-20'>
                    <img src='slider-img-1.png' alt='' />
                </div>
            </div>
            {/* End slide */}
            <div className='container flex justify-between items-center'>
                <section className='text-white '>
                    <h6 className='flex justify-start text-lg '>
                        Starting at $274.00
                    </h6>
                    <h1 className='flex justify-start text-start  items-center text-5xl font-bold w-[60%] font-poppins px-0'>
                        The best tablet Collection 2023
                    </h1>

                    <h4 className='flex gap-1  font-oregano text-2xl py-2'>
                        Exclusive offer
                        <span className='text-[#ffd43a] '>
                            -10%
                            <svg width="94" height="20" viewBox="0 0 94 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M74.8576 4.63367L78.6048 5.11367C80.9097 5.35155 82.8309 5.75148 84.4483 5.97993L86.6581 6.31091L88.4262 6.63948C89.4684 6.81761 90.2699 6.9312 90.8805 6.99186C93.3213 7.24888 92.7011 6.63674 92.8183 6.12534C92.9355 5.61394 93.7175 5.37081 91.3267 4.45886C90.73 4.24001 89.9345 3.97481 88.8826 3.65818L87.1034 3.12577L84.8643 2.63282C83.236 2.28025 81.2402 1.82307 78.8684 1.52138L75.0177 0.981633C73.6188 0.823014 72.1417 0.730003 70.5389 0.582533C63.0297 0.0282543 55.4847 0.193022 48.0068 1.07459C39.9065 2.04304 31.9328 3.87384 24.2213 6.53586C18.0824 8.61764 12.1674 11.3089 6.56479 14.5692C4.88189 15.5255 3.25403 16.5756 1.68892 17.7145C0.568976 18.5077 -0.00964231 18.9932 0.0547097 19.0858C0.388606 19.6584 10.6194 13.1924 25.151 8.99361C32.789 6.72748 40.6283 5.20536 48.5593 4.44848C55.8569 3.76455 63.1992 3.69678 70.5082 4.24591L74.8223 4.62335" fill="currentColor"></path>
                            </svg>
                        </span>
                        Off this week
                    </h4>

                    <a className='flex items-center gap-1 bg-white text-black border w-[20%] rounded text-md h-[110%]  p-3 my-2 font-semibold   hover:text-secondary transition text-center' href='#'>
                        Shop Now
                        <FaArrowCircleRight />
                    </a>

                </section>
                <div className=' flex items-center py-28'>
                    <img src='slider-img-2.png' alt='' />
                </div>
            </div>

            <div className='container flex justify-between items-center py-20'>
                <section className='text-white'>
                    <h6 className='flex justify-start text-lg '>
                        Starting at $274.00
                    </h6>
                    <h1 className='flex justify-start text-start text-5xl font-bold w-[51%] font-poppins px-0'>
                        The best tablet Collection 2023
                    </h1>

                    <h4 className='flex gap-1  font-oregano text-2xl py-2'>
                        Exclusive offer
                        <span className='text-[#ffd43a] '>
                            -10%
                            <svg width="94" height="20" viewBox="0 0 94 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M74.8576 4.63367L78.6048 5.11367C80.9097 5.35155 82.8309 5.75148 84.4483 5.97993L86.6581 6.31091L88.4262 6.63948C89.4684 6.81761 90.2699 6.9312 90.8805 6.99186C93.3213 7.24888 92.7011 6.63674 92.8183 6.12534C92.9355 5.61394 93.7175 5.37081 91.3267 4.45886C90.73 4.24001 89.9345 3.97481 88.8826 3.65818L87.1034 3.12577L84.8643 2.63282C83.236 2.28025 81.2402 1.82307 78.8684 1.52138L75.0177 0.981633C73.6188 0.823014 72.1417 0.730003 70.5389 0.582533C63.0297 0.0282543 55.4847 0.193022 48.0068 1.07459C39.9065 2.04304 31.9328 3.87384 24.2213 6.53586C18.0824 8.61764 12.1674 11.3089 6.56479 14.5692C4.88189 15.5255 3.25403 16.5756 1.68892 17.7145C0.568976 18.5077 -0.00964231 18.9932 0.0547097 19.0858C0.388606 19.6584 10.6194 13.1924 25.151 8.99361C32.789 6.72748 40.6283 5.20536 48.5593 4.44848C55.8569 3.76455 63.1992 3.69678 70.5082 4.24591L74.8223 4.62335" fill="currentColor"></path>
                            </svg>
                        </span>
                        Off this week
                    </h4>

                    <a className='flex items-center gap-1 bg-white text-black border w-[20%] rounded text-md h-[110%]  p-3 my-2 font-semibold   hover:text-secondary transition text-center' href='#'>
                        Shop Now
                        <FaArrowCircleRight />
                    </a>

                </section>
                <div className=' '>
                    <img src='slider-img-3.png' alt='' />
                </div>
            </div>

        </Carousel>
    </>
}

export default BannerComponent;