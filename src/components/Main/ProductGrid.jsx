import "./ProductGrid.css";
import Card from "./Card";
import { products } from "../data/products";

export default function ProductGrid() {
  return (
    <div className="grid">
      {products.map((item) => (
        <Card key={item.id} product={item} />
      ))}
    </div>
  );
}