import "./index.css";

const CartItems = (props) => {
  const { cartItem } = props;
  const { name, price, imageUrl } = cartItem;

  return (
    <div className="card-container">
      <div className="card">
        <img src={imageUrl} alt={name} />
        <div className="card-item">
          <p>{name}</p>
          <p>Price :- {price}</p>
        </div>
      </div>
      <button type="button" className="remove-cart-btn">
        Remove From Cart
      </button>
    </div>
  );
};

export default CartItems;
