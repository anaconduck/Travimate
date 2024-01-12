
const Hero = () => {
    return (
        <div className="hero bg-blue-500 rounded-bl-[72px] rounded-br-[72px] grid grid-cols-2 items-center">
            <div className="flex flex-col  ml-[50px]">
                <h1 className="text-white text-[32px] font-semibold font-['Open Sans'] leading-10">
                    <span className="text-white text-2xl font-bold font-['Open Sans'] leading-10">
                        #KawanSetiaPerjalananmu<br/>
                    </span>
                    
                    Pesan Tiket Pesawat Jadi Lebih <br/> 
                    
                    <span className="text-yellow-300 text-[32px] font-bold font-['Open Sans'] leading-10">
                        Menyenangkan
                    </span>
                </h1>
            </div>
            
            <img src="/src/assets/plane.png" alt="" />
        </div>   
    )
}

export default Hero