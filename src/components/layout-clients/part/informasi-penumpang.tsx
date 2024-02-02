import React from 'react'

const InformasiPenumpang = () => {
  return (
    <div className="flex justify-between">
      <div className="flex flex-col gap-4 font-sans">
        <h1 className="text-[#505050] text-2xl font-bold leading-10">
          1. Tuan Don Norman
        </h1>
        <div className="flex gap-2">
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="40"
              height="40"
              viewBox="0 0 40 40"
              fill="none"
            >
              <path
                d="M15 7.5V10H25V7.5C25 7.225 24.775 7 24.5 7H15.5C15.225 7 15 7.225 15 7.5ZM12 10V7.5C12 5.56875 13.5688 4 15.5 4H24.5C26.4312 4 28 5.56875 28 7.5V10V12V34H12V12V10ZM8 10H10V34H8C5.79375 34 4 32.2062 4 30V14C4 11.7937 5.79375 10 8 10ZM32 34H30V10H32C34.2062 10 36 11.7937 36 14V30C36 32.2062 34.2062 34 32 34Z"
                fill="#757575"
              />
            </svg>
          </span>
          <div>
            <p className="text-2xl font-bold leading-10 text-[#757575]">
              Bagasi Kabin 7 Kg
            </p>
            <p className="text-base font-medium leading-7 text-[#757575]">
              *dengan dimensi spesifik yang tunduk pada kebijakan maskapai
            </p>
          </div>
        </div>
        <div className="flex gap-2">
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="40"
              height="40"
              viewBox="0 0 40 40"
              fill="none"
            >
              <path
                d="M17 7.5C17 7.225 17.225 7 17.5 7H22.5C22.775 7 23 7.225 23 7.5V12H17V7.5ZM28 12H26V7.5C26 5.56875 24.4312 4 22.5 4H17.5C15.5687 4 14 5.56875 14 7.5V12H12C9.79375 12 8 13.7937 8 16V30C8 32.2062 9.79375 34 12 34C12 35.1063 12.8938 36 14 36C15.1062 36 16 35.1063 16 34H24C24 35.1063 24.8937 36 26 36C27.1063 36 28 35.1063 28 34C30.2062 34 32 32.2062 32 30V16C32 13.7937 30.2062 12 28 12ZM15 18H25C25.55 18 26 18.45 26 19C26 19.55 25.55 20 25 20H15C14.45 20 14 19.55 14 19C14 18.45 14.45 18 15 18ZM15 26H25C25.55 26 26 26.45 26 27C26 27.55 25.55 28 25 28H15C14.45 28 14 27.55 14 27C14 26.45 14.45 26 15 26Z"
                fill="#757575"
              />
            </svg>
          </span>
          <p className="text-2xl font-bold leading-10 text-[#757575]">
            Bagasi Kabin 20 Kg
          </p>
        </div>
      </div>
      <div className="flex justify-center items-center p-4 w-[95px] h-[36px] bg-[#EDEDED] rounded-full">
        <p className="font-sans text-[#757575] font-semibold text-xl leading-7">
          Dewasa
        </p>
      </div>
    </div>
  );
}

export default InformasiPenumpang;