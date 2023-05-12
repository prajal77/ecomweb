// import AwesomeSlider from 'react-awesome-slider';
// import withAutoplay from 'react-awesome-slider/dist/autoplay';
import { Carousel } from 'react-responsive-carousel';
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';



const BannerComponent = () => {
    return <>
        <CarouselProvider
            naturalSlideWidth={100}
            naturalSlideHeight={80}
            totalSlides={3}
        >
            <Slider>
                <Slide index={0}>
                    <img src='./luggage.jpg' alt='' />
                </Slide>
                <Slide index={1}>
                    <img src='./m04.jpg' alt='' />
                </Slide>
                <Slide index={2}>
                    <img src='./vloggergear.jpg' alt='' />
                </Slide>
            </Slider>
        </CarouselProvider>
        {/* <Carousel >
            <div>
                <img src='./luggage.jpg' alt='' />
            </div>
            <div>
                <img src='./m04.jpg' alt='' />
            </div>
            <div>
                <img src='./vloggergear.jpg' alt='' />
            </div>
        </Carousel> */}
    </>
}

export default BannerComponent;