// import { useState } from "react";
// import { getOldStorage, setLocalStorageData } from "../Services/localStorageData";
// import { Button, Container, Table } from "react-bootstrap";
// import { FaPenToSquare, FaTrash} from 'react-icons/fa6'
// import { useNavigate } from "react-router";

import { useState } from "react";
import { getOldStorage, setLocalStorageData } from "../Servise/LocalStorageData";
import { Button, Container, Table } from "react-bootstrap";
import { FaPenToSquare, FaTrash } from "react-icons/fa6";
import { useNavigate } from "react-router";


const Home = () => {
  const navigate = useNavigate();
  const [products, setProducts] = useState(getOldStorage());
  const [filterData, setFilterData] = useState(getOldStorage());
  const [search, setSearch] = useState("");

  const handleSearch = () => {
    // console.log("Search => ", search);
    let filterProducts = products.filter(product => product.title.toLowerCase().includes(search))
    setFilterData(filterProducts)
    setSearch("");
  }

  // const handleView = (id) => {
  //   navigate(`/view/${id}`);
  // }
  const handleEdit = (id) => {
    navigate(`/edit/${id}`);
  }

  const handleDelete = (id) => {
    let updatedData = products.filter((product) => product.id != id);
    setProducts(updatedData);
    setLocalStorageData(updatedData)
  }

  const handleSorting = (field, type) => {

    if (type === 'asc') {
      let sortedData = [...filterData].sort((a, b) => {
        return a[field].localeCompare(b[field]);
      })

      // console.log(sortedData);
      setFilterData(sortedData);
    } else if (type === 'desc') {
      let sortedData = [...filterData].sort((a, b) => {
        return b[field].localeCompare(a[field]);
      })

      // console.log(sortedData);
      setFilterData(sortedData);
    }

  }
  // const handleAsc = () => {
  //   let sortedData =    [...filterData].sort((a,b)=> {
  //       return a.title.localeCompare(b.title);
  //     })

  //     // console.log(sortedData);
  //     setFilterData(sortedData);
  // }
  // const handleDesc = () => {
  //   let sortedData =   [...filterData].sort((a,b)=> {
  //       return b.title.localeCompare(a.title);
  //     })

  //     // console.log(sortedData);
  //     setFilterData(sortedData);
  // }
  return (
    <>
      <div className="mt-4">
        <input type="text" name="search" value={search} onChange={(e) => setSearch(e.target.value)} /> &nbsp;
        <Button variant="secondary" onClick={handleSearch} >Search</Button>  &nbsp;
        {/* <Button variant="warning" onClick={() => handleSorting('asc')} >A-Z</Button>  &nbsp;
                <Button variant="success" onClick={() => handleSorting('desc')} >Z-A</Button>  &nbsp; */}
      </div>
      <Container className="d-flex gap-4 mt-4" >
        <Table>
          <tr>
            <th>#</th>
            <th>Title <Button onClick={() => handleSorting('title', 'asc')}>⬆️</Button> || <Button onClick={() => handleSorting('title', 'desc')}>⬇️</Button></th>
            <th>Description</th>
            <th>Category <Button onClick={() => handleSorting('category', 'asc')}>⬆️</Button> || <Button onClick={() => handleSorting('category', 'desc')}>⬇️</Button></th>
            <th>Price <Button onClick={() => handleSorting('price', 'asc')}>⬆️</Button> || <Button onClick={() => handleSorting('price', 'desc')}>⬇️</Button> </th>
            <th>Quantity <Button onClick={() => handleSorting('quantity', 'asc')}>⬆️</Button> || <Button onClick={() => handleSorting('quantity', 'desc')}>⬇️</Button> </th>
            <th>Image</th>
            <th colSpan={2}>Actions</th>
          </tr>
          {filterData.map((product) => (
            <tr key={product.id}>
              <td>{product.id}</td>
              <td>{product.title}</td>
              <td>{product.desc}</td>
              <td>{product.category}</td>
              <td>{product.price}</td>
              <td>{product.quantity}</td>
              <td><img src={product.image} height={100} /></td>
              <td><Button onClick={handleEdit}><FaPenToSquare /></Button></td>
              <td><Button onClick={handleDelete}><FaTrash /></Button></td>
            </tr>
          ))}
        </Table>
      </Container>

      {/* 
                  // <Container className=" view-section d-flex justify-content-center align-items-center mt-5">
    //   <Card style={{ width: "22rem", padding: "15px", boxShadow: "0px 4px 10px rgba(0,0,0,0.1)", borderRadius: "10px" }}>
    //     <Card.Img variant="top" src={book.book_image} style={{ borderRadius: "10px", height: "200px", objectFit: "cover" }} />
    //     <Card.Body className="text-center">
    //       <Card.Title style={{ fontSize: "24px", fontWeight: "bold" }}>{book.book_title}</Card.Title>
    //       <Card.Text style={{ fontSize: "16px", color: "gray" }}>{book.book_desc}</Card.Text>
    //       <Card.Text><strong>Price:</strong> ₹{book.book_price}</Card.Text>
    //       <Card.Text><strong>Author:</strong> {book.book_author}</Card.Text>
    //       <Card.Text><strong>Category:</strong> {book.book_category}</Card.Text>
    //       <Button variant="dark" onClick={() => navigate("/")}>Go Back</Button>
    //     </Card.Body>
    //   </Card>
    // </Container>

            */}
    </>
  )
};

export default Home;