import React, {useState} from 'react';
import Select from 'react-select';
import ProductService from './ProductService';
import * as myConst from './Constants'
import Button from 'react-bootstrap/Button';


const AddProduct = () => {
    const [formInput, setFormInput] = useState({
        name: '',
        description: ''
    })
    const [catID, setCatID] = useState("1");
    const [errors,setErrors] = useState("")
    
    const handleValidation = () => {
        let errors = {};
        let formValid = true;

        if(!formInput["name"]) {
            formValid = false;
            errors["name"] = "Name must be entered";
        }

        if(!formInput["description"]) {
            formValid = false;
            errors["description"] = "Description must be entered";
        }

        setErrors({ errors: errors });
        return formValid;
    }

    const handleAdd = async () => {
        try {
            const res = await ProductService.createProduct(JSON.stringify({
                name: formInput["name"],
                description: formInput["description"],
                catID: catID.value}));
        } catch (error) {
            console.log(error)
        }
    }
    const handleUpdate = (event) => {
        setFormInput({
            ...formInput,
            [event.target.name]: event.target.value
        });
    }

    const changeCat = (catID) => {
        setCatID(catID)
        console.log(catID)
    }

    return (
        <div class="container d-flex justify-content-center align-items-center" id="container">
            <div class="bg-white rounded shadow-5-strong p-5">
                <h2>Add A New Item</h2>
                <br/>
                <form onSubmit={handleAdd}>
                    <div class="form-group row">
                        <label for="inputName" class="col-sm-6 col-form-label col-form-label">Product Name:</label>
                        <div class="col-sm-2">
                            <input
                                id="inputName"
                                className="form-input"
                                value={formInput.name}
                                onChange={handleUpdate}
                                placeholder="Name"
                                type="text"
                                name="name"
                                required
                            />
                        </div>
                        <label for="inputDescription" class="col-sm-6 col-form-label col-form-label">Product Description:</label>
                        <div class="col-sm-2">
                            <input
                                className="form-input"
                                value={formInput.description}
                                onChange={handleUpdate}
                                placeholder="Product Description"
                                type="text"
                                id="inputDescription"
                                name="description"
                                required
                            />
                            </div>
                        <br/>
                        <label for="inputSelect" class="col-sm-6 col-form-label col-form-label">Product Category:</label>
                        <div class="col-sm-3">
                            <Select
                                className="form-input"
                                value={catID}
                                onChange={changeCat}
                                options={myConst.CATEGORIES}
                                id="inputSelect"
                            />
                        </div>
                        <br/>
                        <div class="col-sm-12 col-form-label col-form-label-lg">
                            <Button class="btn" type="submit" value="Add">
                                Add Product
                            </Button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default AddProduct;
