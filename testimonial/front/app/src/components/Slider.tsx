import SliderModule from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ChevronLeft, ChevronRight } from "lucide-react";

const Slider = (SliderModule as any).default || SliderModule;
export interface SliderItem {
  name: string;
  code: string;
}

interface SimpleSliderProps {
  sliders: SliderItem[];
}

function SamplePrevArrow(props: any) {
  const { onClick } = props;
  return (
    <button
      onClick={onClick}
      className="absolute left-2 top-1/2 -translate-y-1/2 z-20 bg-white/80 hover:bg-white text-gray-800 p-2 rounded-full shadow-md border transition"
    >
      <ChevronLeft className="w-6 h-6" />
    </button>
  );
}

function SampleNextArrow(props: any) {
  const { onClick } = props;
  return (
    <button
      onClick={onClick}
      className="absolute right-2 top-1/2 -translate-y-1/2 z-20 bg-white/80 hover:bg-white text-gray-800 p-2 rounded-full shadow-md border transition"
    >
      <ChevronRight className="w-6 h-6" />
    </button>
  );
}

function SimpleSlider({ sliders = [] }: SimpleSliderProps) {
  const settings = {
    dots: true,
    infinite: sliders.length > 1,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: sliders.length > 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  return (
    <div className="slider-container relative px-10 max-w-2xl mx-auto">
      <Slider {...settings}>
        {sliders.map((item, index) => (
          <div key={item.name || index}>
            <div className="h-full min-h-80 w-full bg-indigo-600 rounded-lg p-7 flex! justify-center items-center">
              {item.code}
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default SimpleSlider;
