import { Row, Col, Table, Button } from 'react-bootstrap';
import { LinkContainer } from "react-router-bootstrap";
import AdminLinksComponent from '../../components/admin/AdminLinksComponent';

const AdminProductsPage = () => {
    return (
        <Row className="m-5">
            <Col md={2}>
                <AdminLinksComponent />
            </Col>
            <Col md={10}>
                <h1>
                    Product List{" "}
                    <LinkContainer>
                        <Button variant="primary" size="lg">
                            Create new
                        </Button>
                    </LinkContainer>
                </h1>
                <Table striped bordered hover responsive>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Product Name</th>
                            <th>Price</th>
                            <th>Category</th>
                            <th>Edit/Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {[{ name: "Panasonic", price: "$250", category: "TV"},
                          { name: "Lenovo", price: "$1000", category: "Laptops"},
                          { name: "GTA 10", price: "$345", category: "Games"}].map((item, idx) => (
                            <tr key={idx}>
                                <td>{idx + 1}</td>
                                <td>{item.name}</td>
                                <td>{item.price}</td>
                                <td>{item.category}</td>
                                <td>
                                    <i className="bi bi-pencil-square"></i>
                                </td>
                                <td>
                                    Paypal
                                </td>
                                <td>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            </Col>
        </Row>
    )
}

export default AdminProductsPage;