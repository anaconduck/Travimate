import React from 'react'
import gbr from '../../assets/Group 70.png'

const PaymentAccepted = () => {
  return (
    <div className='bg-blue-100 min-h-screen w-full font-sans'>
      <div className='max-w-7xl mx-auto'>
        <div className='w-full bg-white h-max rounded-xl grid place-items-center'>
          <div className='grid place-items-center mx-96 my-16'>
            <div>
              <img src={gbr} />
            </div>
            <div className='text-slate-700 text-center'>
              <div className='font-bold text-lg mt-2'>Pembayaranmu telah kami terima!</div>
              <div className='mt-2'>Silahkan lihat  e-ticket kamu di halaman riwayat transaksi, semoga perjalananmu menyenangkan!</div>
            </div>
            <div className='p-2 mt-6 w-52 flex justify-center rounded-3xl bg-blue-600 text-white font-bold'>
              <button>Lihat Riwayat Transaksi</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PaymentAccepted