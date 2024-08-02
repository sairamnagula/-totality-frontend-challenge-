import "./index.css";

const PropertyItem = (props) => {
  const {
    imageUrl,
    name,
    rating,
    description,
    price,
    addToCart,
    uniqueNo,
  } = props;

  const addToCartButton = () => {
    addToCart(uniqueNo);
  };

  return (
    <li>
      <div className="card-container">
        <div className="card-top-section">
          <div>
            <h1>{name}</h1>
            <p>
              ratings <span className="rating">{rating} star</span>
            </p>
            <p className="price">Price :- {price}</p>
          </div>
          <div>
            <img alt={name} src={imageUrl} />
          </div>
        </div>
        <hr className="horizontal-line" />
        <div>
          <h1>Description</h1>
          <p>{description}</p>
          <button className="book-button" onClick={addToCartButton}>
            Add To Cart
          </button>
        </div>
      </div>
    </li>
  );
};

export default PropertyItem;
