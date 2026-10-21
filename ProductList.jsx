

import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addItem } from "./CartSlice";

const categories = [
  {
    name: "Air Purifying Plants",
    plants: [
      { id: 1, name: "Snake Plant", price: 15 },
      { id: 2, name: "Peace Lily", price: 18 },
      { id: 3, name: "Spider Plant", price: 12 },
      { id: 4, name: "Areca Palm", price: 25 },
      { id: 5, name: "Rubber Plant", price: 22 },
      { id: 6, name: "Boston Fern", price: 16 },
    ],
  },
  {
    name: "Low Maintenance Plants",
    plants: [
      { id: 7, name: "ZZ Plant", price: 20 },
      { id: 8, name: "Jade Plant", price: 14 },
      { id: 9, name: "Aloe Vera", price: 10 },
      { id: 10, name: "Pothos", price: 13 },
      { id: 11, name: "Succulent", price: 8 },
      { id: 12, name: "Dracaena", price: 19 },
    ],
  },
  {
    name: "Decorative Plants",
    plants: [
      { id: 13, name: "Monstera", price: 28 },
      { id: 14, name: "Calathea", price: 24 },
      { id: 15, name: "Bird of Paradise", price: 35 },
      { id: 16, name: "Fiddle Leaf Fig", price: 32 },
      { id: 17, name: "Philodendron", price: 21 },
      { id: 18, name: "Chinese Evergreen", price: 17 },
    ],
  },
];

const images = [
  "https://images.unsplash.com/photo-1501004318641-b39e6451bec6?w=400",
  "https://images.unsplash.com/photo-1497250681960-ef046c08a56e?w=400",
  "https://images.unsplash.com/photo-1485955900006-10f4d324d411?w=400",
];

export default function ProductList() {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.cart?.items || []);
  const count = items.reduce((sum, item) => sum + item.quantity, 0);
  const addedIds = items.map((item) => item.id);

  return (
    <div id="plants">
      <nav className="navbar">
        <a href="/">Home</a>{" | "}
        <a href="#plants">Plants</a>{" | "}
        <a href="/cart">Cart ({count})</a>
      </nav>

      <h1>Paradise Nursery Plants</h1>

      {categories.map((category, index) => (
        <section key={category.name}>
          <h2>{category.name}</h2>
          <div className="plant-grid">
            {category.plants.map((plant, plantIndex) => (
              <article className="plant-card" key={plant.id}>
                <img
                  src={images[(plant.id - 1) % images.length]}
                  alt={plant.name}
                  width="150"
                />
                <h3>{plant.name}</h3>
                <p>Price: ${plant.price.toFixed(2)}</p>
                <button
                  disabled={addedIds.includes(plant.id)}
                  onClick={() =>
                    dispatch(addItem({
                      ...plant,
                      image: images[(plant.id - 1) % images.length],
                    }))
                  }
                >
                  {addedIds.includes(plant.id)
                    ? "Added to Cart"
                    : "Add to Cart"}
                </button>
              </article>
            ))}
          </div>
        </section>
      ))}
    </div>
  );
}
