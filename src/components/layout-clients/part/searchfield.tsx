import FlightCard from "./flightcard"
import DateSlider from "./dateslider"

const SearchField = () => {
  return (
    <div id="section-a"className="items-center bg-blue-200">
        <DateSlider/>
        <FlightCard airplane={"Citilink"}/>
        <FlightCard airplane={"Airline"}/>
    </div>
  )
}

export default SearchField