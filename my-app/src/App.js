import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Sites from "./components/Sites";
import AddProduct from "./components/AddProduct";
import ProductTable from './components/ProductTable';
import DeleteProduct from './components/DeleteProduct';
import UpdateProduct from './components/UpdateProduct';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import logo from'./logo.svg';
import { Nav } from 'react-bootstrap';
import { NavLink } from 'react-bootstrap';

function App() {
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
        React Bootstrap
        </Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="#ProductTable">Product Table</Nav.Link>
          <Nav.Link href="#AddProduct">Add Product</Nav.Link>
          <Nav.Link href="#UpdateProduct">Update Product</Nav.Link>
          <Nav.Link href="#deleteProduct">Delete Product</Nav.Link>
        </Nav>
      </Container>
    </Navbar>

      <Sites>
        <div label="Product Table">
            <ProductTable/>
        </div>
        <div label="Add Product">
            <AddProduct/>
        </div>
        <div label="Update Product">
            <UpdateProduct/>
        </div>
        <div label="Delete Product">
            <DeleteProduct/>
        </div>
      </Sites>
    </div>
  );
}

export default App;
