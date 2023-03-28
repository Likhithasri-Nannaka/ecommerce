import CartProvider from "./components/Store/CartProvider";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Layout/Header";
import Footer from "./components/Layout/Footer";
import Store from "./components/Pages/Store";
import About from "./components/Pages/About";
import Home from "./components/Pages/Home";

function App() {
  return (
    <CartProvider>
      <Header />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/" element={<Store />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <Footer />
    </CartProvider>
  );
}

export default App;
