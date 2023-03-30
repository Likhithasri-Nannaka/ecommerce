import CartProvider from "./components/Store/CartProvider";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Layout/Header";
import Footer from "./components/Layout/Footer";
import Store from "./components/Pages/Store";
import About from "./components/Pages/About";
import Home from "./components/Pages/Home";
import Contact from "./components/Pages/ContactUs";
import ProductDetails from "./components/Pages/ProductsPage";
import AuthForm from "./components/Auth/AuthForm";

function App() {
  return (
    <CartProvider>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/store" element={<Store />} />
        <Route path="/product/:productId" element={<ProductDetails />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact_us" element={<Contact />} />
        <Route path="/auth" element={<AuthForm />} />
      </Routes>
      <Footer />
    </CartProvider>
  );
}

export default App;
