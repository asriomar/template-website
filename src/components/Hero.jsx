import { useEffect, useRef } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function Hero() {
  const sliderRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      if (sliderRef.current) {
        sliderRef.current.slickNext();
      }
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false, // Set autoplay to false here
    autoplaySpeed: 2000
  };

  return (
    <div className="bg-gray-800 font-mono">
      <Slider {...settings} className="center" ref={sliderRef}>
        <div className="flex justify-center">
          <img src="https://via.placeholder.com/1200x400" alt="Slide 1" className="max-w-full max-h-full mx-auto" />
        </div>
        <div className="flex justify-center">
          <img src="https://via.placeholder.com/1200x400" alt="Slide 2" className="max-w-full max-h-full mx-auto" />
        </div>
        <div className="flex justify-center">
          <img src="https://via.placeholder.com/1200x400" alt="Slide 3" className="max-w-full max-h-full mx-auto" />
        </div>
        {/* Add more slides as needed */}
      </Slider>
    </div>
  );
}

export default Hero;
