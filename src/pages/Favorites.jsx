import "./Favorites.css";
import Header from "../components/Header";
import BottomBar from "../components/ui/BottomBar";
import ItemCard from "../components/ui/ItemCard";
import { useNavigate } from "react-router-dom";
const Favorites = () => {
const navigate = useNavigate();
const wired = [
  {
    name: "Apple BYZ S8521",
    cost: "2927 ₸",
    score: 4.7,
    img: "/public/main1.png"
  },
  {
    name: "Apple EarPods",
    cost: "2327 ₸",
    score: 4.5,
    img: "/public/main2.png"
  },
  {
    name: "Apple EarPods",
    cost: "2327 ₸",
    score: 4.5,
    img: "/public/main3.png"
  }
];
const wireless = [
  {
    name: "Apple AirPods",
    cost: "9527 ₸",
    score: 4.7,
    img: "/public/airpods.png"
  },
  {
    name: "GERLAX CH-04",
    cost: "6527 ₸",
    score: 4.5,
    img: "/public/gerlax.png"
  },
]

  return (
    <div>
      <Header />
      <div className="favorites">
        <div className="favorites-container">
                        <h3 className="ww">Избранное</h3>
                        <h3 className="qq">Наушники</h3>
                <div className="grid">
                  {wired.map((item, i) => (
                    <ItemCard key={i} {...item} />
                  ))}
                </div>
              
                <h3 className="qq">Беспроводные наушники</h3>
                <div className="grid">
                  {wireless.map((item, i) => (
                    <ItemCard key={i} {...item} />
                  ))}
                </div>
          <button
            className="cart-btn"
            
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

export default Favorites;