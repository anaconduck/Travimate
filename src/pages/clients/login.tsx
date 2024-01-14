import React from "react";
import { Link } from "react-router-dom";

const LoginClient = () => {
    return (
        <section className="login flex">
            {/* Gambar di sisi kiri */}
            <div className="w-3/5 bg-blue-500 flex justify-center relative">
                <h2 className="font-[Open Sans] text-[32px] font-bold text-white absolute top-48">Pulang Kampung Tanpa Hambatan.</h2>
                <img src="https://i.ibb.co/ftcDBrk/Group.png" className="w-screen" alt="Background" />
            </div>

            {/* Form login di sisi kanan */}
            <div className="flex justify-center items-center w-2/5 bg-sky-100">
                <div className="bg-white rounded-[27px] w-[420px] p-8 shadow-lg">
                    <h2 className="font-[Open Sans] text-[32px] font-bold text-[#505050]">Masuk ke Akunmu</h2>
                    <form className="flex flex-col gap-8 my-8">
                        <div className="flex flex-col gap-2">
                            <label className="font-[Open Sans] text-xl font-semibold text-[#505050]">Email/No. Handphone</label>
                            <input type="text" className="h-[57px] rounded-full bg-gray-100 focus:outline-none p-6" />
                        </div>
                        <div className="flex flex-col gap-2">
                            <label className="font-[Open Sans] text-xl font-semibold text-[#505050]">Kata Sandi</label>
                            <input type="password" name="password" className="h-[57px] rounded-full bg-gray-100 focus:outline-none p-6" />
                            <a href="/" className="font-[Open Sans] text-base font-semibold text-blue-500">Lupa kata sandi?</a>
                        </div>
                        <button type="submit" className="h-[57px] rounded-full bg-blue-500 text-white font-bold font-[Open Sans] text-xl">Masuk</button>
                    </form>
                    <div className="flex flex-col items-center gap-8">
                        <hr className="w-full border-1" />
                        <button className="w-full h-[57px] border-blue-500 border-2 rounded-full flex justify-center items-center gap-3 font-[Open Sans] text-xl font-bold text-blue-500">
                            <img src="https://i.ibb.co/PFChkDC/google.png" alt="Logo Google" />
                            Masuk dengan Google
                        </button>
                        <p className="font-[Open Sans] text-center text-sm font-normal leading-5 tracking-wide text-[#505050]">
                            Dengan masuk akun kamu menyetujui <Link to="/" className="text-blue-500">Syarat & Ketentuan</Link> dan <Link to="/" className="text-blue-500">Kebijakan Privasi</Link> kami
                        </p>
                        <p className="font-[Open Sans] font-base font-semibold text-[#505050]">
                            Belum punya akun? <Link to="/register" className="text-blue-500">Daftar</Link>
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default LoginClient;