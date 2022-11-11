import "./certificates.css";
import Menu from "../../menu/Menu";

const Certificates = () => {

  return (
    <div>
        <Menu/>
        <div className="certContainer">
            <img src="./certificate/NWOYE_ICT.jpg" alt="" className="certImage frontLang"/>
            <img src="./certificate/frontend.jpg" alt="" className="certImage frontLang"/>
            <img src="./certificate/NWOYE_NYSC.jpg" alt="" className="certImage frontLang"/>
            <img src="./certificate/react_certificate.jpg" alt="" className="certImage"/>
            <img src="./certificate/PHP_certificate.jpg" alt="" className="certImage"/>
        </div>
    </div>
  )
}

export default Certificates