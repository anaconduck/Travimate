import React, { useState } from "react";
import { 
  IoIosArrowDropleftCircle,
  IoIosArrowDroprightCircle,
} from "react-icons/io";
import Smile from '../../assets/Smile.png'

interface CarouselProps {
  slides: string[];
}

const WebSlider:React.FC<CarouselProps> = ({ slides }) => {

    const [current, setCurrent] = useState<number>(0);

    const previousSlide = () => {
        if (current === 0) {
        setCurrent(slides.length - 1);
        } else {
        setCurrent(current - 1);
        }
    };

    const nextSlide = () => {
        if (current === slides.length - 1) {
        setCurrent(0);
        } else {
        setCurrent(current + 1);
        }
    };

    return (
        <div className="overflow-hidden relative">
          {/* Text */}
          <div className="flex items-center gap-2 mb-5">
              <h2 className="text-[32px] font-bold text-slate-600 font-['Open Sans']">Yuk, Cek Penawaran Terbaik Kami Sebelum Berangkat!</h2>
              <img src={Smile} alt="Emoticon Illustration" />
          </div>

          {/* Image Slider */}
          <div
            className="flex transition ease-out h-[20rem] w-full duration-40"
            style={{ transform: `translateX(-${current * 100}%)` }}
          >
            {slides.map((s, index) => (
              <img key={index} className="rounded-[40px] w-full" src={s} />
            ))}
          </div>

          {/* Buttons */}
          <div className="absolute top-5 h-full w-full justify-between items-center flex text-amber-400 px-1 text-7xl">
              <button onClick={previousSlide}>
              <IoIosArrowDropleftCircle />
              </button>
              <button onClick={nextSlide}>
              <IoIosArrowDroprightCircle />
              </button>
          </div>
      </div>
    );
}

export default WebSlider;
