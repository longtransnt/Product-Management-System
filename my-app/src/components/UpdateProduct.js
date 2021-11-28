import React, {useState} from "react";
import Select from "react-select";
import ProductService from "./ProductService";
import * as myConst from './Constants'

const UpdateStudent = () => {
    const [formInput, setFormInput] = useState({
        id: '',
        name: '',
    })

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
                options={myConst.CATEGORIES}
            />
            <br/>
            <input type="submit" value="Update"/>
        </form>
    );
}

export default UpdateStudent;