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
        <div class="container d-flex justify-content-center align-items-left" id="container">
            <div class="bg-white rounded shadow-5-strong p-5">
                <form onSubmit={handleAdd}>
                    <h2>Add A New Item</h2>
                    <br/>
                    <input
                        value={formInput.name}
                        onChange={handleUpdate}
                        placeholder="Name"
                        type="text"
                        name="name"
                        required
                    />
                    <br/>
                    <br/>
                    <input
                        value={formInput.description}
                        onChange={handleUpdate}
                        placeholder="Product Description"
                        type="text"
                        name="description"
                        required
                    />
                    <br/>
                    <br/>
                    <Select
                        value={catID}
                        onChange={changeCat}
                        options={myConst.CATEGORIES}
                    />
                    <br/>
                    <Button class="btn"
                            type="submit" value="Add"
                        >
                            Add Product
                        </Button>
                </form>
            </div>
        </div>
    );
}

export default AddProduct;
