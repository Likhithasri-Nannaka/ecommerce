import { Fragment, useState } from "react";
import { Container, Form, Button } from "react-bootstrap";
const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const submitHandler = (event) => {
    event.preventDefault();
    const contact = {
      name: name,
      email: email,
      phone: phone,
    };
    fetch(
      "https://react-ecommerce-012-default-rtdb.firebaseio.com/contacts.json",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(contact),
      }
    )
      .then((response) => response.json())
      .then((data) => {
        console.log("Success:", data);
        setName("");
        setEmail("");
        setPhone("");
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };
  return (
    <Fragment>
      <Container className="d-flex justify-content-center">
        <Form
          onSubmit={submitHandler}
          style={{
            maxWidth: "400px",
            marginTop: "100px",
            marginBottom: "100px",
          }}
        >
          <Form.Group className="mb-3" controlId="formName">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              value={name}
              onChange={(event) => setName(event.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formPhone">
            <Form.Label>Phone number</Form.Label>
            <Form.Control
              type="tel"
              value={phone}
              onChange={(event) => setPhone(event.target.value)}
            />
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </Container>
    </Fragment>
  );
};
export default Contact;
