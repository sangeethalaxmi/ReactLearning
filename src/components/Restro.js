import RestroCards, { withExcellentRating } from "./RestroCards";
import resObj from "../utils/mockData";
import Shimmer from "./Shimmer";
import { Link } from "react-router";
const Restro = (props) => {
  const { listRestorent } = props;
  // calling hoc in this component
  const RestroWithRating = withExcellentRating(RestroCards);
  // adding loading is not good way why?? .. there is concept of shimmer ui where we load fake page till we load ui
  // conditional rendering - rendering based on condition
  // if (listRestorent.length === 0) {
  //   return <Shimmer />;
  // }
  // ternary operator
  return (
    <div className="flex flex-wrap gap-2 flex-row">
      {listRestorent.length === 0 ? (
        <Shimmer />
      ) : (
        listRestorent.map((data, index) => {
          return (
            <Link
              to={"/restaurant/" + data?.info.id}
              key={data?.info.id}
              style={{ textDecoration: "none", color: "inherit" }}
            >
              {data?.info.avgRating >= 4.5 ? (
                <RestroWithRating resData={data} />
              ) : (
                <RestroCards resData={data} />
              )}
            </Link>
          );
        })
      )}
    </div>
  );
};

// named export
export { Restro };
