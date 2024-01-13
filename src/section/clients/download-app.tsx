import { Link } from "react-router-dom";
import Mockup from "../../assets/Mockup.png";
import Cloud from "../../assets/Cloud.png";

const DownloadApp = () => {
    return (
        <section className="download-app bg-blue-700 my-16 relative h-[608px]">
            <img src={Cloud} className="absolute bottom-0" alt="Image Cloud" />
            <div className="container mx-auto flex">
                <div className="w-1/2 h-[608px] flex flex-col justify-center">
                    <div className="w-[496px] mt-20 mx-4">
                        <div className="flex justify-center items-center p-2 bg-orange-500 rounded-2xl mb-4">
                            <p className="text-white font-bold text-[32px] font-['Open Sans']">Kamu sudah siap berangkat?</p>
                        </div>
                        <p className="text-white font-bold text-[32px] leading-10 font-['Open Sans']">Download aplikasi travimate di playstore sekarang!</p>
                        <Link to="/download" className="flex justify-center items-center font-bold font-['Open Sans'] text-xl text-blue-500 bg-white p-3.5 rounded-full w-[288px] mt-8">
                            Download
                        </Link>
                    </div>
                </div>
                <div className="w-1/2">
                    <img src={Mockup} className="absolute end-0 bottom-0" alt="Mockup Travimate" />
                </div>
            </div>
        </section>
    );
};

export default DownloadApp;