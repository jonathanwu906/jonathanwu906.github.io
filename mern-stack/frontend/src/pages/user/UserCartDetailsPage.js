import { Container, Row, Col, Form, Alert, ListGroup, ListGroupItem, Button } from "react-bootstrap";
import CartItemComponent from "../../components/CartItemComponent";


const UserCartDetailsPage = () => {
    return (
        <Container fluid>
        <Row className="mt-4">
            <h1>Cart Details</h1>
            <Col md={8}>
                <br />
                <Row>
                    <Col md={6}>
                        <h2>Shipping</h2>
                        <b>Name</b>: Jonathan Wu <br />
                        <b>Address</b>: 8739 Mayflower St. Los Angeles, CA 90063 <br />
                        <b>Phone</b>: 0988894186
                    </Col>
                    <Col md={6}>
                        <h2>Payment method</h2>
                        <Form.Select>
                            <option value="pp">
                                PayPal
                            </option>
                            <option value="cod">
                                Cash On Delivery (delivery may be delayed)
                            </option>
                        </Form.Select>
                    </Col>
                    <Row>
                        <Col>
                            <Alert className="mt-3" variant="danger">
                                Not delivered. In order to make order, fill out your profile
                                with correct address, city etc.
                            </Alert>
                        </Col>
                        <Col>
                            <Alert className="mt-3" variant="success">
                                Not paid yet
                            </Alert>
                        </Col>
                    </Row>
                </Row>
                <br />
                <h2>Order items</h2>
                <ListGroup variant="flush">
                    {Array.from({ length: 3 }).map((item, idx) => (
                        <CartItemComponent key={idx} />
                    ))}
                </ListGroup>
            </Col>
            <Col md={4}>
                <ListGroup>
                    <ListGroupItem>
                        <h3>Order summary</h3>
                    </ListGroupItem>
                    <ListGroupItem>
                        Items price (after tax): <span className="fw-bold">$892</span>
                    </ListGroupItem>
                    <ListGroupItem>
                        Shipping: <span className="fw-bold">included</span>
                    </ListGroupItem>
                    <ListGroupItem>
                        Tax: <span className="fw-bold">included</span>
                    </ListGroupItem>
                    <ListGroupItem className="text-daner">
                        Total price: <span className="fw-bold">$904</span>
                    </ListGroupItem>
                    <ListGroupItem>
                        <div className="d-grid gap-2">
                            <Button size="lg" variant="danger" type="button">
                                Pay for the order
                            </Button>
                        </div>
                    </ListGroupItem>
                </ListGroup>
            </Col>
        </Row>
    </Container>
    );
}

export default UserCartDetailsPage;