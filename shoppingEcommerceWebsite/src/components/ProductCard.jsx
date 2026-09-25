import { useDispatch } from "react-redux";
import { addToCart } from "../features/cart/cartSlice";

function ProductCard({ product }) {
  const dispatch = useDispatch();

  return (
    <article className="product-card">
      <div
        className="product-visual"
        style={{
          "--product-color": product.color,
        }}
      >
        <div className="product-glow"></div>

        <div className="product-3d">
          <span>{product.icon}</span>
        </div>

        <div className="floating-tag">
          {product.category}
        </div>
      </div>

      <div className="product-content">
        <div className="product-title-row">
          <div>
            <p className="product-category">
              {product.category}
            </p>

            <h3>{product.name}</h3>
          </div>

          <div className="rating">
            ★ 4.8
          </div>
        </div>

        <p className="product-description">
          {product.description}
        </p>

        <div className="available-sizes">
          {product.sizes.map((size) => (
            <span key={size}>{size}</span>
          ))}
        </div>

        <div className="product-bottom">
          <strong>₹{product.price}</strong>

          <button
            onClick={() =>
              dispatch(addToCart(product))
            }
          >
            🛒 Add
          </button>
        </div>
      </div>
    </article>
  );
}

export default ProductCard;