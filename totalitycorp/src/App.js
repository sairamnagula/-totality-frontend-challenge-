import { BrowserRouter, Route, Routes } from "react-router-dom";

import Header from "./components/Header";
import Home from "./components/Home";
import Property from "./components/Property";
import CartSection from "./components/CartSection";

const App = () => (
  <BrowserRouter>
    <Header />
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route exact path="/property" element={<Property />} />
      <Route exact path="/cart" element={<CartSection />} />
    </Routes>
  </BrowserRouter>
);

export default App;
