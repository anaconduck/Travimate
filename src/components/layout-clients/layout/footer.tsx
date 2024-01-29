const Footer = () => {
  return (
    <div className="w-full h-[400px] relative">
            <div className="w-full h-full left-0 top-0 absolute bg-blue-500" />
            
            <div className="w-[348px] left-[48px] top-[158px] absolute text-white text-xl font-semibold font-['Open Sans'] leading-7">Kami sahabat setia dalam setiap langkah petualangan.</div>
            <div className="w-[138px] left-[1016px] top-[203px] absolute text-white text-xl font-semibold font-['Open Sans'] leading-7">Unduh aplikasi</div>
          
            <div className="w-[263px] h-[35px] left-[930px] top-[325.30px] absolute justify-start items-center gap-3 inline-flex">
                <img className="w-[35px] h-[35px] relative" src="/src/assets/ig.png" />
                <img className="w-[35px] h-[35px] relative" src="/src/assets/fb.png" />
                <img className="w-[35px] h-[35px] relative" src="/src/assets/tw.png" />
                <img className="w-[35px] h-[35px] relative" src="/src/assets/yt.png" />
                <img className="w-[35px] h-[35px] relative" src="/src/assets/ig.png" />
            </div>

            <div className="w-[252px] h-6 left-[44px] top-[343px] absolute justify-start items-start inline-flex">
                <div className="text-white text-xs font-semibold font-['Open Sans'] leading-snug">2024 Travimate. All Rights Reserved.</div>
            </div>

            <div className="w-[391px] h-6 left-[48px] top-[246px] absolute justify-start items-start gap-4 inline-flex">
                <div className="text-white text-base font-semibold font-['Open Sans'] leading-normal">Tentang Kami</div>
                <div className="text-white text-base font-semibold font-['Open Sans'] leading-normal">Cara Pesan</div>
                <div className="text-white text-base font-semibold font-['Open Sans'] leading-normal">Pusat Bantuan</div>
                <div className="text-white text-base font-semibold font-['Open Sans'] leading-normal">Karir</div>
            </div>

            <img className="w-[180px] h-[54.30px] left-[973px] top-[239px] absolute" src="https://i.ibb.co/rHMRV5j/Google-Playstore.png" />
            <img className="w-[700px] h-[250px] left-[500px] top-[60px] absolute" src="/src/assets/tes.png" />

            <div className="w-[164px] h-6 left-[48px] top-[118px] absolute justify-center items-center inline-flex">
                <div className="w-[163.63px] h-6 relative">
                <img src="https://i.ibb.co/WxQ3wSM/logo.png" alt="logo" />
                </div>
            </div>
        </div>
  )
}

export default Footer