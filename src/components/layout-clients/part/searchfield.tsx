import FlightCard from "./flightcard"
import DateSlider from "./dateslider"
import { useCallback, useEffect, useState } from "react"
import { getFindFlight } from "../../../services/flightApi";
import { useParams } from "../../../routes/hooks";
import { useLocation } from "react-router-dom";
import travimatev2 from "../../../api/tavimatev2";

interface IDateObject {
  date: string;
  day: string;
}

const SearchField = () => {

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
      setIsLoading(false)
    }

  },[searchParamsState])


  useEffect(()=>{
    fetchDataFlight()
  },[fetchDataFlight])


  console.log(searchParamsState)

  return (
    <div id="section-a"className="items-center bg-blue-200">
        <DateSlider setDateSelected={setDateSelected} />



        <FlightCard airplane={"Citilink"}/>
        <FlightCard airplane={"Airline"}/>
    </div>
  )
}

export default SearchField