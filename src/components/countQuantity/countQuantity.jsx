import "./countQuantity.css";

export function CountQuantity({ value, onChange }) {
  return (
    <div className="count-quantity-container">
      <button
        onClick={() => onChange(value > 1 ? value - 1 : 1)}
        className="minus-btn"
      >
        -
      </button>

      <div className="count-container">{value}</div>

      <button
        onClick={() => onChange(value < 10 ? value + 1 : 10)}
        className="plus-btn"
      >
        +
      </button>
    </div>
  );
}