import { Outlet } from "react-router-dom";

export const Dashboard = () => {
  const [is, setIs] = useState(true)

  if(true) {
    console.log('teste')
  }

  if(is) console.log('teste 2');

  useEffect(() => {
    setIs(!is);
  },[is])

  return(
    <>
      <Outlet />
      <h1>Dashboarde</h1>
    </>
  ) 
};
