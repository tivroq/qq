import "./Covers.css";
import imgC1 from "../../assets/image_Covrs1.png";
import imgC2 from "../../assets/image_Covrs2.png";
import imgC3 from "../../assets/image_Covrs3.png";
export default function Covers() {
    return(
        <div className="Covers">Чехлы

            <div className="Covers_image"><img className="Pro1" src={imgC1} alt="image"/>Стеклянные</div>
            <div className="Covers_image"><img className="Pro2" src={imgC2} alt="image" />Силиконовые</div>
            <div className="Covers_image"><img className="Pro2" src={imgC3} alt="image" />Кожаные</div>
        
        </div>
    )
}
