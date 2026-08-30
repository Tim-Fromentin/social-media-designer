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

        <div>
          <div className="h-100 w-full bg-indigo-600 rounded-lg p-7 flex! justify-center items-center">
            <div className="max-w-lg w-full h-52 bg-white rounded-sm p-4 relative overflow-hidden">
              <img
                src="https://img.magnific.com/free-photo/attractive-blond-male-dressed-suit-dark-grey-background_613910-14130.jpg?semt=ais_hybrid&w=740&q=80"
                className="absolute inset-0 w-[30%] rounded-sm h-full object-cover"
                alt="Portrait"
              />

              <div className="pl-[35%] flex flex-col gap-3 justify-between h-full">
                <div className="">
                  <div className="flex gap-1 mb-3">
                    <Star className={"w-4 h-4 fill-amber-400 text-amber-400"} />
                    <Star className={"w-4 h-4 fill-amber-400 text-amber-400"} />
                    <Star className={"w-4 h-4 fill-amber-400 text-amber-400"} />
                    <Star className={"w-4 h-4 fill-amber-400 text-amber-400"} />
                    <Star className={"w-4 h-4 fill-amber-400 text-amber-400"} />
                  </div>
                  <p className="text-zinc-900">"Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Recusandae pariatur enim perspiciatis minima dignissimos
                    nobis."
                  </p>
                </div>
                <p className="text-gray-500 font-semibold">John Doe</p>
              </div>
            </div>
          </div>
          <button
            type="button"
            className="relative mx-auto my-5 flex items-center gap-2 text-white bg-primary-900 rounded-lg box-border border border-transparent hover:bg-brand-strong focus:ring-4 focus:ring-brand-medium shadow-xs font-medium leading-5 rounded-base text-sm px-4 py-2.5 focus:outline-none cursor-pointer"
          >
            Choisir ce design
          </button>
        </div>
      </Slider>
    </div>
  );
}

export default SimpleSlider;
