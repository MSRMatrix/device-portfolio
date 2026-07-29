import { useEffect, useState } from "react";

const Staturbar = () => {
    
    const max = 100;

const [percent] = useState(() =>
    Math.floor(Math.random() * (max + 1))
);

const [clock, setClock] = useState(new Date());

useEffect(() => {

    const timer = setInterval(() => {
        setClock(new Date());
    }, 1000);


    return () => clearInterval(timer);

}, []);

function themeMode(){
    console.log(`No function :)`);
    
}


    return (
        <>
            <div>{clock.toLocaleTimeString()}</div><div>{percent}%</div><button onClick={() => themeMode()}>Theme Button</button>
        </>
    )
};

export default Staturbar;