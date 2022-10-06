import { Outlet } from "react-router-dom";

export const Dashboard = () => {
  if(true) {
    console.log('teste erro sonar')
  }

  return(
    <>
      <Outlet />
      <h1>Dashboard</h1>
    </>
  ) 
};
