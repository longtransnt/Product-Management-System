import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import AddProduct from "./components/AddProduct";
import ProductTable from './components/ProductTable';
import UpdateProduct from './components/UpdateProduct';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import logo from'./logo.svg';
import { Nav } from 'react-bootstrap';
import { useState } from 'react';

function App() {
  const [page, setPage] = useState('Product Table')
  return (
    <div className="App">
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#home">
          <img
            alt=""
            src={logo}
            width="30"
            height="30"
            className="d-inline-block align-top"
          />{' '}
        My Online Store App
        </Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link onClick={()=>setPage('Product Table')}>Product Table</Nav.Link>
          <Nav.Link onClick={()=>setPage('Add Product')}>Add Product</Nav.Link>
          <Nav.Link onClick={()=>setPage('Update Product')}>Edit/Delete Product</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
      {page==='Product Table'? <ProductTable/>: ''} 
      {page==='Add Product'? <AddProduct/>: ''}
      {page==='Update Product'? <UpdateProduct/>: ''}
    </div>
  );
}

export default App;
