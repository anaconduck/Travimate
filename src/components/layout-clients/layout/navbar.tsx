import { Link, NavLink } from "react-router-dom"

const Navbar = () => {
  return (
    <div className="navbar flex flex-row py-4 justify-between items-center min-h-max px-32">
        <div className="flex justify-around md:justify-between">
          <NavLink to="/">
            <img src="/src/assets/logo.png" alt="logo"/>
          </NavLink>
        </div>

        <div className="flex flex-row gap-4">
          <NavLink to="/register">
              <button 
                className="w-[204px] h-[51.50px] px-[28.50px] py-[13.75px] bg-amber-500 rounded-[27.51px] justify-center items-center gap-1 inline-flex">
                  <div className="text-white text-sm font-bold font-['Open Sans'] leading-snug">Customer Service</div>
                </button>
          </NavLink>
          
          <NavLink to="/login">
              <button 
                className="w-[103px] h-[49.50px] px-[28.50px] py-[13.75px] bg-white rounded-[27.51px] justify-center items-center gap-1 inline-flex">
                  <div className="text-blue-500 text-sm font-bold font-['Open Sans'] leading-snug">Masuk</div>
                </button>
          </NavLink>

          <NavLink to="/register">
              <button 
                className="w-[101px] h-[49.50px] px-[8.50px] py-[13.75px] bg-blue-500 rounded-[27.51px] justify-center items-center gap-1 inline-flex">
                  <div className="text-white text-sm font-bold font-['Open Sans'] leading-snug">Daftar</div>
                </button>
          </NavLink>
        </div>
    </div>
  )
}

export default Navbar