import { useEffect, useState } from "react";
import { Button, Col, Container, Form, Row, Table, Alert } from "react-bootstrap";
import { FaEdit, FaTrash } from "react-icons/fa";

const getOldStorage = () => {
  return JSON.parse(sessionStorage.getItem('products')) || []
}

const SessionCrud = () => {
  const initalProduct = {
    id: "",
    title: "",
    desc: "",
    price: "",
    category: "",
  };
  let [inputForm, setInputForm] = useState(initalProduct);
  const [storage, setStorage] = useState(getOldStorage());
  const [isEdit, setIsEdit] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputForm({
      ...inputForm,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!inputForm.title || !inputForm.desc || !inputForm.price || !inputForm.category) {
      setError("All fields are required!");
      return;
    }
    setError("");
    
    if (isEdit) {
      let updateData = storage.map(item => item.id === inputForm.id ? inputForm : item);
      setStorage(updateData);
      setIsEdit(false);
    } else {
      let id = Math.floor(Math.random() * 100000);
      let newProduct = { ...inputForm, id: id };
      setStorage([...storage, newProduct]);
    }
    setInputForm(initalProduct);
  };

  const handleDelete = (id) => {
    let updatedStorage = storage.filter((product) => product.id !== id);
    setStorage(updatedStorage);
  };
  
  const handleEdit = (id) => {
    let singleProduct = storage.find(product => product.id === id);
    setInputForm(singleProduct);
    setIsEdit(true);
  };

  useEffect(() => {
    sessionStorage.setItem("products", JSON.stringify(storage));
  }, [storage]);

  return (
    <>
      <Container>
        <Row>
          <Col sm="6">
          <h1 className="data">Session-Storage</h1>
            <h2 className="crud-data">{isEdit ? "Edit" : "Add"} Product</h2>
            {error && <Alert variant="danger">{error}</Alert>}
            <Form onSubmit={handleSubmit}>
              <Form.Group className="mb-3">
                <Form.Label>Title</Form.Label>
                <Form.Control type="text" placeholder="Enter Title" name="title" value={inputForm.title} onChange={handleChange} />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Description</Form.Label>
                <Form.Control type="text" placeholder="Enter Description" name="desc" value={inputForm.desc} onChange={handleChange} />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Price</Form.Label>
                <Form.Control type="text" placeholder="Enter price" name="price" value={inputForm.price} onChange={handleChange} />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Category</Form.Label>
                <Form.Select name="category" value={inputForm.category} onChange={handleChange}>
                  <option value="">Select Category</option>
                  <option value="Fashion">Fashion</option>
                  <option value="Electronics">Electronics</option>
                  <option value="Jewelry">Jewelry</option>
                  <option value="Fast-Food">Fast-Food</option>
                </Form.Select>
              </Form.Group>
              <Button variant="secondary" type="submit">{isEdit ? "Update" : "Add"} Product</Button>
            </Form>
          </Col>
          <Col sm="6">
            <h2 className="crud-data">View Products</h2>
            <Table striped bordered hover variant="light">
              <thead>
                <tr>
                  <th>#</th>
                  <th>Title</th>
                  <th>Description</th>
                  <th>Price</th>
                  <th>Category</th>
                  <th colSpan={2}>Actions</th>
                </tr>
              </thead>
              <tbody>
                {storage.map((product) => (
                  <tr key={product.id}>
                    <td>{product.id}</td>
                    <td>{product.title}</td>
                    <td>{product.desc}</td>
                    <td>{product.price}</td>
                    <td>{product.category}</td>
                    <td><Button variant="warning" onClick={() => handleEdit(product.id)}><FaEdit /></Button></td>
                    <td><Button variant="danger" onClick={() => handleDelete(product.id)}><FaTrash /></Button></td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default SessionCrud;
