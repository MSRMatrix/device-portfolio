import HomeIndicator from "./HomeIndicator";

const Device = ({ children }) => {

    return (
        <div className="device">

            <div className="device-app">

                {children}

            </div>
        <HomeIndicator />
        </div>
    );

};


export default Device;