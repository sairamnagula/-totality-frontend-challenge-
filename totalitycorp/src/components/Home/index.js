import { Link } from "react-router-dom";

import "./index.css";

const Home = () => (
  <div className="home-container">
    <h1 className="home-heading">Book Your Accommodation</h1>
    <Link to="/property">
      <button className="book-button">Book Now</button>
    </Link>
  </div>
);

export default Home;
