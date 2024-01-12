import Handshake from '../../assets/Handshake.png';
import Headphone from '../../assets/Headphone.png';
import Money from '../../assets/Money.png';
import Ellipse from '../../assets/Ellipse.svg';
import Emoticon from '../../assets/Emoticon.png';

export default function WhyUs() {
    return (
      <div className="container-lg mx-12 my-8">
        <div className="flex items-center gap-2 mb-5">
            <h2 className="text-3xl font-bold text-slate-600">Kenapa Harus Pesan Tiket Pesawat disini?</h2>
            <img src={Emoticon} alt="Handshake Illustration" />
        </div>
        <div className="flex justify-between gap-10">
            <div className="flex flex-col gap-4 px-7 pb-7 text-center w-1/3 bg-blue-500 rounded-3xl">
                <div className='flex justify-center'>
                    <img src={Ellipse} alt="Handshake Illustration" />
                </div>
                <div className='flex justify-center'>
                    <img src={Handshake} alt="Handshake Illustration" />
                </div>
                <div className="flex flex-col gap-2">
                    <p className="text-lg font-bold text-white">Transparansi dan Terpercaya</p>
                    <p className="text-sm font-normal text-white">Kami berkomitmen untuk memberikan informasi yang jelas dan akurat kepada Anda, mulai dari harga tiket, ketentuan maskapai, hingga kebijakan pembatalan.</p>
                </div>
            </div>
            <div className="flex flex-col gap-4 px-7 pb-7 text-center w-1/3 bg-blue-500 rounded-3xl">
                <div className='flex justify-center'>
                    <img src={Ellipse} alt="Handshake Illustration" />
                </div>
                <div className='flex justify-center'>
                    <img src={Headphone} alt="Headphone Illustration" />
                </div>
                <div className="flex flex-col gap-2">
                    <p className="text-lg font-bold text-white">Pelayanan yang Responsif dan Akurat</p>
                    <p className="text-sm font-normal text-white">Kami selalu siap membantu Anda jika Anda memiliki pertanyaan atau masalah selama proses pemesanan.</p>
                </div>
            </div>
            <div className="flex flex-col gap-4 pb-7 px-2 text-center w-1/3 bg-blue-500 rounded-3xl">
            <div className='flex justify-center'>
                    <img src={Ellipse} alt="Handshake Illustration" />
                </div>
                <div className='flex justify-center'>
                    <img src={Money} alt="Money Illustration" />
                </div>
                <div className="flex flex-col gap-2">
                    <p className="text-lg font-bold text-white">Pencarian Tiket dengan Harga Terjangkau</p>
                    <p className="text-sm font-normal text-white">Kami menawarkan berbagai pilihan tiket pesawat dengan harga terjangkau dari berbagai maskapai.</p>
                </div>
            </div>
        </div>
    </div>
    )
}