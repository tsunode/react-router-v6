import { Outlet } from "react-router-dom";

export const Dashboard = () => {
  return(
    <>
      <Outlet />
      <h1>Dashboard</h1>
    </>
  ) 
};
