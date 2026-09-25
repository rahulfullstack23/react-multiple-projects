import { useMemo, useState } from "react";

import Navbar from "./components/Navbar";
import ProductForm from "./components/ProductForm";
import ProductList from "./components/ProductList";
import Cart from "./components/Cart";
import AIRecommendations from "./components/AIRecommendations";

import initialProducts from "./data/products";

import "./App.css";

function App() {
  const [products, setProducts] =
    useState(initialProducts);

  const [search, setSearch] = useState("");

  const [category, setCategory] =
    useState("All");

  const [cartOpen, setCartOpen] =
    useState(false);

  const handleAddProduct = (product) => {
    setProducts((previousProducts) => [
      product,
      ...previousProducts,
    ]);
  };

  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      const matchesSearch =
        product.name
          .toLowerCase()
          .includes(search.toLowerCase()) ||
        product.description
          .toLowerCase()
          .includes(search.toLowerCase());

      const matchesCategory =
        category === "All" ||
        product.category === category;

      return matchesSearch && matchesCategory;
    });
  }, [products, search, category]);

  return (
    <div className="app">
      <Navbar
        onCartClick={() => setCartOpen(true)}
      />

      <main>
        <section className="hero">
          <div className="hero-content">
            <span className="hero-badge">
              ✨ NEXT-GEN SHOPPING
            </span>

            <h1>
              Shop smarter.
              <br />
              <span>Buy better.</span>
            </h1>

            <p>
              Discover premium products with a
              beautiful shopping experience powered
              by React and Redux Toolkit.
            </p>

            <div className="hero-buttons">
              <a
                href="#products"
                className="primary-button"
              >
                Explore Products →
              </a>

              <a
                href="#ai"
                className="secondary-button"
              >
                🤖 AI Picks
              </a>
            </div>
          </div>

          <div className="hero-visual">
            <div className="orb orb-one"></div>
            <div className="orb orb-two"></div>

            <div className="hero-product">
              <span>👟</span>
            </div>

            <div className="floating-card card-one">
              ⭐ 4.8
            </div>

            <div className="floating-card card-two">
              🛒 24/7 Shopping
            </div>
          </div>
        </section>

        <ProductForm
          onAddProduct={handleAddProduct}
        />

        <section className="filter-section">
          <div className="search-box">
            <span>🔍</span>

            <input
              type="text"
              placeholder="Search products..."
              value={search}
              onChange={(e) =>
                setSearch(e.target.value)
              }
            />
          </div>

          <div className="category-buttons">
            {[
              "All",
              "Shoes",
              "Sneakers",
              "Sports",
              "Fashion",
            ].map((item) => (
              <button
                key={item}
                className={
                  category === item
                    ? "category-button active"
                    : "category-button"
                }
                onClick={() =>
                  setCategory(item)
                }
              >
                {item}
              </button>
            ))}
          </div>
        </section>

        <ProductList
          products={filteredProducts}
        />

        <AIRecommendations />
      </main>

      {cartOpen && (
        <>
          <div
            className="cart-overlay"
            onClick={() =>
              setCartOpen(false)
            }
          ></div>

          <Cart
            onClose={() =>
              setCartOpen(false)
            }
          />
        </>
      )}

      <footer>
        <strong>ShopSphere</strong>

        <span>
          Built with React + Redux Toolkit
        </span>
      </footer>
    </div>
  );
}

export default App;