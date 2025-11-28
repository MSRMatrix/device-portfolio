import { Outlet } from "react-router-dom";
import Navbar from "./navbar/Navbar";

const Dashboard = () => {
    return(
        <>
        <Navbar />
        Dashboard
        <Outlet />
        </>
    )
}

export default Dashboard;