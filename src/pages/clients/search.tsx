import LayoutClient from "../../components/layout-clients/layout";
import SearchSection from "../../section/clients/search-section";
import { useSelector } from "react-redux";
import { CounterState } from "../../store/clients/client.slice";

const SearchPage = () => {
  const dataClient = useSelector(
    (state: { client: CounterState }) => state?.client?.profileClient
  );

  return (
    <LayoutClient dataClient={dataClient}>
      <SearchSection />
    </LayoutClient>
  );
};

export default SearchPage;
