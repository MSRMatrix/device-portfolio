import "./hero.css"

import {heroList} from "../Data"

const Hero = () => {
    return(
        <div>
       <h2>{heroList.topic}</h2>
        <img src={heroList.image} alt="" />
        {heroList.textBox.map((item) => 
        <div>
            {item.text}
        </div>
        )}
        </div>
    )
}

export default Hero;