import { Fragment, useState } from "react";
import { Navbar, Nav, Button, Container } from "react-bootstrap";
import Cart from "../Cart/Cart";
import { BsCart3 } from "react-icons/bs";

const Header = () => {
  const [showCart, setShowCart] = useState(false);
  const openCart = () => {
    setShowCart(true);
  };
  const closeCart = () => {
    setShowCart(false);
  };
  return (
    <Fragment>
      <Navbar bg="dark" expand="sm" variant="dark">
        <Container className="justify-content-center">
          <Nav>
            <Nav.Item style={{ marginRight: "40px" }}>
              <Nav.Link href="/" style={{ color: "white" }}>
                Home
              </Nav.Link>
            </Nav.Item>
            <Nav.Item
              style={{
                marginRight: "40px",
              }}
            >
              <Nav.Link href="/" style={{ color: "white" }}>
                Store
              </Nav.Link>
            </Nav.Item>
            <Nav.Item style={{ marginRight: "40px" }}>
              <Nav.Link href="/" style={{ color: "white" }}>
                About
              </Nav.Link>
            </Nav.Item>
          </Nav>
        </Container>
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
        </Button>
      </Navbar>
      <p
        className="display-5 text-center p-3 bg-secondary mt-1 text-white"
        style={{ fontSize: "6em", fontFamily: "bold" }}
      >
        The Generics
      </p>
      {showCart && <Cart onClose={closeCart} />}
    </Fragment>
  );
};

export default Header;
