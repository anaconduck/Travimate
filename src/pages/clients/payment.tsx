import React from 'react'
import PaymentPageView from '../../section/clients/payment/payment-page-view'
import LayoutClient from '../../components/layout-clients/layout'
import { useSelector } from 'react-redux'
import { CounterState } from '../../store/clients/client.slice'
import { selectCheckoutData, selectDataFlighState, selectQueryFlighState } from '../../store/flights/flights.slice'

const Payment = () => {

  const dataClient = useSelector((state: { client: CounterState }) => state?.client?.profileClient)
  const dataDetailFlight = useSelector(selectDataFlighState)
  const dataQueryFlight = useSelector(selectQueryFlighState)
  const dataCheckoutDataFlight = useSelector(selectCheckoutData)

  const totalFare = dataDetailFlight?.flights?.map((item:any)=>item?.baseFare?.adultBaseFare)?.reduce((a:any, b:any)=>a + b, 0)

  console.log(dataCheckoutDataFlight)

  return (
    <LayoutClient dataClient={dataClient} >
        <PaymentPageView/>
    </LayoutClient>
  )
}

export default Payment