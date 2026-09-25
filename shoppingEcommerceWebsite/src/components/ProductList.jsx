import ProductCard from "./ProductCard";

function ProductList({ products }) {
  return (
    <section
      className="products-section"
      id="products"
    >
      <div className="section-header">
        <div>
          <p className="eyebrow">OUR COLLECTION</p>

          <h2>Featured Products</h2>

          <p>
            Choose your favorite products and add
            them to your cart.
          </p>
        </div>

        <div className="product-count">
          {products.length} Products
        </div>
      </div>

      {products.length === 0 ? (
        <div className="empty-products">
          <span>📦</span>
          <h3>No products found</h3>
          <p>Try another search.</p>
        </div>
      ) : (
        <div className="product-grid">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
            />
          ))}
        </div>
      )}
    </section>
  );
}

export default ProductList;