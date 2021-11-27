import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Sites from "./components/Sites";
import AddProduct from "./components/AddProduct";
import ProductTable from './components/ProductTable';
import DeleteProduct from './components/DeleteProduct';
import UpdateProduct from './components/UpdateProduct';

function App() {
  return (
    <div className="App">
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
