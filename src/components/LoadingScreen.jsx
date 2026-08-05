import { useContext, useEffect } from "react";
import { LoadingContext } from "../context/LoadingContext";

const LoadingScreen = ({setOpening}) => {

  const { loadingContext, setLoadingContext } = useContext(LoadingContext);

  useEffect(() => {
    setTimeout(() => {
        setLoadingContext(false)
        setOpening(true)
    }, 1000);
  },[])
    return (
        <div style={{color: "white"}}>
        Ladebalken
        </div>
    );

};


export default LoadingScreen;