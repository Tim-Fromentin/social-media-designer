import SliderModule from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import JsxParser from "react-jsx-parser";

const StarIcon = (props: any) => <Star {...props} />;

const Slider = (SliderModule as any).default || SliderModule;

export interface SliderItem {
  name: string;
  code: string;
}

interface SimpleSliderProps {
  sliders: SliderItem[];
  slideIndex: number;
  setSlideIndex: (arg0: number) => void;
  setOpen: (arg0: boolean) => void;
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

function SimpleSlider({
  sliders = [],
  setSlideIndex,
  setOpen,
}: SimpleSliderProps) {
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

  const handleSelect = (index: number) => {
    setSlideIndex(index);
    setOpen(false);
  };

  return (
    <div className="slider-container relative px-10 w-full mx-auto">
      <Slider {...settings}>
        {sliders.map((item, index) => (
          <div key={item.name || index}>
            <div className="h-100 w-full bg-indigo-600 rounded-lg p-7 flex! justify-center items-center">
              <JsxParser components={{ Star: StarIcon }} jsx={item.code} />
            </div>
            <button
              type="button"
              className="relative mx-auto my-5 flex items-center gap-2 text-white bg-primary-900 rounded-lg box-border border border-transparent hover:bg-brand-strong focus:ring-4 focus:ring-brand-medium shadow-xs font-medium leading-5 rounded-base text-sm px-4 py-2.5 focus:outline-none cursor-pointer"
              onClick={() => handleSelect(index)}
            >
              Choisir ce design
            </button>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default SimpleSlider;
