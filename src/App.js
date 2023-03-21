import Header from "./components/Layout/Header";
import Body from "./components/Layout/Body";
import Footer from "./components/Layout/Footer";
import CartProvider from "./components/Store/CartProvider";
function App() {
  return (
    <CartProvider>
      <Header />
      <Body />
      <Footer />
    </CartProvider>
  );
}

export default App;
