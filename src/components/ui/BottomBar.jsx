import React from "react";
import { Link } from "react-router-dom";
import { FaVk, FaInstagram, FaTelegram, FaWhatsapp } from "react-icons/fa";
import { IoGlobeOutline } from "react-icons/io5";

const BottomBar = () => {
  return (
    <div className="bottom">
   <Link to="/">
     <div className="bottom-logo">QPICK</div>
   </Link>
    

  
      <div className="bottom-links">
        <Link  to="/favorites">
        <p>Избранное</p>
        </Link>
        <Link  to="/cart">
        <p>Корзина</p>
        </Link>
        <p>Контакты</p>
      </div>

     
      <div className="bottom-service">
        <p className="service-title">Условия сервиса</p>

        <div className="bottom-lang">
          <IoGlobeOutline />
          <span>Kaz</span>
          <span className="active">Рус</span>
          <span>Eng</span>
        </div>
      </div>

     
      <div className="bottom-social">
        <FaVk />
        <FaInstagram />
        <FaTelegram />
        <FaWhatsapp />
      </div>
    </div>
  );
};

export default BottomBar;