import { Link } from "react-router-dom";

import "./index.css";

const Header = () => (
  <nav className="nav-header">
    <div className="blog-container">
      <div>
        <h1 className="blog-title">RENTAL PROPERTIES</h1>
        <p>You Are Step Away To Book</p>
      </div>
      <ul className="nav-menu">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/property">Property Plans</Link>
        </li>
        <li>
          <Link to="/cart">Cart Items</Link>
        </li>
      </ul>
    </div>
  </nav>
);

export default Header;
