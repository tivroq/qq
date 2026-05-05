import React from "react";
import ItemCard from "./ItemCard";

const Catalog = () => {
  return (
    <section className="catalog">
      <ItemCard
        name="Apple AirPods "
        cost="9527 ₸"
        score="4.7"
        img="/airpods.png"
      />

      <ItemCard
        name="GERLAX CH-04"
        cost="6527 ₸"
        score="4.5"
        img="/gerlax.png"
      />

      <ItemCard
        name="BOROFONE BO4"
        cost="7527 ₸"
        score="4.7"
        img="/borofone.png"
      />
    </section>
  );
};

export default Catalog;