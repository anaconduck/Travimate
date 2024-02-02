const Footer = () => {
  return (
    <div className="w-full min-h-[24rem] px-12 md:px-32 py-12 flex flex-col md:flex-row justify-between items-center bg-[url('/src/assets/tes.png')] bg-cover bg-end">
        <div className="w-full md:w-[60%] h-[12rem] flex flex-col justify-between">
            <div className="flex flex-col gap-1">
                <div className="w-[12rem] my-1">
                    <img src="https://i.ibb.co/WxQ3wSM/logo.png" className="w-full h-full" alt="logo" />
                </div>
                <div className="text-white text-xl font-semibold font-['Open Sans'] leading-7">Kami sahabat setia dalam setiap langkah petualangan.</div>
            
                <div className="items-end">
                    <div className="text-white text-lg font-normal font-['Open Sans'] leading-snug">2024 Travimate. All Rights Reserved.</div>
                </div>
            </div>

            <div className="flex flex-wrap md:flex-row gap-2">
                <div className="text-white text-base font-semibold font-['Open Sans'] leading-normal">Tentang Kami</div>
                <div className="text-white text-base font-semibold font-['Open Sans'] leading-normal">Cara Pesan</div>
                <div className="text-white text-base font-semibold font-['Open Sans'] leading-normal">Pusat Bantuan</div>
                <div className="text-white text-base font-semibold font-['Open Sans'] leading-normal">Karir</div>
            </div>
        </div>
            

        <div className="w-full md:w-[40%] flex flex-col justify-end h-[12rem]">
            <div className="flex flex-col gap-2 justify-end items-start md:items-end">
                <div className="text-white text-xl font-semibold font-['Open Sans'] leading-7">Unduh aplikasi</div>
                <div className="w-[8rem] md:w-[12rem] md:my-2">
                    <img className="z-10" src="https://i.ibb.co/rHMRV5j/Google-Playstore.png" />
                </div>
                <div className="flex flex-row gap-2">
                    <img className="w-[24px] h-[24px] md:w-[35px] md:h-[35px]" src="/src/assets/ig.png" />
                    <img className="w-[24px] h-[24px] md:w-[35px] md:h-[35px]" src="/src/assets/fb.png" />
                    <img className="w-[24px] h-[24px] md:w-[35px] md:h-[35px]" src="/src/assets/tw.png" />
                    <img className="w-[24px] h-[24px] md:w-[35px] md:h-[35px]" src="/src/assets/yt.png" />
                    <img className="w-[24px] h-[24px] md:w-[35px] md:h-[35px]" src="/src/assets/ig.png" />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer