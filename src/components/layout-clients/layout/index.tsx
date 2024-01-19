import React, { useEffect, useState } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Navbar from "./navbar";

interface ILayoutClient {
  children: React.ReactNode;
}

const LayoutClient = ({ children }: ILayoutClient) => {


  const { hash } = useLocation();
  const isActive = (iHash) => hash === iHash;

  const [toggle, setToggle] = useState(false);
  const [navbar, setNavbar] = useState(true);

  const changeBackground = () => {
    if (window.scrollY > 0) {
      setNavbar(false);
    } else {
      setNavbar(true);
    }
  };

  window.addEventListener("scroll", changeBackground);

  const HANDLETOGGLE = () => {
    setToggle(!toggle);
  };

  useEffect(() => {
    setNavbar(true);
  }, []);

  return (
    <div>
        <nav
          className={`${
            navbar
              ? "bg-blue-500 transition ease-in-out duration-300"
              : "transition ease-in-out duration-300 bg-blue-300 text-white border-b border-b-slate-700 bg-opacity-40 backdrop-blur-md"
          } active px-2 sm:px-4 py-0.5 fixed w-full z-20 top-0 left-0`}>
          <Navbar/>
        </nav>
        {/* Anda dapat memasukkan children langsung */}
        <div className="mt-20">
          {children}
        </div>
        {/* Atau Anda dapat menggunakan Outlet untuk menangani rute bersarang jika diperlukan */}
        <Outlet />
    </div>
  );
};

export default LayoutClient;
