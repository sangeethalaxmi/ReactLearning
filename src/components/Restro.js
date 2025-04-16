import RestroCards from "./RestroCards";
import resObj from "../utils/mockData";
const Restro = (props) => {
  const { listRestorent } = props;
  return (
    <div className="restro-container">
      {listRestorent.map((data, index) => {
        return <RestroCards resData={data} key={data?.info.id} />;
      })}
    </div>
  );
};

// named export
export { Restro };
