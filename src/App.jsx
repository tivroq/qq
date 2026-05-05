import Header from "./components/Header";
import Banner from "./components/Banner/Banner";
import Covers from "./components/Covers/Covers";
import ProductGrid from "./components/Main/ProductGrid";
import Catalog from "./components/ui/Catalog";
import BottomBar from "./components/ui/BottomBar";
import { Routes, Route } from "react-router-dom";
import Cart from "./pages/Cart";
import CartPage from "./pages/CartPage";
import Favorites from "./pages/Favorites";
import "./styles.css"
import Checkout from "./pages/Checkout";
function App() {
  return (
    <Routes>
      
      {/* Главная */}
      <Route
        path="/"
        element={
          <div>
            <Header />
            <Banner />
            <Covers />
            <h2 className="qq1">Наушники</h2>
            <ProductGrid />
            <h2 className="qq1">Беспроводные наушники</h2>
            <Catalog />
            <BottomBar />
          </div>
        }
      />

      {/* Корзина */}
      <Route path="/cart" element={<Cart />} />
      <Route path="CartPage" element={<CartPage />} />
      <Route path="/favorites" element={<Favorites />} />
      <Route path="/checkout" element={<Checkout />} />
    </Routes>
  );
}

export default  App;



