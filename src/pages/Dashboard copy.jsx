import { Outlet } from "react-router-dom";

export const Dashboard = () => {
  const [is, setIs] = useState(true)

  if(true) {
    console.log('teste')
  }

  useEffect(() => {
    setIs(!is);
  },[is])

  return(
    <>
      <Outlet />
      <h1>Dashboard</h1>
    </>
  ) 
};
