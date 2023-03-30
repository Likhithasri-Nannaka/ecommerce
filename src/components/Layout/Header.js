import { Fragment, useState, useContext } from "react";
import { Navbar, Nav, Button, Container } from "react-bootstrap";
import Cart from "../Cart/Cart";
import CartContext from "../Store/CartContext";
import { BsCart3 } from "react-icons/bs";
import { useLocation } from "react-router-dom";
import { NavLink } from "react-router-dom";

const Header = () => {
  const [showCart, setShowCart] = useState(false);
  const cartCtx = useContext(CartContext);

  const { items } = cartCtx;

  const numberOfCartItems = items.reduce((curNumber, item) => {
    return curNumber + item.amount;
  }, 0);
  const openCart = () => {
    setShowCart(true);
  };
  const closeCart = () => {
    setShowCart(false);
  };
  const location = useLocation();
  return (
    <Fragment>
      <Navbar bg="dark" expand="sm" variant="dark">
        <Container className="justify-content-center">
          <Nav>
            <Nav.Item style={{ marginRight: "40px" }}>
              <NavLink to="/" className="nav-link" style={{ color: "white" }}>
                Home
              </NavLink>
            </Nav.Item>
            <Nav.Item
              style={{
                marginRight: "40px",
              }}
            >
              <NavLink
                to="/store"
                className="nav-link"
                style={{ color: "white" }}
              >
                Store
              </NavLink>
            </Nav.Item>
            <Nav.Item style={{ marginRight: "40px" }}>
              <NavLink
                to="/about"
                className="nav-link"
                style={{ color: "white" }}
              >
                About
              </NavLink>
            </Nav.Item>
            <Nav.Item style={{ marginRight: "40px" }}>
              <NavLink
                to="/contact_us"
                className="nav-link"
                style={{ color: "white" }}
              >
                Contact Us
              </NavLink>
            </Nav.Item>
            <Nav.Item style={{ marginRight: "40px" }}>
              <NavLink
                to="/auth"
                className="nav-link"
                style={{ color: "white" }}
              >
                Login
              </NavLink>
            </Nav.Item>
          </Nav>
        </Container>
        {location.pathname !== "/" &&
          location.pathname !== "/about" &&
          location.pathname !== "/contact_us" &&
          location.pathname !== "/auth" && (
            <Button
              variant="outline-primary"
              style={{
                marginRight: "15px",
                backgroundColor: "transparent",
                borderColor: "#007bff",
                color: "white",
              }}
              onClick={openCart}
            >
              Cart <BsCart3 />
              {numberOfCartItems}
            </Button>
          )}
      </Navbar>
      {showCart && <Cart onClose={closeCart} />}
    </Fragment>
  );
};

export default Header;
