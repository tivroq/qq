import React from "react";
import "./Checkout.css";
import Header from "../components/Header";
import BottomBar from "../components/ui/BottomBar";
function Checkout() {
  return (
    <div>
    <div className="checkout-page">
      <Header />

      <h2>Оформление заказа</h2>

      <div className="checkout-container">

        {/* Левая часть */}
        <div className="delivery-box">
          <div className="delivery-top">
            <h3>Доставка курьером</h3>
            <span>499 ₸</span>
          </div>

          <img src="qa.png" alt="map" className="map-img" />

          <input type="text" placeholder="Город" />
          <input type="text" placeholder="Улица / Район" />

          <div className="small-inputs">
            <input type="text" placeholder="Дом" />
            <input type="text" placeholder="Подъезд" />
          </div>

          <input type="text" placeholder="Квартира" />
        </div>

        {/* Правая часть */}
        <div className="payment-box">
          <div className="order-box">
            <h2>Ваш заказ</h2>
                <br />
            <p>1x Наушники Apple BYZ S852I</p>
            <br />
            <p>Доставка — 499 ₸</p>
            <br />
            <h4>К оплате: 3426 ₸</h4>
          </div>

          <div className="phone-box">
            <h3>Номер получателя</h3>
            <input type="text" placeholder="+7 ___ ___ ___" />
          </div>

          <button className="finish-btn">
            Закончить оформление
          </button>
        </div>

      </div>
    </div>
    <BottomBar />
    </div>
  );
}

export default Checkout;