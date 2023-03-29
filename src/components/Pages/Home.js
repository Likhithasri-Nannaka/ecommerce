import { Fragment } from "react";
import { Container, ListGroup, ListGroupItem, Button } from "react-bootstrap";
import { BsPlayCircle } from "react-icons/bs";

const Home = () => {
  return (
    <Fragment>
      <p
        className="display-5 text-center p-3 bg-secondary mt-1 text-white"
        style={{ fontSize: "6em", fontFamily: "bold" }}
      >
        The Generics
        <br />
        <BsPlayCircle />
      </p>
      <Container>
        <h2 style={{ textAlign: "center" }}>Tours</h2>
        <ListGroup
          style={{
            textAlign: "center",
            marginBottom: "30px",
          }}
        >
          <ListGroupItem style={{ border: "none" }}>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                textAlign: "start",
                justifyContent: "center",
              }}
            >
              <div style={{ width: "100px" }}>JUL 16</div>
              <div style={{ width: "200px" }}>DETROIT, MI</div>
              <div style={{ width: "400px" }}>DTE ENERGY MUSIC THEATRE</div>
              <Button
                variant="info"
                style={{
                  marginLeft: "50px",
                  fontWeight: "bold",
                  color: "white",
                }}
              >
                BUY TICKETS
              </Button>
            </div>
          </ListGroupItem>
          <ListGroupItem style={{ border: "none" }}>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                textAlign: "start",
                justifyContent: "center",
              }}
            >
              <div style={{ width: "100px" }}>JUL 19</div>
              <div style={{ width: "200px" }}>TORONTO, ON</div>
              <div style={{ width: "400px" }}>BUDWEISER STAGE</div>
              <Button
                variant="info"
                style={{
                  marginLeft: "50px",
                  fontWeight: "bold",
                  color: "white",
                }}
              >
                BUY TICKETS
              </Button>
            </div>
          </ListGroupItem>
          <ListGroupItem style={{ border: "none" }}>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                textAlign: "start",
                justifyContent: "center",
              }}
            >
              <div style={{ width: "100px" }}>JUL 22</div>
              <div style={{ width: "200px" }}>BRISTOW, VA</div>
              <div style={{ width: "400px" }}>JIGGY LUBE LIVE</div>
              <Button
                variant="info"
                style={{
                  marginLeft: "50px",
                  fontWeight: "bold",
                  color: "white",
                }}
              >
                BUY TICKETS
              </Button>
            </div>
          </ListGroupItem>
          <ListGroupItem style={{ border: "none" }}>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                textAlign: "start",
                justifyContent: "center",
              }}
            >
              <div style={{ width: "100px" }}>JUL 29</div>
              <div style={{ width: "200px" }}>PHOENIX, AZ</div>
              <div style={{ width: "400px" }}>AK-CHIN PAVILION</div>
              <Button
                variant="info"
                style={{
                  marginLeft: "50px",
                  fontWeight: "bold",
                  color: "white",
                }}
              >
                BUY TICKETS
              </Button>
            </div>
          </ListGroupItem>
          <ListGroupItem style={{ border: "none" }}>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                textAlign: "start",
                justifyContent: "center",
              }}
            >
              <div style={{ width: "100px" }}>AUG 2</div>
              <div style={{ width: "200px" }}>LAS VEGAS, NV</div>
              <div style={{ width: "400px" }}>T-MOBILE ARENA</div>
              <Button
                variant="info"
                style={{
                  marginLeft: "50px",
                  fontWeight: "bold",
                  color: "white",
                }}
              >
                BUY TICKETS
              </Button>
            </div>
          </ListGroupItem>
          <ListGroupItem style={{ border: "none" }}>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                textAlign: "start",
                justifyContent: "center",
              }}
            >
              <div style={{ width: "100px" }}>AUG 7</div>
              <div style={{ width: "200px" }}>CONCORD, CA</div>
              <div style={{ width: "400px" }}>CONCORD PAVILION</div>
              <Button
                variant="info"
                style={{
                  marginLeft: "50px",
                  fontWeight: "bold",
                  color: "white",
                }}
              >
                BUY TICKETS
              </Button>
            </div>
          </ListGroupItem>
        </ListGroup>
      </Container>
    </Fragment>
  );
};
export default Home;
