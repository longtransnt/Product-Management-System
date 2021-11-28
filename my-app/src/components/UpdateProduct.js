import React, {useState} from "react";
import Select from "react-select";
import ProductService from "./ProductService";
import * as myConst from './Constants';
import Button from 'react-bootstrap/Button';

const UpdateStudent = () => {
    const [formInput, setFormInput] = useState({
        id: '',
        name: '',
    })

    const [id, setID] = useState("")
    const [catID, setCatID] = useState("0")

    const handleUpdate = async (event) => {
        try {
            // make axios post request
            const res = await ProductService.updateProduct(JSON.stringify({ id: formInput["id"],
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

    const handleSubmit = async (event) => {
        try {
            const res = await ProductService.removeProduct(id)
        } catch (error) {
            console.log(error)
        }
    }

    const handleDelete = (event) => {
        setID(event.target.value)
    }

    return (
        <div class="container d-flex justify-content-center align-items-left" id="container">
            <div class="bg-white rounded shadow-5-strong p-5">
                <form onSubmit={handleUpdate}>
                    <h2>Update Product</h2>
                    <br/>
                    <input
                        value={formInput.id}
                        onChange={handleQuery}
                        placeholder="ID"
                        type="text"
                        name="id"
                        required
                    />
                    <br/>
                    <br/>
                    <input
                        value={formInput.name}
                        onChange={handleQuery}
                        placeholder="Name"
                        type="text"
                        name="name"
                    />
                    <br/>
                    <br/>
                    <Select
                        value={catID}
                        onChange={setCatID}
                        options={myConst.CATEGORIES}
                    />
                    <br/>
                    <input type="submit" value="Update"/>
                </form>
                <br/>
                <Button 
                    onClick={() => document.getElementById("delete-form").style.display="block"}
                >
                    Delete Item
                </Button>
                <div id="delete-form">
                    <form onSubmit={handleSubmit}>
                        <h2>Remove Product</h2>
                        <input
                            value={id}
                            onChange={handleDelete}
                            placeholder="ID"
                            type="text"
                            name="id"
                            required
                        />
                        <input type="submit" value="Delete"/>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default UpdateStudent;