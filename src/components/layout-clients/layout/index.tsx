import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./navbar";

interface ILayoutClient {
  children: React.ReactNode;
}

const LayoutClient = ({ children }: ILayoutClient) => {
  return (
    <div>
        <Navbar/>
        {/* Anda dapat memasukkan children langsung */}
        {children}
        {/* Atau Anda dapat menggunakan Outlet untuk menangani rute bersarang jika diperlukan */}
        <Outlet />
    </div>
  );
};

export default LayoutClient;
