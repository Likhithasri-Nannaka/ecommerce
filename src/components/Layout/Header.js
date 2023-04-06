import { Fragment, useState, useContext } from "react";
import { Navbar, Nav, Button, Container } from "react-bootstrap";
import Cart from "../Cart/Cart";
import CartContext from "../Store/CartContext";
import { BsCart3 } from "react-icons/bs";
import { useLocation, useNavigate } from "react-router-dom";
import { NavLink } from "react-router-dom";
import AuthContext from "../Store/Auth-Context";

const Header = () => {
  const [showCart, setShowCart] = useState(false);
  const cartCtx = useContext(CartContext);
  const authCtx = useContext(AuthContext);
  const navigate = useNavigate();

  const logoutHandler = () => {
    authCtx.logout();
    navigate("/auth", { replace: true });
  };
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
          <Nav className="flex-grow-3">
            <Nav.Item style={{ marginRight: "40px" }}>
              <NavLink
                to="/home"
                className="nav-link"
                style={{ color: "white" }}
              >
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
          </Nav>
        </Container>
        {authCtx.isLoggedIn &&
          location.pathname !== "/home" &&
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
        {authCtx.isLoggedIn && location.pathname !== "/auth" && (
          <Button
            variant="outline-primary"
            style={{
              marginRight: "15px",
              backgroundColor: "transparent",
              borderColor: "#007bff",
              color: "white",
            }}
            onClick={logoutHandler}
          >
            Logout
          </Button>
        )}
      </Navbar>
      {showCart && <Cart onClose={closeCart} />}
    </Fragment>
  );
};

export default Header;
