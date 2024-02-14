import LayoutClient from "../../components/layout-clients/layout";
import SearchField from "../../components/layout-clients/part/searchfield"
import { useSelector } from "react-redux";
import { CounterState } from "../../store/clients/client.slice";

const SearchPage = () => {
  const dataClient = useSelector(
    (state: { client: CounterState }) => state?.client?.profileClient
  );

  return (
    <LayoutClient dataClient={dataClient}>
      <SearchField />
    </LayoutClient>
  );
};

export default SearchPage;
