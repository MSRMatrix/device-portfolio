import secret from "../../../assets/secret/secret.pdf"

const Certificates = () => {
    return(
        <>
       <iframe
  src={secret}
  width="100%"
  height="100%"
  title="React Zertifikat"
  style={{ border: "none" }}
></iframe>

        </>
    )
}

export default Certificates;