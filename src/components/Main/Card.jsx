import "./Card.css";

export default function Card({ product }) {
  return (
    <div className="card">
      <div className="favorite">♡</div>

      <img src={product.image} alt={product.title} />

      <div className="card-info">
        <h3>{product.title}</h3>

        <div className="price-block">
          <span className="price">{product.price} ₸</span>

          {product.oldPrice && (
            <div className="old">
              <span className="old-price">{product.oldPrice} ₸</span>
              <span className="discount">{product.discount}</span>
            </div>
          )}
        </div>

        <div className="rating">
          ⭐ {product.rating}
        </div>
      </div>
    </div>
  );
}