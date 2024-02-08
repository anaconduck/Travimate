import { IoSearch } from "react-icons/io5";
import { FaArrowRightArrowLeft } from "react-icons/fa6";

const InputField = () => {
  return (
    <div className='main-container relative'>
      <div className="flex justify-center ">
        <div className="form-input p-6 flex w-[95%] shadow rounded-[50px] relative translate-y-[-40%] bg-white">
          <form className="flex w-full gap-x-3">

            <div className="w-full md:w-[30%]  mb-6 md:mb-0">
              <div className="relative inputText">
                <label className="pb-1 px-2">Dari</label>
                <input
                  type="text"
                  id="text"
                  className="form-control block appearance-none w-full text-gray-700 py-3 px-2 pr-6 rounded-[10px] leading-tight focus:outline-none focus:bg-white border-none"
                  placeholder="Negara, Kota, atau Bandara"
                  required
                />
              </div>
            </div>

            <div className="mt-8 bg-amber-500 text-white font-bold rounded-full w-[50px] h-8 flex items-center justify-center">
              <FaArrowRightArrowLeft />
            </div>

            <div className="w-full md:w-[30%]  mb-6 md:mb-0">
              <div className="relative inputText">
                <label className="pb-1 px-2">Ke</label>
                <input
                  type="text"
                  id="text"
                  className="form-control block appearance-none w-full text-gray-700 py-3 px-2 pr-6 rounded-[10px] leading-tight focus:outline-none focus:bg-white border-none"
                  placeholder="Negara, Kota, atau Bandara"
                  required
                />
              </div>
            </div>

            <div className="w-full md:w-[15%]  mb-6 md:mb-0">
              <div className="relative inputDate">
                <label className="pb-1 px-1">Berangkat</label>
                <input
                  type="date"
                  id="date"
                  className="form-control block appearance-none w-full text-gray-700 py-3 px-1 pr-6 rounded-[10px] leading-tight focus:outline-none focus:bg-white border-none"
                  placeholder="Pilih Tanggal"
                  required
                />
              </div>
            </div>

            <div className="w-full md:w-[15%]  mb-6 md:mb-0">
              <div className="relative inputDate">
                <label className="pb-1 px-1">Pulang</label>
                <input
                  type="date"
                  id="date"
                  className="form-control block appearance-none w-full text-gray-700 py-3 px-1 pr-6 rounded-[10px] leading-tight focus:outline-none focus:bg-white border-none"
                  placeholder="Pilih Tanggal"
                  required
                />
              </div>
            </div>

            <div className="w-full md:w-1/3 mb-6 md:mb-0">
              <div className="relative inputTime">
                <label className="pb-1 px-2">Penumpang dan Kelas Kabin</label>
                <select
                  className="form-select block appearance-none w-full text-gray-700 py-3 px-2 pr-6 rounded-[10px] leading-tight focus:outline-none focus:bg-white border-none"
                  id="time"
                  aria-label="Default select example"
                  required
                >
                  <option hidden>Pilih</option>
                  <option value="01:00:00">1 Dewasa, Ekonomi</option>
                  {/* <option value="02:00:00">09.00 WIB</option>
                  <option value="03:00:00">10.00 WIB</option>
                  <option value="04:00:00">11.00 WIB</option>
                  <option value="05:00:00">12.00 WIB</option> */}
                </select>
              </div>
            </div>
            
            <div className="flex items-end">
              <button className="bg-blue-500 hover:bg-white text-white font-bold hover:text-blue-500 border border-blue-500 hover:border-blue-500 rounded-full w-[40px] h-10 text-xl flex items-center justify-center">
                <IoSearch />
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default InputField