import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Sites from "./components/Sites";
import AddProduct from "./components/AddProduct";

function App() {
  return (
    <div className="App">
      <Sites>
        <div label="Add Product">
            <AddProduct/>
        </div>
        <div label="Search Product">
        </div>
      </Sites>
    </div>
  );
}

export default App;
