import { Link } from "react-router-dom";

export const Home = () => {
  return (
    <>
      <h1>Home</h1>
      {/* <a href="/dashboard">Dashboard</a> */}
      <Link to="/dashboard">
        Dashboard
        <img src="" alt="" />
      </Link>
    </>
  );
};
