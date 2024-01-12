import { Link } from "react-router-dom"

const Navbar = () => {
  return (
    <div className="navbar flex  shadow items-center p-3 relative  min-h-max ">
        <div className="flex justify-around md:justify-between ms-5">
            <img src="/src/assets/logo.png" alt="logo"/>
        </div>

        <div className="flex justify-end w-5/6">

        <Link to="/register">
            <button 
              className="w-[204px] h-[51.50px] px-[28.50px] py-[13.75px] bg-amber-500 rounded-[27.51px] justify-center items-center gap-1 inline-flex">
                <div className="text-white text-sm font-bold font-['Open Sans'] leading-snug">Customer Service</div>
              </button>
        </Link>
        
        <Link to="/login">
            <button 
              className="w-[103px] h-[49.50px] px-[28.50px] py-[13.75px] bg-white rounded-[27.51px] justify-center items-center gap-1 inline-flex">
                <div className="text-blue-500 text-sm font-bold font-['Open Sans'] leading-snug">Masuk</div>
              </button>
        </Link>

        <Link to="/register">
            <button 
              className="w-[101px] h-[49.50px] px-[8.50px] py-[13.75px] bg-blue-500 rounded-[27.51px] justify-center items-center gap-1 inline-flex">
                <div className="text-white text-sm font-bold font-['Open Sans'] leading-snug">Daftar</div>
              </button>
        </Link>

        </div>
    </div>
  )
}

export default Navbar