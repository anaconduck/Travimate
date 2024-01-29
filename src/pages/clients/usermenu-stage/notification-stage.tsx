import React from 'react'
import { HistoryIllustration, NotifIllustration } from '../../../assets/ilustrations'
import EmptyState from '../../../components/layout-clients/empty-state/empty-state'
import { GoArrowSwitch } from 'react-icons/go'

interface INotificationStage {
    setNotification: (state:string) => void
    notification: string
}

const NotificationStage = ({setNotification, notification}: INotificationStage) => {
  return (
    <div className='flex flex-col gap-4'>
      <div className='bg-white p-8 w-full rounded-[27.51px]'>
        <h2 className='font-bold text-lg text-gray-600'>Riwayat Pembayaran</h2>
        <div className='flex flex-row gap-3 mt-4 text-blue-800'>
          <button onClick={()=>setNotification('transaction')}>
            <div className={`px-12 py-4 rounded-full ${notification === 'transaction' ? 'bg-blue-400 bg-opacity-20 font-semibold ' : 'ring-1 ring-blue-700' }`}>
                Transaction
            </div>
          </button>
          <button onClick={()=>setNotification('promo')}>
            <div className={`px-12 py-4 rounded-full ${notification === 'promo' ? 'bg-blue-400 bg-opacity-20 font-semibold ' : 'ring-1 ring-blue-700' }`}>
                Promo
            </div>
          </button>
        </div>
      </div>

      <div className='bg-white p-8 w-full rounded-[27.51px]'>
        {
          notification === 'transaction' && (
            <div>
                
            </div>
          )
        }
        {
          notification === 'transaction' && (
            <div className='mt-4'>
              <EmptyState ilustration={<NotifIllustration/>} title='Transaksimu masih kosong sekarang, nih' description='Yuk, pesan tiketmu terlebih dahulu!' />
            </div>
          )
        }

        
        {
          notification === 'promo' && (
            <div>
              
            </div>
          )
        }
        {
          notification === 'promo' && (
            <div className='mt-4'>
              <EmptyState ilustration={<NotifIllustration/>} title='Kamu masih belum memiliki promo' description='Tapi jangan sedih, kamu tetap mendapatkan penawaran terbaik dari kami!' />
            </div>
          )
        }
      </div>

      {/* Empty State */}
    </div>
  )
}

export default NotificationStage