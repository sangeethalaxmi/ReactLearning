import { useRouteError } from "react-router";
const Error = () => {
  const err = useRouteError();
  console.log(err);
  return (
    <div>
      <h1>Something went wrong</h1>
      <h3>{err.status}</h3>
      <h3>{err.statusText}</h3>
    </div>
  );
};
export default Error;
