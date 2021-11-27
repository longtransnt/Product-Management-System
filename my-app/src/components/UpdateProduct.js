import React, {useState} from "react";
import Select from "react-select";
import ProductService from "./ProductService";

const UpdateStudent = () => {
    const [formInput, setFormInput] = useState({
        id: '',
        name: '',
    })

    const [catID, setCatID] = useState("0")

    // Our sample dropdown options
    const options = [{ value: 1, label: 'Food' }, { value: 2, label: 'Grocery' },{ value: 3, label: 'Household' },
    { value: 4, label: 'Electronics' }, { value: 5, label: 'Mobile Phones' }, { value: 6, label: 'Make Ups' }, 
    { value: 7, label: 'Female Fashion' }, { value: 8, label: 'Male Fashion' }, { value: 9, label: 'Backpack and Suitcase' }, { value: 10, label: 'Accessories' }, { value: 11, label: 'Book' }, { value: 12, label: 'Computers' }]

    const handleUpdate = async (event) => {
        try {
            // make axios post request
            const res = await ProductService.update(JSON.stringify({ id: formInput["id"],
                name: formInput["name"],
                catID: catID.value
            }));
        } catch (error) {
            console.log(error)
        }
    }
    const handleQuery = (event) => {
        setFormInput({
            ...formInput,
            [event.target.name]: event.target.value
        });
    }

    const changeCat = (event) => {
        setCatID(event.target.value)
    }

    return (
        <form onSubmit={handleUpdate}>
            <h1>Update Product</h1>
            <input
                value={formInput.id}
                onChange={handleQuery}
                placeholder="ID"
                type="text"
                name="id"
                required
            />
            <br/>
            <input
                value={formInput.name}
                onChange={handleQuery}
                placeholder="Name"
                type="text"
                name="name"
            />
            <br/>
            <Select
                value={catID}
                onChange={setCatID}
                options={options}
            />
            <br/>
            <input type="submit" value="Update"/>
        </form>
    );
}

export default UpdateStudent;