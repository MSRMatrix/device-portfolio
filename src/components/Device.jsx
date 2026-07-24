import HomeIndicator from "./HomeIndicator";

const Device = ({ children }) => {

    return (
        <div className="device">


                {children}

        <HomeIndicator />
        </div>
    );

};


export default Device;