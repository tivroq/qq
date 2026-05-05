import React from "react";
import "./CartPage.css";
import Header from "../components/Header";
import BottomBar from "../components/ui/BottomBar";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
function CartPage() {
    const navigate = useNavigate();
  return (
    <div>
    <div className="cart-page">
        <Header />
      <h2 className="cart-title">Корзина</h2>

      <div className="cart-container">
        {/* Левая часть */}
        <div className="cart-left">
          <div className="cart-card">
            <img src="main4.png" alt="airpods" />

            <div className="cart-info">
              <h3>Apple BYZ S852I</h3>
              <p>2 927 ₸</p>
            </div>

            <div className="cart-counter">
              <button>-</button>
              <span>1</span>
              <button>+</button>
            </div>

            <h4>2 927 ₸</h4>
          </div>

          {/* доставка */}
          <div className="delivery-card">
            <h3>Доставка</h3>

           <img src="qq.png" alt="map" className="map-image" />

            <div className="delivery-bottom">
              <span>Доставка курьером</span>
              <span>499 ₸</span>
            </div>
          </div>
        </div>

        {/* Правая часть */}
        <div className="checkout-card">
          <div className="total-box">
            <h3>ИТОГО</h3>
            <span>2 927 ₸</span>
          </div>

<Link to="/checkout">
  <button className="checkout-btn">
    Перейти к оформлению
  </button>
</Link>

          <button className="cart-btn"
        onClick={() => navigate("/")}
        >
          В каталог товаров
        </button>
        
        </div>
      </div>
      
    </div>
    <BottomBar />
    </div>
  );
}

export default CartPage;