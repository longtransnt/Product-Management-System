import React, {useEffect, useState} from 'react';
import ProductService from './ProductService';

const DeleteProduct = () => {

    const [id, setID] = useState("")

    const handleSubmit = async (event) => {
        try {
            const res = await ProductService.remove(id)
        } catch (error) {
            console.log(error)
        }
    }

    const handleDelete = (event) => {
        setID(event.target.value)
    }

    return (
        <form onSubmit={handleSubmit}>
            <h1>Remove Product</h1>
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
    );
}

export default DeleteProduct;