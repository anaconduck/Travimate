import Smile from '../../assets/Smile.png'

const WebSlider = () => {
    return (
        <section className='web-slider px-32 mx-auto my-16'>
            <div className="flex items-center gap-2 mb-5">
                <h2 className="text-[32px] font-bold text-slate-600 font-['Open Sans']">Yuk, Cek Penawaran Terbaik Kami Sebelum Berangkat!</h2>
                <img src={Smile} alt="Emoticon Illustration" />
            </div>
            <div className="flex justify-between">
                Slider
            </div>
        </section>
    );
}

export default WebSlider;
