import "./Banner.css";
import img from "../../assets/image.png";

export default function Banner() {
  return (
    <div className="banner">
      <div className="banner_text">
        Аксессуары для <br/>Iphone 13 Pro Max
      </div>
      <img className="banner_image" src={img} alt="image" />
    </div>
  );
}