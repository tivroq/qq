import "./Cart.css";
import BottomBar from "../components/ui/BottomBar";
import Header from "../components/Header";
import { useNavigate } from "react-router-dom";
 const Cart = () => {
const navigate = useNavigate();
  return (
   <div> 
    <Header />
   <div className="cartq">
      <div className="cart-containerq">
        
        <img 
          src="cart.png" 
          alt="empty cart" 
          className="cart-imageq"
        />

        <h2>Корзина пуста</h2>
        <p>Но это никогда не поздно исправить :)</p>

        <button className="cart-btnq"
        onClick={() => navigate("/")}
        >
          В каталог товаров
        </button>

      </div>
      
    </div>
    <BottomBar />
  </div>
  );
};

export default Cart;



