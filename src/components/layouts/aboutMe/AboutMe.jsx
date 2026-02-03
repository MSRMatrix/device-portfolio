import "./aboutMe.css"

const AboutMe = () => {

const myData = [
    {
    topic: "Name",
    info: "Michael Santos Rolo"
  },
{
    topic: "Geburtsdatum",
    info: "07.10.1998"
  },
  {
    topic: "Geburtsort",
    info: "Deutschland, Quakenbrück"
  },
  {
    topic: "Staatsangehörigkeit",
    info: "Portugiesisch"
  },
  ]


    return(
        <div className="my-data-container">
      <h1>Über mich</h1>
      <div>
       {myData.map((item, key) =>
      <div className="my-data" key={key}>
        <h2>{item.topic}</h2>
        <p>{item.info}</p>
      </div>
      )}
      </div> 
    </div>
    )
}

export default AboutMe;