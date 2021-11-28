import React, {useState} from "react";
import Select from "react-select";
import ProductService from "./ProductService";
import * as myConst from './Constants';
import Button from 'react-bootstrap/Button';

const UpdateStudent = () => {
    const [formInput, setFormInput] = useState({id: '', name: '', description: ''})
    const [id, setID] = useState("")
    const [catID, setCatID] = useState("0")

    // Handle update request when update submit runs
    const handleUpdate = async (event) => {
        try {
            const res = await ProductService.updateProduct(JSON.stringify({ 
                id: formInput["id"],
                name: formInput["name"],
                description: formInput["description"],
                catID: catID.value
            }));
        } catch (error) {
            console.log(error)
        }
    }

    // Handle Form Input Change
    const handleQuery = (event) => {
        setFormInput({
            ...formInput,
            [event.target.name]: event.target.value
        });
    }

    // Handle remove product submit
    const handleSubmit = async (event) => {
        try {
            const res = await ProductService.removeProduct(id)
        } catch (error) {
            console.log(error)
        }
    }

    // Handle input delete id 
    const handleDelete = (event) => {
        setID(event.target.value)
    }

    return (
        <div className="container d-flex justify-content-center align-items-left" id="container">
            <div className="bg-white rounded shadow-5-strong p-5">
                    <h2>Update Product</h2>
                    <br/>
                   
                    <form onSubmit={handleUpdate}>
                        <div className="form-group row">
                            <label for="inputID" class="col-sm-6 col-form-label col-form-label">Product ID:</label>
                            <div class="col-sm-2">
                                <input
                                    className="form-input"
                                    value={formInput.id}
                                    onChange={handleQuery}
                                    placeholder="ID"
                                    type="text"
                                    name="id"
                                    required
                                    id="inputID"
                                />
                            </div>
                            <br/>
                            <label for="inputName" class="col-sm-6 col-form-label col-form-label">Product Name:</label>
                            <div class="col-sm-2">
                                <input
                                    className="form-input"
                                    value={formInput.name}
                                    onChange={handleQuery}
                                    placeholder="Name"
                                    type="text"
                                    name="name"
                                    id="inputName"
                                />
                            </div>
                            <br/>
                            <label for="inputDescription" class="col-sm-6 col-form-label col-form-label">Product Description:</label>
                            <div class="col-sm-2">
                                <input
                                    className="form-input"
                                    value={formInput.description}
                                    onChange={handleQuery}
                                    placeholder="Description"
                                    type="text"
                                    name="description"
                                    id="inputDescription"
                                />
                            </div>
                            <br/>
                            <label for="inputCategory" class="col-sm-6 col-form-label col-form-label">Product Category:</label>
                            <div class="col-sm-3">
                                <Select
                                    className="form-input"
                                    value={catID}
                                    onChange={setCatID}
                                    options={myConst.CATEGORIES}
                                    id="inputCategory"
                                />
                            </div>
                            <div class="col-sm-12 col-form-label col-form-label-lg">
                                <Button class="btn"
                                    type="submit" value="Update"
                                    variant="success"
                                >
                                    Update
                                </Button>
                            </div>
                            <div class="col-sm-12 col-form-label col-form-label-lg">
                            <Button class="btn"
                                variant="danger"
                                onClick={() => document.getElementById("delete-form").style.display="block"}
                            >
                                Delete Item
                            </Button>
                            </div>
                            <br/>
                        </div>
                    </form>
                    
                <div id="delete-form">
                    <h2>Remove Product</h2>
                    <br/>
                    <form onSubmit={handleSubmit}>
                        <div className="form-group row">
                            <label for="inputID" class="col-sm-6 col-form-label col-form-label">Product ID:</label>
                            <div class="col-sm-2">
                                <input
                                    className="form-input"
                                    value={id}
                                    onChange={handleDelete}
                                    placeholder="ID"
                                    type="text"
                                    name="id"
                                    required
                                />
                            </div>
                            <br/>
                            <div class="col-sm-12 col-form-label col-form-label-lg">
                                <Button class="btn"
                                    type="submit" value="Delete"
                                    variant="danger"
                                >
                                    Confirm Delete
                                </Button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default UpdateStudent;