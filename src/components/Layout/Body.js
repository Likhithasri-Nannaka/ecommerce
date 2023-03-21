import { productsArr } from "../../data/productData";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Fragment } from "react";
const Body = () => {
  return (
    <Fragment>
      <h2 style={{ textAlign: "center" }}>Music</h2>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <div>
          {productsArr.map((product, index) => {
            if (index % 2 === 0) {
              return (
                <Card
                  style={{
                    width: "18rem",
                    margin: "20px",
                    marginRight: "70px",
                    border: "none",
                  }}
                  key={index}
                >
                  <Card.Body>
                    <Card.Title
                      style={{ marginBottom: "15px", textAlign: "center" }}
                    >
                      {product.title}
                    </Card.Title>
                    <Card.Img
                      variant="top"
                      src={product.imageUrl}
                      style={{
                        transition: "transform .3s",
                        width: "100%",
                        height: "100%",
                      }}
                      onMouseOver={(e) => {
                        e.currentTarget.style.transform = "scale(1.1)";
                      }}
                      onMouseOut={(e) => {
                        e.currentTarget.style.transform = "scale(1)";
                      }}
                    />
                    <Card.Text style={{ float: "left", marginTop: "15px" }}>
                      ${product.price}
                    </Card.Text>
                    <Button
                      variant="primary"
                      style={{ float: "right", marginTop: "15px" }}
                    >
                      Add to Cart
                    </Button>
                    <div style={{ clear: "both" }} />
                  </Card.Body>
                </Card>
              );
            }
          })}
        </div>
        <div>
          {productsArr.map((product, index) => {
            if (index % 2 !== 0) {
              return (
                <Card
                  style={{
                    width: "18rem",
                    margin: "20px",
                    marginLeft: "70px",
                    border: "none",
                  }}
                  key={index}
                >
                  <Card.Body>
                    <Card.Title
                      style={{ marginBottom: "15px", textAlign: "center" }}
                    >
                      {product.title}
                    </Card.Title>
                    <Card.Img
                      variant="top"
                      src={product.imageUrl}
                      style={{
                        transition: "transform .3s",
                        width: "100%",
                        height: "100%",
                      }}
                      onMouseOver={(e) => {
                        e.currentTarget.style.transform = "scale(1.1)";
                      }}
                      onMouseOut={(e) => {
                        e.currentTarget.style.transform = "scale(1)";
                      }}
                    />
                    <Card.Text style={{ float: "left", marginTop: "15px" }}>
                      ${product.price}
                    </Card.Text>
                    <Button
                      variant="primary"
                      style={{ float: "right", marginTop: "15px" }}
                    >
                      Add to Cart
                    </Button>
                    <div style={{ clear: "both" }} />
                  </Card.Body>
                </Card>
              );
            }
          })}
        </div>
      </div>
    </Fragment>
  );
};
export default Body;
