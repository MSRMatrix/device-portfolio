import { Outlet } from "react-router-dom";
import Navbar from "./navbar/Navbar";
import Footer from "./footer/Footer";

const Dashboard = () => {
    return(
        <>
        <Navbar />
        Dashboard
        <Outlet />
        <Footer />
        </>
    )
}

export default Dashboard;