import { useNavigate } from "react-router-dom";

const HomeIndicator = () => {
    const navigate = useNavigate()

    return (
        <div className="home-indicator" onClick={() => navigate("/")}></div>
    );

};


export default HomeIndicator;