import { useSelector } from "react-redux";

function AIRecommendations() {
  const items = useSelector(
    (state) => state.cart.items
  );

  const recommendations = [
    {
      id: "ai-1",
      name: "Wireless Headphones",
      price: 1899,
      icon: "🎧",
      reason: "Pairs well with your shopping choices.",
    },
    {
      id: "ai-2",
      name: "Premium Shoe Care",
      price: 499,
      icon: "✨",
      reason: "Keep your new shoes looking fresh.",
    },
    {
      id: "ai-3",
      name: "Smart Travel Bag",
      price: 1599,
      icon: "🎒",
      reason: "A useful companion for your lifestyle.",
    },
  ];

  if (items.length === 0) {
    return (
      <section
        className="ai-section"
        id="ai"
      >
        <div className="ai-empty">
          <span>🤖</span>

          <div>
            <h2>AI Smart Picks</h2>

            <p>
              Add something to your cart and we'll
              show personalized recommendations.
            </p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section
      className="ai-section"
      id="ai"
    >
      <div className="ai-heading">
        <div className="ai-icon">🤖</div>

        <div>
          <p className="eyebrow">AI POWERED</p>

          <h2>Smart Picks For You</h2>

          <p>
            Recommendations based on your cart.
          </p>
        </div>

        <span className="ai-badge">
          ✨ Gemini AI
        </span>
      </div>

      <div className="recommendation-grid">
        {recommendations.map((item) => (
          <div
            className="recommendation-card"
            key={item.id}
          >
            <div className="recommendation-icon">
              {item.icon}
            </div>

            <div>
              <h3>{item.name}</h3>

              <p>{item.reason}</p>

              <strong>₹{item.price}</strong>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default AIRecommendations;