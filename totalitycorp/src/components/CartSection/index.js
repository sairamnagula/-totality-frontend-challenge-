import CartItems from "../CartItems";

import "./index.css";

const CartSection = () => {
  const carts = localStorage.getItem("carts_list");
  const cartsList = JSON.parse(carts);

  let totalPrice = 0;

  const cartItems = () => (
    <ul>
      {cartsList.map((eachItem) => {
        console.log(eachItem[0]);
        totalPrice = totalPrice + eachItem[0].price;
        return <CartItems cartItem={eachItem[0]} key={eachItem[0].uniqueNo} />;
      })}
    </ul>
  );

  return (
    <div className="property-container">
      <h1 className="property-title">Cart Section</h1>
      {cartsList === null ? (
        <img
          src="https://cdni.iconscout.com/illustration/premium/thumb/empty-cart-2130356-1800917.png"
          alt="zero-items"
        />
      ) : (
        cartItems()
      )}
      <div className="total-card">
        <h1 className="total">
          Total Cost : <span className="cost"> : {totalPrice}</span>
        </h1>
      </div>
      <div className="button-card">
        <button type="button" className="book-button">
          Proceed To CheckOut
        </button>
      </div>
    </div>
  );
};

export default CartSection;
