import FlightCard from "./flightcard"
import DateSlider from "./dateslider"
import { useEffect, useState } from "react"
import { getFindFlight } from "../../../services/flightApi";
import { useParams } from "../../../routes/hooks";
import { useLocation } from "react-router-dom";

interface IDateObject {
  date: string;
  day: string;
}

const SearchField = () => {

  const [dateSelected, setDateSelected] = useState<IDateObject | null | undefined >()
  const {loading, error, task, findFlightData, fetchData} = getFindFlight()
  const location = useLocation();

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const dep = searchParams.get('dep');
    const arr = searchParams.get('arr');
    const dateDep = searchParams.get('dateDep');
    const dateArr = searchParams.get('dateArr');
    const flightClass = searchParams.get('flightClass');
    const isAroundTrip = searchParams.get('isAroundTrip');

    // Lakukan apa pun yang Anda butuhkan dengan nilai-nilai query di sini
    console.log('Departure:', dep);
    console.log('Arrival:', arr);
    console.log('Departure Date:', dateDep);
    console.log('Arrival Date:', dateArr);
    console.log('Flight Class:', flightClass);
    console.log('Is Around Trip:', isAroundTrip);
  }, [location.search]);

  return (
    <div id="section-a"className="items-center bg-blue-200">
        <DateSlider setDateSelected={setDateSelected} />



        <FlightCard airplane={"Citilink"}/>
        <FlightCard airplane={"Airline"}/>
    </div>
  )
}

export default SearchField