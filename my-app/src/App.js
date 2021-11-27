import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Sites from "./components/Sites";
import AddProduct from "./components/AddProduct";
import ProductTable from './components/ProductTable';

function App() {
  return (
    <div className="App">
      <Sites>
        <div label="Add Product">
            <AddProduct/>
        </div>
        <div label="Product Table">
            <ProductTable/>
        </div>
      </Sites>
    </div>
  );
}

export default App;
