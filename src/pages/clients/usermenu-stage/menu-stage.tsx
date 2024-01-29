import { Bell, ClockCounterClockwise, ListChecks, SignOut, User, UserCircle } from '@phosphor-icons/react'
import React from 'react'
import { NavLink } from 'react-router-dom'

interface IMenuStage {
    stateMenu: string
    isActive: string
}

const MenuStage = ({stateMenu, isActive}:IMenuStage) => {
  return (
    <div className='flex flex-col w-full gap-4 p-8 pb-12 bg-white rounded-[27.51px]'>
      <div className='flex flex-row gap-2 items-center'>
        <div>
          {/* <img src="" alt="" /> */}
          <UserCircle size={100} weight="fill" color='blue' />
        </div>
        <p className='font-bold text-[1.2rem]'>Don Norman</p>
      </div>
      <hr className='w-full border-[1px]' />
      <div className='flex flex-col gap-8 mt-2'>
        <NavLink to="/profile" 
          className={`flex flex-row gap-4 font-bold items-center ${stateMenu === 'profile' && isActive}`}>
            <User size={32} weight="bold" />
            <p>Akun</p>
        </NavLink>
        <NavLink to="/history" className={`flex flex-row gap-4 font-bold items-center ${stateMenu === 'history' && isActive}`}>
          <ClockCounterClockwise size={32} weight="bold" />
          <p>Riwayat Transaksi</p>
        </NavLink>
        <NavLink to="/checkin" className={`flex flex-row gap-4 font-bold items-center ${stateMenu === 'checkin' && isActive}`}>
          <ListChecks size={32} weight="bold" />
          <p>Cek In</p>
        </NavLink>
        <NavLink to="/notification" className={`flex flex-row gap-4 font-bold items-center ${stateMenu === 'notification' && isActive}`}>
          <Bell size={32} weight="bold" />
          <p>Notifikasi</p>
        </NavLink>
        <NavLink to="/logout" className={`flex flex-row gap-4 font-bold items-center ${stateMenu === 'logout' && isActive}`}>
          <SignOut size={32} weight="bold" />
          <p>Keluar</p>
        </NavLink>
      </div>
    </div>
  )
}

export default MenuStage