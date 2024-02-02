import React from "react";

const HistoryCardOrange = () => {
  return (
    <div className="flex flex-col gap-2 p-8">
      <div className="flex justify-center items-center p-4 w-[95px] h-[36px] bg-[#FFD788] rounded-full">
        <p className="font-sans text-[#F96D01] font-semibold text-xl leading-7">
          Pergi
        </p>
      </div>
      <div className="font-sans text-[#757575]">
        <h2 className="text-2xl font-bold leading-10">Senin, 7 Juli 2023</h2>
        <div className="flex items-center gap-4 text-[32px] font-bold text-[#505050]">
          Lion Air
          <div>
            <img src="https://i.ibb.co/YQMnThx/Lion-Air.png" alt="Lion-Air" />
          </div>
        </div>
        <h2 className="text-2xl font-bold leading-10">Ekonomi</h2>
      </div>
      <div className="flex gap-4 items-center">
        <div>
          <p className="font-sans text-[28px] font-bold leading-10 text-[#505050]">
            07:00
          </p>
          <p className="font-sans text-xl font-semibold leading-10 text-[#9E9E9E]">
            CGK
          </p>
        </div>
        <div className="flex flex-col items-center">
          <p className="font-sans text-[#9E9E9E] text-base font-semibold leading-6">
            2J 15m
          </p>
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="187"
              height="24"
              viewBox="0 0 187 24"
              fill="none"
            >
              <path
                d="M3.90454 11.6914H182.046"
                stroke="#C2C2C2"
                stroke-width="3"
              />
              <path
                d="M3.90454 11.6914H182.046"
                stroke="black"
                stroke-opacity="0.2"
                stroke-width="3"
              />
              <path
                d="M3.90454 11.6914H182.046"
                stroke="black"
                stroke-opacity="0.2"
                stroke-width="3"
              />
              <path
                d="M3.90454 11.6914H182.046"
                stroke="black"
                stroke-opacity="0.2"
                stroke-width="3"
              />
              <ellipse
                cx="3.90448"
                cy="11.6907"
                rx="3.90448"
                ry="3.82353"
                fill="#828282"
              />
              <ellipse
                cx="182.534"
                cy="11.6907"
                rx="3.90448"
                ry="3.82353"
                fill="#828282"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M93.6116 1.35052C93.432 0.667867 93.9469 0 94.6528 0C95.0213 0 95.3642 0.188432 95.5617 0.499479L101.423 9.72877L107.217 10.028C108.263 10.082 109.083 10.9456 109.083 11.9926C109.083 13.0791 108.202 13.9598 107.115 13.9598L101.423 13.9598L95.56 23.4873C95.3639 23.8059 95.0166 24 94.6425 24C93.9397 24 93.4251 23.3378 93.5987 22.6568L95.8154 13.9598L89.9297 13.9598L88.3516 17.4765C88.2377 17.7305 87.9852 17.894 87.7068 17.894C87.3164 17.894 87 17.5775 87 17.1872V6.33955C87 5.99215 87.2774 5.70829 87.6247 5.70028C87.8783 5.69443 88.1113 5.839 88.2187 6.06876L89.9297 9.72877L95.8154 9.72877L93.6116 1.35052Z"
                fill="#505050"
              />
            </svg>
          </span>
          <p className="font-sans text-[#9E9E9E] text-base font-semibold leading-6">
            Langsung
          </p>
        </div>
        <div>
          <p className="font-sans text-[28px] font-bold leading-10 text-[#505050]">
            08:35
          </p>
          <p className="font-sans text-xl font-semibold leading-10 text-[#9E9E9E]">
            DPS
          </p>
        </div>
      </div>
    </div>
  );
};

export default HistoryCardOrange;
