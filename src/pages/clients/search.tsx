import LayoutClient from "../../components/layout-clients/layout";
import FlightCard from "../../components/layout-clients/part/flightcard";
import DateSlider from "../../components/layout-clients/part/dateslider"
import AirAsia from '../../assets/air-asia.svg';
import Citilink from '../../assets/citilink.svg';
import LionAir from '../../assets/lion-air.svg';
import Garuda from '../../assets/garuda-indonesia.svg';

import { useSelector } from "react-redux";
import { CounterState } from "../../store/clients/client.slice";
import { useCallback, useEffect, useState } from "react"
import { getFindFlight } from "../../services/flightApi";
import { useParams } from "../../routes/hooks";
import { useLocation } from "react-router-dom";
import travimatev2 from "../../api/tavimatev2";

interface IDateObject {
  date: string;
  day: string;
}

const SearchPage = () => {
  const [dateSelected, setDateSelected] = useState<IDateObject | null | undefined >()
  // const {loading, error, task, findFlightData, fetchData} = getFindFlight()
  const [isLoading, setIsLoading] = useState<boolean>(false)

  const [searchParamsState, setSearchParamsState] = useState({
    dep: '',
    arr: '',
    dateDep: '',
    dateArr: '',
    flightClass: '',
    isAroundTrip: false,
  });

  useEffect(() => {
    // Mengambil nilai dari URL parameters saat komponen dimount
    const searchParams = new URLSearchParams(window.location.search);
    const dep = searchParams.get('dep');
    const arr = searchParams.get('arr');
    const dateDep = searchParams.get('dateDep');
    const dateArr = searchParams.get('dateArr');
    const flightClass = searchParams.get('flightClass');
    const isAroundTrip = searchParams.get('isAroundTrip');

    // Mengupdate state dengan nilai-nilai yang didapat dari URL parameters
    setSearchParamsState({
      dep: dep || '',
      arr: arr || '',
      dateDep: dateDep || '',
      dateArr: dateArr || '',
      flightClass: flightClass || '',
      isAroundTrip: (isAroundTrip === 'true') || false,
    });
  }, []);

  
  const fetchDataFlight = useCallback( async ()=>{
    setIsLoading(true)

    let apiUrl = ''
    if(searchParamsState.isAroundTrip){
      apiUrl = `/flight/search?dep=${searchParamsState.dep}&arr=${searchParamsState.arr}&dateDep=${searchParamsState.dateDep}&dateArr=${searchParamsState.dateArr}&flightClass=${searchParamsState.flightClass}&isAroundTrip=${searchParamsState.isAroundTrip}`
    } else {
      apiUrl = `/flight/search?dep=${searchParamsState.dep}&dateDep=${searchParamsState.dateDep}&flightClass=${searchParamsState.flightClass}&isAroundTrip=${searchParamsState.isAroundTrip}`
    }
    try {
      await travimatev2.get(apiUrl)
      .then((res)=>{
        console.log(res)
      }) 

    } catch (error) {
      console.log(error)
      setIsLoading(false)
    }

  },[searchParamsState])


  useEffect(()=>{
    fetchDataFlight()
  },[fetchDataFlight])


  console.log(searchParamsState)

  const dataClient = useSelector(
    (state: { client: CounterState }) => state?.client?.profileClient
  );

  return (
    <LayoutClient dataClient={dataClient}>

      <div id="section-a"className="items-center bg-blue-200">
             
        <DateSlider setDateSelected={setDateSelected} />

        <FlightCard logo={AirAsia} airplane={"Air Asia"}/>
        <FlightCard logo={Citilink} airplane={"Citilink"}/>
        <FlightCard logo={LionAir} airplane={"Lion Air"}/>
        <FlightCard logo={Garuda} airplane={"Garuda Indonesia"}/>
        
      </div>

    </LayoutClient>
  );
};

export default SearchPage;
