import React from "react";
import { Link } from "react-router-dom";

const FormCreateAccount = ({ input, nextStep, handleInput }) => {
    return (
        <div className="flex justify-center lg:items-center min-h-screen lg:min-h-screen lg:w-2/5 p-8">
            <div className="max-w-md w-full bg-white p-8 rounded-[27px] shadow-md">
                <h2 className="font-[Open Sans] text-[32px] font-bold text-[#505050]">Buat Akun</h2>
                <form className="flex flex-col gap-8 my-8">
                    <div className="flex flex-col gap-2">
                        <label className="font-[Open Sans] text-xl font-semibold text-[#505050]">Nama Lengkap</label>
                        <input
                            value={input.username}
                            onChange={handleInput}
                            name="username"
                            type="text"
                            className="h-[57px] rounded-full bg-gray-100 focus:outline-none p-6"
                        />
                        <p className="font-[Open Sans] text-base font-semibold text-[#9E9E9E]">Seperti di KTP, Paspor, dan SIM</p>
                    </div>
                    <div className="flex flex-col gap-2">
                        <label className="font-[Open Sans] text-xl font-semibold text-[#505050]">Email/No. Handphone</label>
                        <input
                            value={input.email}
                            onChange={handleInput}
                            name="email"
                            type="email"
                            className="h-[57px] rounded-full bg-gray-100 focus:outline-none p-6"
                        />
                    </div>
                    <div className="flex flex-col gap-2">
                        <label className="font-[Open Sans] text-xl font-semibold text-[#505050]">Kata Sandi</label>
                        <input
                            value={input.password}
                            onChange={handleInput}
                            name="password"
                            type="password"
                            className="h-[57px] rounded-full bg-gray-100 focus:outline-none p-6"
                        />
                    </div>
                    <button
                        type="button"
                        onClick={nextStep}
                        className="h-[57px] rounded-full bg-blue-500 text-white font-bold font-[Open Sans] text-xl"
                    >
                        Daftar
                    </button>
                </form>
                <div className="flex flex-col items-center gap-8">
                    <hr className="w-full border-1" />
                    <button className="w-full h-[57px] border-blue-500 border-2 rounded-full flex justify-center items-center gap-3 font-[Open Sans] text-xl font-bold text-blue-500">
                        <img src="https://i.ibb.co/PFChkDC/google.png" alt="Logo Google" />
                        Masuk dengan Google
                    </button>
                    <p className="font-[Open Sans] text-center text-sm font-normal leading-5 tracking-wide text-[#505050]">
                        Dengan membuat akun kamu menyetujui <Link to="/" className="text-blue-500">Syarat & Ketentuan</Link> dan{" "}
                        <Link to="/" className="text-blue-500">Kebijakan Privasi</Link> kami
                    </p>
                    <p className="font-[Open Sans] font-base font-semibold text-[#505050]">
                        Sudah terdaftar? <Link to="/login" className="text-blue-500">Masuk</Link>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default FormCreateAccount;
