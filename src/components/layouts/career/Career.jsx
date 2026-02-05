import "./career.css"

import { careerList } from "../Data";


const Career = () => {

    return(
        <div className="">
        {careerList.map((item, key) => 
        <div key={key}>
            <img src={item.image} alt={item.name} />
            <p>{item.name}</p>
        </div>
        )}
        </div>
    )
}

export default Career;