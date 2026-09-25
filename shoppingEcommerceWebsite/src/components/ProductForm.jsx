import { useState } from "react";

function ProductForm({ onAddProduct }) {
  const [name, setName] = useState("");
  const [description, setDescription] =
    useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] =
    useState("Shoes");

  const [sizes, setSizes] = useState({
    S: true,
    M: true,
    L: true,
  });

  const toggleSize = (size) => {
    setSizes((prev) => ({
      ...prev,
      [size]: !prev[size],
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!name || !description || !price) {
      alert("Please fill all product details.");
      return;
    }

    const selectedSizes = Object.keys(sizes).filter(
      (size) => sizes[size]
    );

    if (selectedSizes.length === 0) {
      alert("Please select at least one size.");
      return;
    }

    const product = {
      id: Date.now(),
      name,
      description,
      price: Number(price),
      category,
      sizes: selectedSizes,
      color: "#312e81",
      icon: "👟",
    };

    onAddProduct(product);

    setName("");
    setDescription("");
    setPrice("");
    setCategory("Shoes");
  };

  return (
    <section className="product-form-section">
      <div className="form-heading">
        <div>
          <p className="eyebrow">PRODUCT MANAGEMENT</p>
          <h1>Add a New Product</h1>
          <p>
            Create a product and make it available
            in your store.
          </p>
        </div>

        <div className="cube">
          <div className="cube-face front">👟</div>
          <div className="cube-face back">S</div>
          <div className="cube-face right">+</div>
          <div className="cube-face left">🛍</div>
          <div className="cube-face top">★</div>
          <div className="cube-face bottom">AI</div>
        </div>
      </div>

      <form
        className="product-form"
        onSubmit={handleSubmit}
      >
        <div className="input-group">
          <label>Product Name</label>

          <input
            type="text"
            placeholder="e.g. Navy Blue Sneakers"
            value={name}
            onChange={(e) =>
              setName(e.target.value)
            }
          />
        </div>

        <div className="input-group description-input">
          <label>Description</label>

          <input
            type="text"
            placeholder="e.g. Premium cotton shoes"
            value={description}
            onChange={(e) =>
              setDescription(e.target.value)
            }
          />
        </div>

        <div className="input-group price-input">
          <label>Price</label>

          <input
            type="number"
            placeholder="1299"
            min="1"
            value={price}
            onChange={(e) =>
              setPrice(e.target.value)
            }
          />
        </div>

        <div className="input-group">
          <label>Category</label>

          <select
            value={category}
            onChange={(e) =>
              setCategory(e.target.value)
            }
          >
            <option>Shoes</option>
            <option>Sneakers</option>
            <option>Sports</option>
            <option>Fashion</option>
          </select>
        </div>

        <div className="size-section">
          <label>Available Sizes</label>

          <div className="size-buttons">
            {["S", "M", "L"].map((size) => (
              <button
                type="button"
                key={size}
                className={
                  sizes[size]
                    ? "size-button selected"
                    : "size-button"
                }
                onClick={() =>
                  toggleSize(size)
                }
              >
                {size}
              </button>
            ))}
          </div>
        </div>

        <button
          type="submit"
          className="add-product-button"
        >
          + Add Product
        </button>
      </form>
    </section>
  );
}

export default ProductForm;