import React, { useState } from 'react'
import LayoutClient from '../../components/layout-clients/layout'
import { Bell, ClockCounterClockwise, FileText, ListChecks, SignOut, User, UserCircle } from '@phosphor-icons/react'

const ProfilePage = () => {

  const [stateMenu, setStateMenu] = useState('akun')

  const renderProfileSection = (
    <div className='flex flex-col w-full gap-4 p-8 pb-12 bg-white rounded-[27.51px]'>
      <div className='flex flex-row gap-2 items-center'>
        <div>
          {/* <img src="" alt="" /> */}
          <UserCircle size={100} weight="fill" color='blue' />
        </div>
        <p className='font-bold text-[1.2rem]'>Don Normal</p>
      </div>
      <hr className='w-full border-[1px]' />
      <div className='flex flex-col gap-8 mt-2'>
        <button onClick={()=>setStateMenu('akun')} className='flex flex-row gap-4 font-bold items-center'>
          <User size={32} weight="bold" />
          <p>Akun</p>
        </button>
        <button onClick={()=>setStateMenu('riwayat')} className='flex flex-row gap-4 font-bold items-center'>
          <ClockCounterClockwise size={32} weight="bold" />
          <p>Riwayat Transaksi</p>
        </button>
        <button onClick={()=>setStateMenu('cekin')} className='flex flex-row gap-4 font-bold items-center'>
          <ListChecks size={32} weight="bold" />
          <p>Cek In</p>
        </button>
        <button onClick={()=>setStateMenu('notif')} className='flex flex-row gap-4 font-bold items-center'>
          <Bell size={32} weight="bold" />
          <p>Notifikasi</p>
        </button>
        <button onClick={()=>{}} className='flex flex-row gap-4 font-bold items-center'>
          <SignOut size={32} weight="bold" />
          <p>Keluar</p>
        </button>
      </div>
    </div>
  )

  const renderAkunState = (
    <div className='bg-white p-8 w-full rounded-[27.51px]'>
      Akun
    </div>
  )

  const renderRiwayatState = (
    <div className='bg-white p-8 w-full rounded-[27.51px]'>
      Riwayat
    </div>
  )

  const renderCekInState = (
    <div className='bg-white p-8 w-full rounded-[27.51px]'>
      Cek in
    </div>
  )

  const renderNotifikasiState = (
    <div className='bg-white p-8 w-full rounded-[27.51px]'>
      Notifikasi
    </div>
  )

  return (
    <LayoutClient>
      <div className='flex flex-row w-[100%] min-h-screen bg-[#E7F2FF]'>
        <div className='w-[30%] p-8'>
          {renderProfileSection}
        </div>
        <div className='w-[70%] p-8 '>
          {stateMenu === 'akun' && renderAkunState}
          {stateMenu === 'riwayat' && renderRiwayatState}
          {stateMenu === 'cekin' && renderCekInState}
          {stateMenu === 'notif' && renderNotifikasiState}
        </div>
      </div>
    </LayoutClient>
  )
}

export default ProfilePage