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
import AuthContext from "./components/Store/Auth-Context";
import { useContext } from "react";

function App() {
  const authCtx = useContext(AuthContext);
  return (
    <CartProvider>
      <Header />
      <Routes>
        {authCtx.isLoggedIn && (
          <>
            <Route path="/home" element={<Home />} />
            <Route path="/store" element={<Store />} />
            <Route path="/product/:productId" element={<ProductDetails />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact_us" element={<Contact />} />
          </>
        )}
        {!authCtx.isLoggedIn && (
          <>
            <Route path="/home" element={<AuthForm />} />
            <Route path="/store" element={<AuthForm />} />
            <Route path="/about" element={<AuthForm />} />
            <Route path="/contact_us" element={<AuthForm />} />
            <Route path="/auth" element={<AuthForm />} />
          </>
        )}
      </Routes>
      <Footer />
    </CartProvider>
  );
}

export default App;
