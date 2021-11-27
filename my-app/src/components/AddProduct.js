import React, {useState} from 'react';
import Select from 'react-select';
import ProductService from './ProductService';

const AddProduct = () => {
    const [formInput, setFormInput] = useState({
        name: ''
    })

    const [catID, setCatID] = useState("1");
    const [errors,setErrors] = useState("")
    const options = [{ value: 1, label: 'Food' }, { value: 2, label: 'Grocery' },{ value: 3, label: 'Household' },
    { value: 4, label: 'Electronics' }, { value: 5, label: 'Mobile Phones' }, { value: 6, label: 'Make Ups' }, { value: 7, label: 'Female Fashion' }, { value: 8, label: 'Male Fashion' }, { value: 9, label: 'Backpack and Suitcase' }, { value: 10, label: 'Accessories' }, { value: 11, label: 'Book' }, { value: 12, label: 'Computers' }]

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
            const res = await ProductService.create(JSON.stringify({
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
        <form onSubmit={handleAdd}>
            <h1>Add new Item</h1>
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
            <Select
                value={catID}
                onChange={changeCat}
                options={options}
            />
            <br/>
            <input type="submit" value="Add"/>
        </form>
    );
}

export default AddProduct;
