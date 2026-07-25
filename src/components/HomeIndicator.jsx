import { useNavigate } from "react-router-dom";

const HomeIndicator = ({ setOpening }) => {

    const navigate = useNavigate();

    return (
        <div
            className="home-indicator"
            onClick={() => {
                navigate("/");
                setOpening(false);
            }}
        >
        </div>
    );

};

export default HomeIndicator;