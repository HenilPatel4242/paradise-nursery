
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addItem } from "./CartSlice";

const plantCategories = [
  {
    name: "Air Purifying Plants",
    plants: [
      { id: 1, name: "Snake Plant", price: 15, image: "https://images.unsplash.com/photo-1593482892290-f54927ae2b42?w=400" },
      { id: 2, name: "Peace Lily", price: 18, image: "https://images.unsplash.com/photo-1593691509543-c55fb32e5cee?w=400" },
      { id: 3, name: "Spider Plant", price: 12, image: "https://images.unsplash.com/photo-1572688484438-313a6e50c333?w=400" },
      { id: 4, name: "Areca Palm", price: 25, image: "https://images.unsplash.com/photo-1512428813834-c702c7702b78?w=400" },
      { id: 5, name: "Rubber Plant", price: 22, image: "https://images.unsplash.com/photo-1509423350716-97f9360b4e09?w=400" },
      { id: 6, name: "Boston Fern", price: 16, image: "https://images.unsplash.com/photo-1597055181300-c6c6b0f0c3f5?w=400" }
    ]
  },
  {
    name: "Low Maintenance Plants",
    plants: [
      { id: 7, name: "ZZ Plant", price: 20, image: "https://images.unsplash.com/photo-1501004318641-b39e6451bec6?w=400" },
      { id: 8, name: "Jade Plant", price: 14, image: "https://images.unsplash.com/photo-1509423350716-97f9360b4e09?w=400" },
      { id: 9, name: "Aloe Vera", price: 10, image: "https://images.unsplash.com/photo-1509423350716-97f9360b4e09?w=400" },
      { id: 10, name: "Pothos", price: 13, image: "https://images.unsplash.com/photo-1497250681960-ef046c08a56e?w=400" },
      { id: 11, name: "Succulent", price: 8, image: "https://images.unsplash.com/photo-1459411552884-841db9b3cc2a?w=400" },
      { id: 12, name: "Dracaena", price: 19, image: "https://images.unsplash.com/photo-1485955900006-10f4d324d411?w=400" }
    ]
  },
  {
    name: "Decorative Plants",
    plants: [
      { id: 13, name: "Monstera", price: 28, image: "https://images.unsplash.com/photo-1614594975525-e45190c55d0b?w=400" },
      { id: 14, name: "Calathea", price: 24, image: "https://images.unsplash.com/photo-1597055181300-c6c6b0f0c3f5?w=400" },
      { id: 15, name: "Bird of Paradise", price: 35, image: "https://images.unsplash.com/photo-1597055181300-c6c6b0f0c3f5?w=400" },
      { id: 16, name: "Fiddle Leaf Fig", price: 32, image: "https://images.unsplash.com/photo-1509423350716-97f9360b4e09?w=400" },
      { id: 17, name: "Philodendron", price: 21, image: "https://images.unsplash.com/photo-1497250681960-ef046c08a56e?w=400" },
      { id: 18, name: "Chinese Evergreen", price: 17, image: "https://images.unsplash.com/photo-1485955900006-10f4d324d411?w=400" }
    ]
  }
];

function ProductList() {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart?.items || []);

  const cartCount = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );

  const addedIds = cartItems.map((item) => item.id);

  return (
    <div className="product-page" id="plants">
      <nav className="navbar">
        <a href="#home">Home</a>
        <a href="#plants">Plants</a>
        <a href="#cart" className="cart-link">
          🛒 Cart ({cartCount})
        </a>
      </nav>

      <header className="product-header">
        <h1>Paradise Nursery</h1>
        <p>Bring nature home with our beautiful houseplants.</p>
      </header>

      {plantCategories.map((category) => (
        <section className="plant-category" key={category.name}>
          <h2>{category.name}</h2>

          <div className="plant-grid">
            {category.plants.map((plant) => (
              <article className="plant-card" key={plant.id}>
                <img
                  src={plant.image}
                  alt={plant.name}
                  className="plant-image"
                />

                <h3>{plant.name}</h3>
                <p>Price: ${plant.price.toFixed(2)}</p>

                <button
                  type="button"
                  disabled={addedIds.includes(plant.id)}
                  onClick={() => dispatch(addItem(plant))}
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

export default ProductList;
