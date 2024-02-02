import React, { useState } from "react";
import {
  BsFillArrowRightCircleFill,
  BsFillArrowLeftCircleFill,
} from "react-icons/bs";
import Smile from '../../assets/Smile.png'

interface CarouselProps {
  slides: string[];
}

const WebSlider:  React.FC<CarouselProps> = ({ slides }) => {

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
        <div className="flex items-center gap-2 mb-5">
            <h2 className="text-[32px] font-bold text-slate-600 font-['Open Sans']">Yuk, Cek Penawaran Terbaik Kami Sebelum Berangkat!</h2>
            <img src={Smile} alt="Emoticon Illustration" />
        </div>

        <div
          className={`flex transition ease-out duration-40`}
          style={{ transform: `translateX(-${current * 100}%)` }}
        >
          {slides.map((s) => (
            <img key={s} src={s} />
          ))}
        </div>

        <div className="absolute top-0 h-full w-full justify-between items-center flex text-white px-10 text-3xl">
            <button onClick={previousSlide}>
            <BsFillArrowLeftCircleFill />
            </button>
            <button onClick={nextSlide}>
            <BsFillArrowRightCircleFill />
            </button>
        </div>

        <div className="absolute bottom-0 py-4 flex justify-center gap-3 w-full">
            {slides.map((s, i) => {
            return (
                <div
                onClick={() => {
                    setCurrent(i);
                }}
                key={"circle" + i}
                className={`rounded-full w-5 h-5 cursor-pointer  ${
                    i == current ? "bg-white" : "bg-gray-500"
                }`}
                ></div>
            );
            })}
        </div>
      </div>
    );
}

export default WebSlider;
