import React from "react";
import { Outlet } from "react-router-dom";

interface ILayoutAdmin {
  children: React.ReactNode;
}

const LayoutAdmin = ({ children }: ILayoutAdmin) => {
  return (
    <div>
      {/* Anda dapat memasukkan children langsung */}
      {children}
      {/* Atau Anda dapat menggunakan Outlet untuk menangani rute bersarang jika diperlukan */}
      <Outlet />
    </div>
  );
};

export default LayoutAdmin;
