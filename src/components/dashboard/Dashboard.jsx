import "./dashboard.css"

import { Outlet } from "react-router-dom";

import Navbar from "../navbar/Navbar";
import Footer from "../footer/Footer";

const Dashboard = () => {
    return(
        <div className="dashboard">
        <Navbar />
        <div className="outlet">
        <Outlet />    
        </div>
        <Footer />
        </div>
    )
}

export default Dashboard;