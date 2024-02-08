import InputField from "./inputfield"

const Hero = () => {
    return (
        <div className="hero ps-32 pt-12 bg-blue-500 rounded-bl-[72px] rounded-br-[72px] flex flex-row justify-between items-center">
            <div className="flex flex-col">
                <h1 className="text-white -mt-20 text-[32px] font-semibold font-['Open Sans'] leading-10">
                    <span className="text-white text-2xl font-bold font-['Open Sans'] leading-10">
                        #KawanSetiaPerjalananmu<br/>
                    </span>
                    
                    <span className="text-[44px] font-bold font-['Open Sans'] leading-10">
                        Pesan Tiket Pesawat Jadi Lebih <br/> 
                    </span>
                    <span className="text-yellow-300 text-[44px] font-bold font-['Open Sans'] leading-10">
                        Menyenangkan
                    </span>
                </h1>
            </div>

            <img src="/src/assets/plane.png" className="" alt="" />
        </div>   
    )
}

export default Hero