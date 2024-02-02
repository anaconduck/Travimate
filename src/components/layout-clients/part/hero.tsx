
const Hero = () => {
    return (
        <div className="hero px-12 md:px-12 xl:px-32 h-[40rem] md:h-[40rem] bg-[url('/src/assets/plane.png')] bg-no-repeat bg-fixed md:bg-[url('')] md:relative pt-12 bg-blue-500 rounded-bl-[72px] rounded-br-[72px] flex flex-row justify-between items-center">
            <div className="flex flex-col justify-end h-[30rem] md:h-0">
                <div className="text-white md:-mt-20 text-[32px] font-semibold font-['Open Sans'] leading-10">
                    <span className="text-white text-lg md:text-xl lg:text-2xl font-bold font-['Open Sans'] leading-10">
                        #KawanSetiaPerjalananmu<br/>
                    </span>
                    
                    <div className="text-[1.7rem] md:text-4xl xl:text-4xl">
                        <p className=" font-bold font-['Open Sans'] leading-10">
                            Pesan Tiket Pesawat Jadi Lebih <br/> 
                        </p>
                        <p className="text-yellow-300 font-bold font-['Open Sans'] leading-10 -mt-2 md:mt-1">
                            Menyenangkan
                        </p>
                    </div>
                </div>
            </div>
            
            <div className="w-[60%] xl:w-[40%] h-[80%] md:h-[100%] hidden md:block md:absolute top-12 right-0">
                <img src="/src/assets/plane.png" className="w-full h-full" alt="" />
            </div>
            
        </div>   
    )
}

export default Hero