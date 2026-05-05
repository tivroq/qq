import { Link } from "react-router-dom";
import { useState } from "react";
import "./Header.css";
export default function Header() {
  const [open, setOpen] = useState(false); // ВНУТРИ компонента

  return (
    <header className="header">
      <div className="header__left">
    <Link to="/">
        <h1 className="logo">QPICK</h1>
    </Link>
      </div>

      <div className="header__center">
        <div className="phone-select" onClick={() => setOpen(!open)}>
          Выбрать модель телефона
        </div>

        {open && (
  <div className="dropdown"> 
          <h3>Apple</h3>
            <div className="dropdown-Apple">
            <p>iPhone 12</p>
            <p>iPhone 12 Max</p>
            <p>iPhone 13</p>
            <p className="active">iPhone 13 Pro Max</p>
            <p>iPhone 14</p>
          </div>
            <p>INOI</p>
            <p>Nokia</p>
            <p>Oppo</p>
            <p>Xiaomi</p>
            <p>Realme</p>
            <p>Samsung</p>
            <p>Sony</p>
            <p>Vivo</p>
  </div>
        )}
      </div>

      <div className="header__right">
        <div className="icon">
          <Link to="/favorites">
            ❤️ <span className="badge">2</span>
          </Link>
        </div>

        <div className="icon">
          <Link to="/CartPage">
            🛒 <span className="badge">1</span>
          </Link>
        </div>
      </div>
    </header>
  );
}