import { useState } from "react";
import { productsArr } from "../Data/productData";
import { Image, Row, Col, Card } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { Fragment } from "react";
import { Magnifier, GlassMagnifier } from "react-image-magnifiers";

const ProductDetails = () => {
  const { productId } = useParams();

  const [selectedProduct, setSelectedProduct] = useState(
    productsArr.find((item) => item.id === productId) || { imageUrl: [] }
  );
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  const selectImageHandler = (index) => {
    setSelectedProduct({
      ...selectedProduct,
      imageUrl: [selectedProduct.altImages[index]],
    });
    setSelectedImageIndex(index);
  };

  const moveImageHandler = (step) => {
    const newIndex = selectedImageIndex + step;
    if (newIndex >= 0 && newIndex < selectedProduct.altImages.length) {
      selectImageHandler(newIndex);
    }
  };

  return (
    <Fragment>
      {selectedProduct && selectedProduct.title && (
        <h2 style={{ textAlign: "center" }}>{selectedProduct.title}</h2>
      )}
      <Row>
        <Col md={6}>
          <Card style={{ border: "none" }}>
            <div style={{ paddingLeft: "75px" }}>
              <Magnifier
                imageSrc={selectedProduct.imageUrl}
                imageAlt={selectedProduct.title}
                dragToMove={false}
                mouseActivation="hover"
                cursorStyle="crosshair"
                interactionSettings={{
                  magnifyButtonEnabled: false,
                }}
                style={{ width: "100%", height: "100%" }}
              >
                <GlassMagnifier
                  magnifierSize="50%"
                  magnifierBorderSize={1}
                  magnifierBorderColor="rgba(255, 255, 255, .5)"
                />
              </Magnifier>
            </div>
            <Card.Body>
              <div style={{ display: "flex", justifyContent: "center" }}>
                {selectedProduct.altImages &&
                  selectedProduct.altImages.map((imageUrl, index) => (
                    <Image
                      src={imageUrl}
                      style={{
                        width: "20%",
                        height: "auto",
                        margin: "10px",
                        border:
                          selectedImageIndex === index
                            ? "2px solid #007bff"
                            : "2px solid transparent",
                      }}
                      key={index}
                      onClick={() => selectImageHandler(index)}
                    />
                  ))}
              </div>
              {selectedProduct.altImages &&
                selectedProduct.altImages.length > 0 && (
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      marginTop: "10px",
                    }}
                  >
                    <button
                      type="button"
                      className="btn btn-outline-primary me-2"
                      disabled={selectedImageIndex === 0}
                      onClick={() => moveImageHandler(-1)}
                    >
                      &lt;
                    </button>
                    <button
                      type="button"
                      className="btn btn-outline-primary"
                      disabled={
                        selectedImageIndex ===
                        selectedProduct.altImages.length - 1
                      }
                      onClick={() => moveImageHandler(1)}
                    >
                      &gt;
                    </button>
                  </div>
                )}
            </Card.Body>
          </Card>
        </Col>
        <Col md={6}>
          <div>
            <h4>Ratings & Reviews :</h4>
            {selectedProduct.reviews &&
              selectedProduct.reviews.map((review, index) => (
                <div key={index}>
                  <p>
                    {review.rating} stars - {review.comment}
                  </p>
                </div>
              ))}
          </div>
        </Col>
      </Row>
    </Fragment>
  );
};

export default ProductDetails;
