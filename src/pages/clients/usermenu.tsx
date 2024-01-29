import React, { useEffect, useState } from 'react'
import { GoArrowSwitch } from "react-icons/go";
import LayoutClient from '../../components/layout-clients/layout'
import { Bell, ClockCounterClockwise, FileText, ListChecks, SignOut, User, UserCircle } from '@phosphor-icons/react'
import { NavLink } from 'react-router-dom'
import usePath from '../../hooks/use-path'
import EmptyState from '../../components/layout-clients/empty-state/empty-state'
import { HistoryIllustration } from '../../assets/ilustrations'
import HistoryStage from './usermenu-stage/history-stage';
import MenuStage from './usermenu-stage/menu-stage';
import NotificationStage from './usermenu-stage/notification-stage';
import AccountStage from './usermenu-stage/account-stage';
import RulesCheckin from './usermenu-stage/rules-checkin';

const UserMenuPage = () => {

  const [stateMenu, setStateMenu] = useState('profile')
  const [riwayat, setRiwayat] = useState('pending')
  const [notification, setNotification] = useState('transaction')
  const path = usePath()

  const isActive =  'text-blue-600'

  useEffect(()=>{
    setStateMenu(path.split('/')[1])
  },[path])

  const renderMenuSection = (
    <MenuStage stateMenu={stateMenu} isActive={isActive}/>
  )

  const renderAkunState = (
    <AccountStage/>
  )

  const renderRiwayatState = (
    <HistoryStage setRiwayat={setRiwayat} riwayat={riwayat} />
  )

  const renderCekInState = (
    <RulesCheckin/>
  )

  const renderNotifikasiState = (
    <NotificationStage setNotification={setNotification} notification={notification} />
  )

  return (
    <LayoutClient>
      <div className='flex flex-row w-[100%] py-12 px-28 min-h-screen bg-[#E7F2FF]'>
        <div className='w-[30%] py-8 px-4'>
          {renderMenuSection}
        </div>
        <div className='w-[70%] py-8 px-4'>
          {stateMenu === 'profile' && renderAkunState}
          {stateMenu === 'history' && renderRiwayatState}
          {stateMenu === 'checkin' && renderCekInState}
          {stateMenu === 'notification' && renderNotifikasiState}
        </div>
      </div>
    </LayoutClient>
  )
}

export default UserMenuPage