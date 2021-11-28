import React, {useState} from 'react';
import Select from 'react-select';
import ProductService from './ProductService';
import * as myConst from './Constants'
import Button from 'react-bootstrap/Button';


const AddProduct = () => {
    const [formInput, setFormInput] = useState({
        name: ''
    })
    const [catID, setCatID] = useState("1");
    const [errors,setErrors] = useState("")
    
    const handleValidation = () => {
        let errors = {};
        let formValid = true;

        if(!formInput["name"]) {
            formValid = false;
            errors["name"] = "Cannot be empty";
        }

        setErrors({ errors: errors });
        return formValid;
    }

    const handleAdd = async () => {
        try {
            const res = await ProductService.createProduct(JSON.stringify({
                name: formInput["name"],
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
